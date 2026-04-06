function toggleCard(idx) {
  const panels = document.querySelectorAll('.detail-panel');
  const cards = document.querySelectorAll('.card');
  const panel = document.getElementById('panel-' + idx);
  if (!panel) return;
  const isVisible = panel.classList.contains('visible');
  panels.forEach(p => p.classList.remove('visible'));
  cards.forEach(c => c.classList.remove('active'));
  if (!isVisible) {
    panel.classList.add('visible');
    if (cards[idx]) cards[idx].classList.add('active');
  }
}

// Mark current page nav link as active
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });
});
