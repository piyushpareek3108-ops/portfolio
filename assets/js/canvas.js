/**
 * Interactive Engineering Blueprint & CAD Wireframe Canvas
 * Adds subtle technical grid nodes, rotating compass circles, and mouse-reactive particles.
 */
(function() {
  const canvas = document.getElementById('blueprint-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    active: false
  };

  // Particles array
  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
  const particles = [];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.5 + 1;
      this.baseAlpha = Math.random() * 0.4 + 0.2;
      this.alpha = this.baseAlpha;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse influence
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
          this.alpha = Math.min(1, this.baseAlpha + 0.4);
        } else {
          this.alpha = this.baseAlpha;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Engineering Schematic Overlay Variables
  let rotationAngle = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', function(e) {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', function() {
    mouse.active = false;
  });

  // Render loop
  let animationFrameId;
  let isVisible = true;

  document.addEventListener('visibilitychange', function() {
    isVisible = !document.hidden;
    if (isVisible) {
      loop();
    } else {
      cancelAnimationFrame(animationFrameId);
    }
  });

  function drawTechnicalAccents() {
    // Smooth mouse interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    rotationAngle += 0.0015;

    // Draw technical compass / gear ring in top right
    const ringCenterX = width * 0.85;
    const ringCenterY = Math.min(height * 0.35, 320);

    ctx.save();
    ctx.translate(ringCenterX, ringCenterY);
    ctx.rotate(rotationAngle);

    // Outer subtle dashed compass ring
    ctx.beginPath();
    ctx.setLineDash([4, 12]);
    ctx.arc(0, 0, 140, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Inner ring
    ctx.beginPath();
    ctx.setLineDash([2, 6]);
    ctx.arc(0, 0, 95, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.09)';
    ctx.stroke();

    // Technical crosshair marks
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(-150, 0); ctx.lineTo(-130, 0);
    ctx.moveTo(130, 0); ctx.lineTo(150, 0);
    ctx.moveTo(0, -150); ctx.lineTo(0, -130);
    ctx.moveTo(0, 130); ctx.lineTo(0, 150);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.stroke();

    ctx.restore();
  }

  function loop() {
    if (!isVisible) return;
    ctx.clearRect(0, 0, width, height);

    drawTechnicalAccents();

    // Connect particles within proximity
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = (1 - dist / 110) * 0.18;
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(loop);
  }

  loop();
})();
