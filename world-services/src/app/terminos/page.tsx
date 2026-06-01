import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terminos() {
  return (
    <div className="relative min-h-screen bg-white text-[#120830] overflow-hidden flex flex-col justify-between">
      {/* Background Glow Details */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-200/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Navbar - will handle anchors automatically as a Server Component */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1 pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
        <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono block mb-4">
          Normativa de Operación Comercial
        </span>
        <h1 className="text-4xl font-extrabold tracking-tighter text-[#120830] mb-8">
          Términos y Condiciones
        </h1>
        
        <div className="prose prose-purple text-zinc-600 text-sm leading-relaxed flex flex-col gap-6 font-normal">
          <p>
            Bienvenido a <strong>WORLD SERVICES</strong>. Al acceder a nuestro sitio web (<a href="https://worldservices.com.mx" className="text-purple-600 font-bold hover:underline">https://worldservices.com.mx</a>) y solicitar nuestros servicios de comunicación visual, impresión de gran formato, rotulación, corte láser y señalética, usted acepta regirse por los siguientes términos y condiciones de uso.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">1. Propósito de los Servicios</h2>
          <p>
            WORLD SERVICES ofrece una plataforma interactiva de exhibición de proyectos e inicio de cotizaciones. Su eslogan principal es <strong>&ldquo;YO LO HAGO POR TI&rdquo;</strong>, lo que representa nuestro compromiso total de asesoría y montaje integral. Actuamos como un socio estratégico premium para marcas en México que requieran branding físico y corporativo.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">2. Proceso de Cotización y Pedidos</h2>
          <p>
            Cualquier solicitud de cotización enviada a través de nuestro formulario inteligente o canales directos (WhatsApp, llamada) representa un primer contacto consultivo:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Las cotizaciones preliminares se basan en las especificaciones provistas por el cliente (sustratos, dimensiones, volumen) y no constituyen un contrato final hasta que sean formalizadas por escrito.</li>
            <li>El cliente es responsable de garantizar la precisión de las medidas y los logotipos/archivos de diseño enviados para la impresión digital o corte láser.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#120830] mt-6">3. Tiempos de Entrega e Instalación</h2>
          <p>
            Seguimos un estricto proceso de 5 fases (Asesoría, Diseño y Montaje Virtual, Producción de Alta Gama, Instalación Certificada y Control de Calidad) para mitigar cualquier retraso:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Los plazos de entrega estimados se calculan tras la recepción de los archivos finales autorizados y el anticipo correspondiente.</li>
            <li>Las instalaciones de rotulación de flotillas y fachadas volumétricas rígidas requieren condiciones de luz, espacio y clima viables. WORLD SERVICES garantiza que su equipo de instalación cumple con la capacitación técnica exigida.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#120830] mt-6">4. Sustratos y Materiales Premium</h2>
          <p>
            Garantizamos el uso de insumos de primera clase mundial: viniles automotrices 3M / Avery fundidos, acrílico cristal o espejo pulido, placas rígidas de Trovicel o Coroplast, y lonas de alta resistencia (mesh, front, backlight). Los acabados exteriores cuentan con protección UV laminada para maximizar la durabilidad.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">5. Limitación de Responsabilidad</h2>
          <p>
            WORLD SERVICES no es responsable por daños indirectos derivados del uso incorrecto o falta de mantenimiento de la señalética instalada por parte del cliente. En caso de defectos de producción o fallas de adherencia en viniles, nuestra garantía se limita a la reposición o reparación física del elemento afectado dentro del plazo acordado.
          </p>

          <h2 className="text-lg font-bold text-[#120830] mt-6">6. Modificaciones de los Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Le recomendamos consultar esta sección de forma periódica para informarse de cualquier cambio en nuestras directrices operativas.
          </p>

          <p className="text-xs text-zinc-400 mt-8">
            Última actualización: 1 de Junio de 2026.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
