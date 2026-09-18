import { useEffect, useRef, useState } from "react";
import {
  AmbientLight,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  DirectionalLight,
  GridHelper,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from "three";

const HeroTechScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: WebGLRenderer;
    let animationFrame = 0;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let isVisible = true;

    try {
      const scene = new Scene();

      const camera = new PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(0.4, 0.3, 7);
      camera.lookAt(0.3, 0, 0);

      renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });

      renderer.setClearColor(0x000000, 0);
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";

      container.appendChild(renderer.domElement);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, isMobile ? 1.1 : 1.5)
      );

      const ambient = new AmbientLight(0xffffff, 1.6);
      scene.add(ambient);

      const mainLight = new DirectionalLight(0xb388ff, 4);
      mainLight.position.set(3, 4, 5);
      scene.add(mainLight);

      const fillLight = new DirectionalLight(0x40c4ff, 3);
      fillLight.position.set(-4, 1, 3);
      scene.add(fillLight);

      const techGroup = new Group();
      scene.add(techGroup);

      const darkMaterial = new MeshStandardMaterial({
        color: 0x121225,
        metalness: 0.72,
        roughness: 0.32,
      });

      const edgeMaterial = new MeshStandardMaterial({
        color: 0x252548,
        metalness: 0.62,
        roughness: 0.28,
      });

      const cyanMaterial = new MeshBasicMaterial({
        color: 0x40c4ff,
        transparent: true,
        opacity: 0.9,
      });

      const purpleMaterial = new MeshBasicMaterial({
        color: 0xb388ff,
        transparent: true,
        opacity: 0.72,
      });

      const screenMaterial = new MeshBasicMaterial({
        color: 0x101834,
      });

      // ==========================
      // LAPTOP
      // ==========================

      const laptop = new Group();

      const laptopBase = new Mesh(
        new BoxGeometry(2.55, 0.13, 1.48),
        darkMaterial
      );
      laptopBase.position.set(-0.45, -0.5, 0.1);
      laptop.add(laptopBase);

      const keyboardArea = new Mesh(
        new PlaneGeometry(2.12, 1.08),
        edgeMaterial
      );
      keyboardArea.rotation.x = -Math.PI / 2;
      keyboardArea.position.set(-0.45, -0.425, 0.08);
      laptop.add(keyboardArea);

      const screenFrame = new Mesh(
        new BoxGeometry(2.5, 1.5, 0.09),
        darkMaterial
      );
      screenFrame.position.set(-0.45, 0.5, -0.62);
      screenFrame.rotation.x = -0.12;
      laptop.add(screenFrame);

      const screen = new Mesh(
        new PlaneGeometry(2.17, 1.16),
        screenMaterial
      );
      screen.position.set(-0.45, 0.5, -0.565);
      screen.rotation.x = -0.12;
      laptop.add(screen);

      const screenLine1 = new Mesh(
        new PlaneGeometry(1.25, 0.035),
        cyanMaterial
      );
      screenLine1.position.set(-0.58, 0.7, -0.505);
      screenLine1.rotation.x = -0.12;
      laptop.add(screenLine1);

      const screenLine2 = new Mesh(
        new PlaneGeometry(0.82, 0.03),
        purpleMaterial
      );
      screenLine2.position.set(-0.76, 0.48, -0.48);
      screenLine2.rotation.x = -0.12;
      laptop.add(screenLine2);

      const screenLine3 = new Mesh(
        new PlaneGeometry(1.5, 0.025),
        cyanMaterial
      );
      screenLine3.position.set(-0.45, 0.27, -0.455);
      screenLine3.rotation.x = -0.12;
      laptop.add(screenLine3);

      techGroup.add(laptop);

      // ==========================
      // PC TOWER
      // ==========================

      const tower = new Group();

      const towerBody = new Mesh(
        new BoxGeometry(0.9, 2.05, 0.85),
        darkMaterial
      );
      towerBody.position.set(1.75, -0.05, 0.05);
      tower.add(towerBody);

      const towerPanel = new Mesh(
        new PlaneGeometry(0.68, 1.72),
        screenMaterial
      );
      towerPanel.position.set(1.75, -0.05, 0.48);
      tower.add(towerPanel);

      const towerGlow1 = new Mesh(
        new TorusGeometry(0.2, 0.022, 10, 40),
        cyanMaterial
      );
      towerGlow1.position.set(1.75, 0.42, 0.5);
      tower.add(towerGlow1);

      const towerGlow2 = new Mesh(
        new TorusGeometry(0.2, 0.022, 10, 40),
        purpleMaterial
      );
      towerGlow2.position.set(1.75, -0.25, 0.5);
      tower.add(towerGlow2);

      techGroup.add(tower);

      // ==========================
      // DIAGNOSTIC RINGS
      // ==========================

      const ring1 = new Mesh(
        new TorusGeometry(2.55, 0.014, 8, 96),
        purpleMaterial
      );
      ring1.position.set(0.35, 0.05, -1.35);
      scene.add(ring1);

      const ring2 = new Mesh(
        new TorusGeometry(2.15, 0.012, 8, 96),
        cyanMaterial
      );
      ring2.position.set(0.35, 0.05, -1.3);
      scene.add(ring2);

      // ==========================
      // PARTICLES
      // ==========================

      const particleCount = isMobile ? 24 : 42;
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 3 - 0.5;
      }

      const particleGeometry = new BufferGeometry();
      particleGeometry.setAttribute(
        "position",
        new BufferAttribute(positions, 3)
      );

      const particleMaterial = new PointsMaterial({
        color: 0x40c4ff,
        size: 0.025,
        transparent: true,
        opacity: 0.42,
      });

      const particles = new Points(
        particleGeometry,
        particleMaterial
      );

      scene.add(particles);

      // ==========================
      // FLOOR GRID
      // ==========================

      const grid = new GridHelper(
        6,
        18,
        0x40c4ff,
        0x7b2fbe
      );

      grid.position.set(0.25, -1.12, 0);
      grid.material.transparent = true;
      grid.material.opacity = 0.1;

      scene.add(grid);

      techGroup.rotation.y = -0.18;

      if (isMobile) {
        techGroup.scale.setScalar(0.82);
        techGroup.position.y = 0.05;

        ring1.scale.setScalar(0.82);
        ring2.scale.setScalar(0.82);
      }

      let pointerX = 0;
      let pointerY = 0;

      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

      const handlePointerMove = (event: PointerEvent) => {
        if (!canHover || prefersReducedMotion) return;

        const rect = container.getBoundingClientRect();

        pointerX =
          ((event.clientX - rect.left) / rect.width - 0.5) * 0.22;

        pointerY =
          ((event.clientY - rect.top) / rect.height - 0.5) * 0.1;
      };

      const handlePointerLeave = () => {
        pointerX = 0;
        pointerY = 0;
      };

      container.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      container.addEventListener("pointerleave", handlePointerLeave);

      const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        if (!width || !height) return;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height, false);

        if (prefersReducedMotion) {
          renderer.render(scene, camera);
        }
      };

      resize();

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.01 }
      );

      intersectionObserver.observe(container);

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
      } else {
        const animate = (time: number) => {
          animationFrame = requestAnimationFrame(animate);

          if (!isVisible || document.hidden) return;

          const t = time * 0.001;

          techGroup.rotation.y +=
            (-0.18 + pointerX - techGroup.rotation.y) * 0.035;

          techGroup.rotation.x +=
            (-pointerY - techGroup.rotation.x) * 0.035;

          techGroup.position.y = Math.sin(t * 0.8) * 0.055;

          ring1.rotation.z = t * 0.08;
          ring2.rotation.z = -t * 0.11;

          particles.rotation.y = t * 0.018;

          renderer.render(scene, camera);
        };

        animationFrame = requestAnimationFrame(animate);
      }

      return () => {
        cancelAnimationFrame(animationFrame);

        resizeObserver?.disconnect();
        intersectionObserver?.disconnect();

        container.removeEventListener(
          "pointermove",
          handlePointerMove
        );

        container.removeEventListener(
          "pointerleave",
          handlePointerLeave
        );

        scene.traverse((object) => {
          const renderable = object as Mesh;

          if (renderable.geometry) {
            renderable.geometry.dispose();
          }

          if (renderable.material) {
            if (Array.isArray(renderable.material)) {
              renderable.material.forEach((material) =>
                material.dispose()
              );
            } else {
              renderable.material.dispose();
            }
          }
        });

        renderer.dispose();

        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch {
      setFailed(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-tech-scene"
      role="img"
      aria-label="Visualisasi teknologi PC, laptop dan proses diagnostic"
    >
      {failed && (
        <div className="hero-tech-fallback">
          <span>HARDWARE</span>
          <span>SOFTWARE</span>
          <span>REMOTE</span>
        </div>
      )}
    </div>
  );
};

export default HeroTechScene;