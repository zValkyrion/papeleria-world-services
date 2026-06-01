"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { Loader2, Sparkles, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface FrameMetadata {
  frameCount: number;
  fps: number;
  pattern: string;
}

interface ScrollVideoProps {
  /**
   * Zoom para pantallas de escritorio (ancho > 768px).
   * Por defecto: 1.0 (tamaño original).
   */
  zoom?: number;
  /**
   * Zoom para pantallas móviles (ancho <= 768px).
   * Por defecto: 0.65 (menos zoom para que se vea más contenido).
   */
  mobileZoom?: number;
}

export default function ScrollVideo({ zoom = 1.0, mobileZoom = 0.5 }: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const hasInitialized = useRef(false);

  const activeSection = progress < 0.25 ? 0 : progress < 0.75 ? 1 : 2;

  const sectionLabels = [
    { num: "01", title: "EXPERIENCIAS VISUALES" },
    { num: "02", title: "DOMINIO DE MATERIALES" },
    { num: "03", title: "MAESTRÍA EN IMPRESIÓN" }
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameIndex = useRef(-1);
  const metadataRef = useRef<FrameMetadata | null>(null);

  // Control refs for auto-scroll and bounce logic
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const scrollDirectionRef = useRef<number>(1); // 1 = forward/down, -1 = backward/up
  const isProgrammaticScrollingRef = useRef<boolean>(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Refs to resolve circular callback dependency / hoisting issues
  const startIdleTimerRef = useRef<(() => void) | null>(null);
  const triggerAutoScrollRef = useRef<(() => void) | null>(null);

  // ── Auto Scroll Logic ─────────────────────────────────────────────
  const triggerAutoScroll = useCallback(() => {
    const tl = timelineRef.current;
    if (!tl || !tl.scrollTrigger) return;

    const scrollTrigger = tl.scrollTrigger;

    const progressVal = scrollTrigger.progress;

    // If the user has already scrolled past the hero section (progress 1),
    // do not trigger auto‑scroll. This prevents the page from jumping back
    // to the hero when the user is viewing other modules.
    if (progressVal >= 1) {
      return;
    }

    // Determine nearest section
    let currentSection = 0;
    if (progressVal < 0.25) {
      currentSection = 0;
    } else if (progressVal >= 0.75) {
      currentSection = 2;
    } else {
      currentSection = 1;
    }

    // Determine target section with bounce logic
    let targetSection = 1;
    if (currentSection === 0) {
      scrollDirectionRef.current = 1;
      targetSection = 1;
    } else if (currentSection === 2) {
      scrollDirectionRef.current = -1;
      targetSection = 1;
    } else {
      if (scrollDirectionRef.current === 1) {
        targetSection = 2;
      } else {
        targetSection = 0;
      }
    }

    const sectionProgressOffsets = [0, 0.5, 1];
    const targetProgress = sectionProgressOffsets[targetSection];

    const startScroll = scrollTrigger.start;
    const endScroll = scrollTrigger.end;
    const targetScrollY = startScroll + targetProgress * (endScroll - startScroll);

    isProgrammaticScrollingRef.current = true;

    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    const scrollObj = { y: window.scrollY };
    tweenRef.current = gsap.to(scrollObj, {
      y: targetScrollY,
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => {
        window.scrollTo(0, scrollObj.y);
      },
      onComplete: () => {
        isProgrammaticScrollingRef.current = false;
        startIdleTimerRef.current?.();
      },
      onInterrupt: () => {
        isProgrammaticScrollingRef.current = false;
      }
    });
  }, []);

  const startIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = setTimeout(() => {
      triggerAutoScrollRef.current?.();
    }, 4000);
  }, []);

  const resetIdleTimer = useCallback(() => {
    if (isProgrammaticScrollingRef.current) return;
    if (tweenRef.current) {
      tweenRef.current.kill();
      tweenRef.current = null;
    }
    startIdleTimer();
  }, [startIdleTimer]);

  const handleDotClick = useCallback((sectionIndex: number) => {
    const tl = timelineRef.current;
    if (!tl || !tl.scrollTrigger) return;

    const scrollTrigger = tl.scrollTrigger;
    const sectionProgressOffsets = [0, 0.5, 1];
    const targetProgress = sectionProgressOffsets[sectionIndex];

    const startScroll = scrollTrigger.start;
    const endScroll = scrollTrigger.end;
    const targetScrollY = startScroll + targetProgress * (endScroll - startScroll);

    isProgrammaticScrollingRef.current = true;

    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    const scrollObj = { y: window.scrollY };
    tweenRef.current = gsap.to(scrollObj, {
      y: targetScrollY,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => {
        window.scrollTo(0, scrollObj.y);
      },
      onComplete: () => {
        isProgrammaticScrollingRef.current = false;
        startIdleTimerRef.current?.();
      },
      onInterrupt: () => {
        isProgrammaticScrollingRef.current = false;
      }
    });
  }, []);

  // Keep references fresh to avoid circularity issues
  useEffect(() => {
    startIdleTimerRef.current = startIdleTimer;
    triggerAutoScrollRef.current = triggerAutoScroll;
  });

  // ── Find closest loaded frame ────────────────────────────────────
  const getClosestLoadedFrame = useCallback((targetIndex: number) => {
    const frames = framesRef.current;
    if (frames.length === 0) return null;

    const max = frames.length - 1;
    const target = Math.max(0, Math.min(targetIndex, max));

    // Fast path: target is loaded
    if (frames[target]) return frames[target];

    // Scan outwards to find the nearest loaded frame
    let offset = 1;
    while (target - offset >= 0 || target + offset <= max) {
      if (target - offset >= 0 && frames[target - offset]) {
        return frames[target - offset];
      }
      if (target + offset <= max && frames[target + offset]) {
        return frames[target + offset];
      }
      offset++;
    }

    return null;
  }, []);

  // ── Draw a frame to canvas ───────────────────────────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const frame = getClosestLoadedFrame(index);
    if (!frame) return;

    // Avoid redundant renders
    if (index === currentFrameIndex.current && canvas.dataset.rendered === "true") {
      return;
    }
    currentFrameIndex.current = index;
    canvas.dataset.rendered = "true";

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    // Object-cover crop math
    const fa = frame.naturalWidth / frame.naturalHeight;
    const ca = w / h;
    let sx = 0, sy = 0, sw = frame.naturalWidth, sh = frame.naturalHeight;

    if (fa > ca) {
      sw = frame.naturalHeight * ca;
      sx = (frame.naturalWidth - sw) / 2;
    } else {
      sh = frame.naturalWidth / ca;
      sy = (frame.naturalHeight - sh) / 2;
    }

    ctx.drawImage(frame, sx, sy, sw, sh, 0, 0, w, h);
  }, [getClosestLoadedFrame]);

  // ── Init ScrollTrigger ───────────────────────────────────────────
  const initScrollTrigger = useCallback((frameCount: number) => {
    const container = containerRef.current;
    const pin = pinRef.current;
    if (!container || !pin || frameCount === 0) return;
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Instantly draw the first frame
    drawFrame(0);

    const ctx = gsap.context(() => {
      const proxy = { frame: 0 };
      const maxFrame = frameCount - 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          pin: pin,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => setProgress(self.progress),
          snap: {
            snapTo: [0, 0.5, 1],
            duration: { min: 2, max: 2 },
            delay: 0.12,
            ease: "power2.inOut",
          },
        },
      });

      timelineRef.current = tl;

      tl.to(
        proxy,
        {
          frame: maxFrame,
          ease: "none",
          duration: 1,
          onUpdate: () => drawFrame(Math.round(proxy.frame)),
        },
        0
      );

      // Text transition animations
      // Screen 1 exits between 0.1 and 0.25
      tl.to(
        text1Ref.current,
        { opacity: 0, y: -40, scale: 0.95, duration: 0.15, ease: "power2.inOut" },
        0.1
      );

      // Screen 2 enters between 0.35 and 0.50
      tl.fromTo(
        text2Ref.current,
        { opacity: 0, y: 40, scale: 1.05 },
        { opacity: 1, y: 0, scale: 1, duration: 0.15, ease: "power2.out" },
        0.35
      );

      // Screen 2 exits between 0.55 and 0.70
      tl.to(
        text2Ref.current,
        { opacity: 0, y: -40, scale: 0.95, duration: 0.15, ease: "power2.in" },
        0.55
      );

      // Screen 3 enters between 0.80 and 0.95
      tl.fromTo(
        text3Ref.current,
        { opacity: 0, y: 40, scale: 1.05 },
        { opacity: 1, y: 0, scale: 1, duration: 0.15, ease: "power2.out" },
        0.8
      );
    }, container);

    return ctx;
  }, [drawFrame]);

  // ── Main Controller ──────────────────────────────────────────────
  useEffect(() => {
    let gsapCtx: gsap.Context | undefined;
    let active = true;

    // Accessibility/Reduced Motion: simple looping video
    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
      return;
    }

    const loadAndSetup = async () => {
      try {
        // 1. Fetch metadata
        const res = await fetch(`${basePath}/frames/metadata.json`);
        if (!res.ok) throw new Error("Metadata not found");
        const metadata: FrameMetadata = await res.json();
        metadataRef.current = metadata;

        const count = metadata.frameCount;
        const frames: (HTMLImageElement | null)[] = new Array(count).fill(null);
        framesRef.current = frames;

        // 2. Load first frame immediately to unblock the page
        const firstImg = new Image();
        firstImg.src = `${basePath}/frames/frame_001.webp`;

        await new Promise<void>((resolve, reject) => {
          firstImg.onload = () => {
            if (!active) return;
            frames[0] = firstImg;
            resolve();
          };
          firstImg.onerror = () => reject(new Error("First frame failed to load"));
        });

        if (!active) return;

        // 3. Initialize ScrollTrigger with the first frame loaded
        setIsLoading(false);
        gsapCtx = initScrollTrigger(count);

        // 4. Background progressive preloader
        let loadedCount = 1;
        setLoadProgress(loadedCount / count);

        // Load rest of frames progressively
        const loadFrame = (index: number): Promise<void> => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            const paddedIndex = String(index + 1).padStart(3, "0");
            img.src = `${basePath}/frames/frame_${paddedIndex}.webp`;

            img.onload = () => {
              if (active) {
                frames[index] = img;
                loadedCount++;
                setLoadProgress(loadedCount / count);
                // Trigger canvas redraw for current viewport position
                if (currentFrameIndex.current === index || (currentFrameIndex.current !== -1 && !frames[currentFrameIndex.current])) {
                  drawFrame(currentFrameIndex.current);
                }
              }
              resolve();
            };

            img.onerror = () => {
              // Fail silently, closest loaded frame logic will handle fallback
              resolve();
            };
          });
        };

        // Load in concurrent chunks to maximize speed without choking browser network
        const chunkElements = Array.from({ length: count - 1 }, (_, i) => i + 1);
        const chunkSize = 6;
        for (let i = 0; i < chunkElements.length; i += chunkSize) {
          if (!active) break;
          const chunk = chunkElements.slice(i, i + chunkSize);
          await Promise.all(chunk.map(idx => loadFrame(idx)));
        }

      } catch (err) {
        console.error("[ScrollVideo] Frame loading failed, using fallback:", err);
        setIsLoading(false);
      }
    };

    loadAndSetup();

    // Responsive Canvas Resize
    const onResize = () => {
      const prev = currentFrameIndex.current;
      currentFrameIndex.current = -1;
      if (prev !== -1) drawFrame(prev);
    };
    window.addEventListener("resize", onResize);

    return () => {
      active = false;
      window.removeEventListener("resize", onResize);
      if (gsapCtx) gsapCtx.revert();
      framesRef.current = [];
      hasInitialized.current = false;
      currentFrameIndex.current = -1;
      timelineRef.current = null;
    };
  }, [shouldReduceMotion, initScrollTrigger, drawFrame]);

  // ── Auto Scroll Event Listeners & Lifecycle ──────────────────────
  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleInteraction = () => {
      if (tweenRef.current) {
        isProgrammaticScrollingRef.current = false;
        tweenRef.current.kill();
        tweenRef.current = null;
      }
      resetIdleTimer();
    };

    const handleScroll = () => {
      if (!isProgrammaticScrollingRef.current) {
        handleInteraction();
      }
    };

    window.addEventListener("wheel", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("touchmove", handleInteraction, { passive: true });
    window.addEventListener("mousedown", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Start initial timer
    startIdleTimer();

    return () => {
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("touchmove", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [shouldReduceMotion, resetIdleTimer, startIdleTimer]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative w-full h-[500vh] bg-[#080512]"
    >
      <div
        ref={pinRef}
        className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-[#080512]"
      >
        {/* Loading/Fade-in screen (super short, finishes when 1st frame loads) */}
        {isLoading && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#080512]">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500 mb-4" />
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest">
              Preparando Experiencia...
            </p>
          </div>
        )}

        {/* Subtle cinematic gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

        {/* Contenedor del video con escala (zoom) configurable y responsiva */}
        <div
          style={{
            "--zoom-desktop": String(zoom),
            "--zoom-mobile": String(mobileZoom),
          } as React.CSSProperties}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none transition-transform duration-500 ease-out hero-video-scale-container"
        >
          {(!isMounted || !shouldReduceMotion) ? (
            <>
              {/* Fallback image for SEO, screen readers and instant LCP/FCP rendering */}
              <img
                src={`${basePath}/frames/frame_001.webp`}
                alt="WORLD SERVICES - Comunicación Visual Premium, Impresión Gran Formato y Corte Láser"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out pointer-events-none"
                style={{ opacity: (!isMounted || isLoading) ? 1 : 0 }}
              />
              {/* Canvas — renders frames ultra-smoothly */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />
            </>
          ) : (
            <video
              src={`${basePath}/videoHero.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        <style>{`
          .hero-video-scale-container {
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            width: calc(100% / var(--zoom-desktop)) !important;
            height: calc(100% / var(--zoom-desktop)) !important;
            transform: translate(-50%, -50%) scale(var(--zoom-desktop)) !important;
            transform-origin: center center !important;
          }
          @media (max-width: 768px) {
            .hero-video-scale-container {
              width: calc(100% / var(--zoom-mobile)) !important;
              height: calc(100% / var(--zoom-mobile)) !important;
              transform: translate(-50%, -50%) scale(var(--zoom-mobile)) !important;
            }
          }
        `}</style>

        {/* Subtle ambient top lighting edge */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080512]/60 to-transparent z-10 pointer-events-none" />

        {/* Storytelling texts */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-6 pb-16 sm:pb-6">
          <div className="max-w-4xl text-center flex flex-col items-center">
            {/* Screen 1 */}
            <div ref={text1Ref} className="absolute flex flex-col items-center gap-3 sm:gap-4 w-full px-1 hero-text-shadow">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-purple-300">
                <Sparkles className="w-3 h-3 text-orange-400" />
                World Services · 2026
              </span>
              <h1 className="text-[1.7rem] sm:text-4xl md:text-7xl font-extrabold tracking-tighter leading-[1.08] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
                Transformamos Ideas en <br />
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent hero-gradient-shadow">Experiencias Visuales</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-zinc-200 font-medium max-w-xl leading-relaxed mt-1 sm:mt-2 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]">
                Impresión, rotulación, señalética, promocionales y soluciones
                visuales premium que hacen crecer tu marca.
              </p>
              <div className="mt-8 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Haz scroll para explorar
                </span>
                <ChevronDown className="w-4 h-4 text-zinc-300" />
              </div>
            </div>

            {/* Screen 2 */}
            <div ref={text2Ref} className="absolute flex flex-col items-center gap-3 sm:gap-4 opacity-0 pointer-events-none w-full px-1 hero-text-shadow">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-950/30 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-orange-400">
                Dominio de Materiales
              </span>
              <h2 className="text-[1.5rem] sm:text-3xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
                La Elegancia del Acrílico, <br />
                la Potencia del Gran Formato.
              </h2>
              <p className="text-[0.7rem] sm:text-xs md:text-base text-zinc-200 max-w-xl leading-relaxed mt-1 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]">
                Especialistas en materiales rígidos, lonas de alta resistencia y
                acabados que resisten los estándares más exigentes de la industria.
              </p>
            </div>

            {/* Screen 3 */}
            <div ref={text3Ref} className="absolute flex flex-col items-center gap-3 sm:gap-4 opacity-0 pointer-events-none w-full px-1 hero-text-shadow">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-950/30 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-purple-400">
                Aliado Estratégico
              </span>
              <h3 className="text-[1.5rem] sm:text-3xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
                ¿Listo para Llevar tu Marca <br />
                al Siguiente Nivel?
              </h3>
              <p className="text-[0.7rem] sm:text-xs md:text-base text-zinc-200 max-w-xl leading-relaxed mt-1 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]">
                Desde la asesoría técnica en sustratos hasta la instalación
                final. Calidad que se puede tocar y ver.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center">
                <a
                  href="#contacto"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-purple-600 to-orange-500 hover:scale-105 transition-transform text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] text-center w-full sm:w-auto"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="#servicios"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-zinc-200 text-center w-full sm:w-auto"
                >
                  Explorar Servicios
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant top/bottom loading progress indicator */}
        {!isLoading && loadProgress < 1 && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
            <span className="text-zinc-500 text-[8px] font-mono tracking-widest uppercase animate-pulse">
              Cargando animación HD ({Math.round(loadProgress * 100)}%)
            </span>
            <div className="w-24 h-[1px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-300"
                style={{ width: `${loadProgress * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Navigation / Interactive Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-center justify-between text-zinc-400 text-[9px] sm:text-[10px] font-mono select-none">
          <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] min-w-0 sm:min-w-[120px] transition-all duration-300 shrink-0">
            0{activeSection + 1} / WORLD SERVICES
          </span>

          <div className="flex items-center justify-center gap-3 mx-4 py-2">
            {/* 3 interactive dots */}
            {[0, 1, 2].map((idx) => {
              const isActive = activeSection === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Ir a la sección ${idx + 1}`}
                  className={`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 outline-none group ${isActive
                      ? "scale-125 cursor-default"
                      : "cursor-pointer"
                    }`}
                >
                  {/* Outer Ring / Glow */}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive
                      ? "bg-purple-500/30 scale-150 animate-pulse"
                      : "bg-transparent group-hover:bg-white/5 scale-100"
                    }`} />

                  {/* Inner Dot */}
                  <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive
                      ? "bg-gradient-to-r from-purple-400 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                      : "bg-white/40 group-hover:bg-white/80"
                    }`} />
                </button>
              );
            })}
          </div>

          <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] min-w-0 sm:min-w-[150px] text-right transition-all duration-300 shrink-0 hidden sm:inline">
            {sectionLabels[activeSection].title}
          </span>
        </div>
      </div>
    </section>
  );
}
