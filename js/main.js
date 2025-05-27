document.querySelectorAll('.shape').forEach(shape => {
  shape.addEventListener('click', () => {
    const targetId = shape.getAttribute('data-target');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
