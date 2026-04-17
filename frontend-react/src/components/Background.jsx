import { useEffect } from "react";

function Background() {
  useEffect(() => {
    const canvas = document.getElementById("stars-canvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5,
      d: Math.random() * 1,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "white";

      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      move();
    }

    function move() {
      stars.forEach((s) => {
        s.y += s.d;
        if (s.y > h) {
          s.y = 0;
          s.x = Math.random() * w;
        }
      });
    }

    let animationId;

    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    const resizeCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas id="stars-canvas" />;
}

export default Background;