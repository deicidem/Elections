export default function modal() {
  let popupBtn = document.getElementById('popup-btn'),
    overlay = document.querySelector('.overlay'),
    main = document.querySelector('.main'),
    custom = document.querySelector('.custom');

  popupBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    main.style.display = 'none';
    custom.style.display = 'flex';
    for (const item of custom.children) {
      item.style.display = 'block';
    }

  });
}