/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load ffmpeg-static path
let ffmpegPath;
try {
  ffmpegPath = require('ffmpeg-static');
} catch (e) {
  console.error("Error: ffmpeg-static is not installed. Please run 'npm install -D ffmpeg-static' first.");
  process.exit(1);
}

const VIDEO_PATH = path.join(__dirname, '..', 'public', 'videoHero.mp4');
const FRAMES_DIR = path.join(__dirname, '..', 'public', 'frames');

// Check if video exists
if (!fs.existsSync(VIDEO_PATH)) {
  console.error(`Error: Hero video not found at ${VIDEO_PATH}`);
  process.exit(1);
}

// Ensure frames directory exists and is clean
if (fs.existsSync(FRAMES_DIR)) {
  console.log("Cleaning old frames...");
  const files = fs.readdirSync(FRAMES_DIR);
  for (const file of files) {
    fs.unlinkSync(path.join(FRAMES_DIR, file));
  }
} else {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

console.log("Extracting frames from video using ffmpeg...");
// Extract frames at 60fps, scale to 1080p height (preserving aspect ratio)
// WebP quality 90 for high-fidelity frames
try {
  // Use minterpolate to interpolate to 60fps for ultra-smooth scrolling,
  // scale preserving aspect ratio with height 1080, and high WebP quality (90)
  const cmd = `"${ffmpegPath}" -i "${VIDEO_PATH}" -vf "minterpolate=fps=60:mi_mode=blend,scale='-2:1080'" -c:v libwebp -q:v 90 -f image2 "${path.join(FRAMES_DIR, 'frame_%03d.webp')}"`;
  console.log(`Running: ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
  console.log("Frames successfully extracted to public/frames!");

  // Generate metadata.json so the client knows how many frames there are and what the FPS is
  const files = fs.readdirSync(FRAMES_DIR).filter(f => f.endsWith('.webp'));
  const metadata = {
    frameCount: files.length,
    fps: 30,
    pattern: '/frames/frame_%03d.webp',
  };
  fs.writeFileSync(path.join(FRAMES_DIR, 'metadata.json'), JSON.stringify(metadata, null, 2));
  console.log("Generated public/frames/metadata.json:", metadata);
} catch (err) {
  console.error("Failed to extract frames:", err);
  process.exit(1);
}
