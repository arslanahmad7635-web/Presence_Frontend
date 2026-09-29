import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GridDistortion({
  imageSrc,
  grid = 12,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  className = ""
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    let loadProgress = 0.0;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uMouse: { value: new THREE.Vector2(-1, -1) },
        uStrength: { value: strength },
        uGrid: { value: grid },
        uProgress: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform float uStrength;
        uniform float uGrid;
        uniform float uProgress;
        varying vec2 vUv;

        void main() {
          vec2 p = vUv;

          // Grid assembly layout — kept at full grid size for crisp tiles
          float activeGrid = mix(uGrid * 0.75, uGrid, smoothstep(0.0, 1.0, uProgress));
          vec2 cell = floor(p * activeGrid) / activeGrid;
          vec2 cellUv = fract(p * activeGrid);
          vec2 cellCenter = cell + (0.5 / activeGrid);

          // Initial load-in transition position
          vec2 samplePos = mix(cellCenter, p, smoothstep(0.0, 1.0, uProgress));

          // ---- PRECISE SMALL HOVER BOX ----
          // Only the single cell directly under the cursor reacts.
          // We check whether the cursor is inside THIS cell's local bounds,
          // not a radius. This guarantees exactly one small box pops.
          vec2 localUv = cellUv;
          float popFactor = 0.0;

          if (uProgress >= 1.0) {
            // Is the mouse inside this cell?
            vec2 mouseCell = floor(uMouse * activeGrid);
            vec2 thisCell  = floor(p * activeGrid);
            bool isHoveredCell = (mouseCell.x == thisCell.x && mouseCell.y == thisCell.y);

            if (isHoveredCell) {
              // Distance from cell center to cursor, normalized to cell space
              vec2 mouseInCell = (uMouse * activeGrid) - thisCell; // 0..1 within cell
              vec2 offset = cellUv - mouseInCell;
              float d = length(offset);

              // Tight radius: only ~40% of the cell radius reacts
              float innerRadius = 0.42;
              popFactor = smoothstep(innerRadius, 0.0, d);

              // Zoom into the tile — subtler than before, keeps box small
              localUv = (cellUv - 0.5) * mix(1.0, 0.88, popFactor) + 0.5;
              samplePos = cell + localUv / activeGrid;
            }
          }

          vec4 color = texture2D(uTexture, samplePos);

          // Subtle cyan glow + border on the popped tile only
          if (popFactor > 0.0) {
            color.rgb += vec3(0.0, 0.30, 0.50) * popFactor;

            float borderThick = 0.05;
            if (localUv.x < borderThick || localUv.x > (1.0 - borderThick) ||
                localUv.y < borderThick || localUv.y > (1.0 - borderThick)) {
              color.rgb += vec3(0.15, 0.55, 0.75) * popFactor;
            }
          }

          // Load-in grid outlines
          float border = (1.0 - uProgress) * 0.08;
          if (cellUv.x < border || cellUv.x > (1.0 - border) ||
              cellUv.y < border || cellUv.y > (1.0 - border)) {
            color.rgb *= 0.3;
          }

          color.a *= smoothstep(0.0, 0.2, uProgress);
          gl_FragColor = color;
        }
      `
    });

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageSrc, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      material.uniforms.uTexture.value = texture;
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Cursor tracking — only fires when cursor is INSIDE the canvas.
    // When it leaves, we push uMouse outside [0,1] so nothing pops.
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      // If cursor is outside the container bounds, disable the hover effect
      if (x < 0 || x > 1 || y < 0 || y > 1) {
        material.uniforms.uMouse.value.set(-1, -1);
      } else {
        material.uniforms.uMouse.value.set(x, y);
      }
    };

    const handleMouseLeave = () => {
      material.uniforms.uMouse.value.set(-1, -1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let isPageVisible = !document.hidden;
    const animate = () => {
      if (!isPageVisible) return;

      animationFrameId = requestAnimationFrame(animate);

      if (loadProgress < 1.0) {
        loadProgress += 0.008;
        if (loadProgress > 1.0) loadProgress = 1.0;
        material.uniforms.uProgress.value = loadProgress;
      }

      renderer.render(scene, camera);
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) animate();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [imageSrc, grid, strength]);

  return <div ref={containerRef} className={className} />;
}