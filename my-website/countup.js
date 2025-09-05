const els = document.querySelectorAll('.count');
let started = false;

function animate() {
  els.forEach(el => {
    const target = +el.dataset.target;
    const start = 0;
    const dur = 1200; // ms
    const t0 = performance.now();

    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.floor(start + (target - start) * p).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

const io = new IntersectionObserver((entries) => {
  if (!started && entries.some(e => e.isIntersecting)) {
    started = true;
    animate();
    io.disconnect();
  }
}, { threshold: 0.2 });

document.querySelectorAll('.stats').forEach(s => io.observe(s));
