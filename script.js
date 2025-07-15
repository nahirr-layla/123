const materias = document.querySelectorAll('.materia');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalCuatrimestre = document.getElementById('modal-cuatrimestre');
const closeBtn = document.getElementById('close-btn');

materias.forEach(materia => {
  materia.addEventListener('click', () => {
    modalTitle.textContent = materia.dataset.nombre;
    modalDesc.textContent = materia.dataset.desc;
    modalCuatrimestre.textContent = materia.dataset.cuatrimestre;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
