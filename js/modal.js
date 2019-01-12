export default function modal() {
  // Модальное окно при входе на стр
  let popupBtn = document.getElementById('popup-btn'),
    overlay = document.querySelector('.overlay'),
    main = document.querySelector('.main'),
    custom = document.querySelector('.custom');

  function action() {
    popupBtn.removeEventListener('click', action);
    overlay.classList.toggle('fadeOut');
    main.classList.toggle('fadeOut');
    let cards = main.querySelectorAll('.main-cards-item');
    cards[0].classList.toggle('fadeOutLeft');
    cards[cards.length-1].classList.toggle('fadeOutRight');
    setTimeout(() => {
      overlay.classList.toggle('fadeOut');
      main.classList.toggle('fadeOut');
      cards[0].classList.toggle('fadeOutLeft');
      cards[cards.length-1].classList.toggle('fadeOutRight');
      overlay.style.display = 'none';
      main.style.display = 'none';
      custom.style.display = 'flex';
      for (const item of custom.children) {
        item.style.display = 'block';
      }
      popupBtn.addEventListener('click', action);
    }, 2000);
  }
  popupBtn.addEventListener('click', action);

  // Кнопка сброса


}