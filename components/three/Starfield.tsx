"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: import("three").WebGLRenderer | null = null;
    let animationId = 0;
    let disposed = false;

    const init = async () => {
      try {
        const THREE = await import("three");

        if (disposed) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          });
        } catch {
          console.warn("WebGL not available, falling back to canvas");
          return;
        }

        if (disposed) {
          renderer.dispose();
          return;
        }

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particles
        const count = 1500;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
          pos[i] = (Math.random() - 0.5) * 25;
        }
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        const mat = new THREE.PointsMaterial({
          size: 0.02,
          color: 0xffb000,
          transparent: true,
          opacity: 0.35,
        });
        const particles = new THREE.Points(geo, mat);
        scene.add(particles);

        // Wireframe sphere
        const sphereGeo = new THREE.IcosahedronGeometry(10, 2);
        const sphereMat = new THREE.MeshBasicMaterial({
          color: 0x00e1a8,
          wireframe: true,
          transparent: true,
          opacity: 0.03,
        });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        scene.add(sphere);

        camera.position.z = 5;

        // Mouse parallax
        let mouseX = 0;
        let mouseY = 0;
        const onMouse = (e: MouseEvent) => {
          mouseX = e.clientX / window.innerWidth - 0.5;
          mouseY = e.clientY / window.innerHeight - 0.5;
        };
        document.addEventListener("mousemove", onMouse);

        const onResize = () => {
          if (!renderer || disposed) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        const animate = () => {
          if (disposed) return;
          animationId = requestAnimationFrame(animate);
          particles.rotation.y += 0.001;
          particles.rotation.x += 0.0005;
          sphere.rotation.x -= 0.001;
          sphere.rotation.y -= 0.001;
          particles.rotation.y += 0.05 * (mouseX - particles.rotation.y);
          particles.rotation.x += 0.05 * (mouseY - particles.rotation.x);
          if (renderer && !disposed) renderer.render(scene, camera);
        };
        animate();

        // Store cleanup
        const cleanup = () => {
          disposed = true;
          cancelAnimationFrame(animationId);
          document.removeEventListener("mousemove", onMouse);
          window.removeEventListener("resize", onResize);
          if (renderer) {
            renderer.dispose();
            if (renderer.domElement.parentNode === container) {
              container.removeChild(renderer.domElement);
            }
            renderer = null;
          }
          geo.dispose();
          mat.dispose();
          sphereGeo.dispose();
          sphereMat.dispose();
        };

        // Attach cleanup to container
        (container as unknown as Record<string, unknown>).__cleanup = cleanup;
      } catch {
        // WebGL completely unavailable, fail silently
      }
    };

    init();

    return () => {
      const cleanup = (container as unknown as Record<string, unknown>)
        ?.__cleanup as (() => void) | undefined;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
