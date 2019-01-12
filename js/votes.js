export default function votes() {
  let main = document.querySelector('.main'),
    custom = document.querySelector('.custom'),
    reset = document.querySelector('#reset'),
    voting = document.querySelector('#voting'),
    crime = document.querySelector('#crime');

  function action() {
    main.classList.toggle('fadeOut');
    let cards = main.querySelectorAll('.main-cards-item');
    cards[0].classList.toggle('fadeOutLeft');
    cards[cards.length-1].classList.toggle('fadeOutRight');
    cards[cards.length-2].classList.toggle('fadeOut');
    reset.removeEventListener('click', action);
    setTimeout(() => {
      document.querySelector('.person').remove();
      document.querySelector('.main-cards').removeChild(document.querySelectorAll('.main-cards-item')[1]);
      let inputs = document.getElementsByTagName('input');
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
      document.querySelector('textarea').value = '';
      setTimeout(() => {
        reset.addEventListener('click', action);
        cards[0].classList.toggle('fadeOutLeft');
        cards[cards.length-1].classList.toggle('fadeOutRight');
        cards[cards.length-2].classList.toggle('fadeOut');
        main.classList.toggle('fadeOut');
        main.style.display = 'none';
        custom.style.display = 'flex';
        for (const item of custom.children) {
          item.style.display = 'block';
        }
      }, 400);
    }, 1600);

  }
  reset.addEventListener('click', action);

  function animate(options) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;

      // текущее состояние анимации
      let progress = options.timing(timeFraction);
      options.draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  function makeEaseOut(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    };
  }

  function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
  }

  voting.addEventListener('click', () => {
    let cards = document.querySelectorAll('.main-cards-item');
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains('main-cards-item-active')) cards[i].classList.remove('main-cards-item-active');
    }
    let max = 100;
    let results = document.querySelectorAll('.result');
    let maxVotes = 0;
    let count = 0;
    for (let i = 0; i < results.length; i++) {
      let value = Math.floor(Math.random() * max);
      if (i == results.length - 1) {
        value = max;
      }
      animate({
        duration: 1000,
        timing: makeEaseOut(quad),
        draw: function (progress) {
          results[i].querySelector('.result-count').innerHTML = Math.floor(progress * value) + '%';
          results[i].querySelector('.progress-bar').style.height = Math.floor(progress * value) + '%';
        }
      });
      max -= value;
      if (maxVotes < value) {
        maxVotes = value;
        count = i;
      }
    }
    cards[count].classList.add('main-cards-item-active');
  });

  crime.addEventListener('click', () => {
    let cards = document.querySelectorAll('.main-cards-item');
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains('main-cards-item-active')) cards[i].classList.remove('main-cards-item-active');
    }
    let max = 100;
    let results = document.querySelectorAll('.result');
    let maxVotes = 0;
    let count = 0;
    for (let i = 0; i < results.length; i++) {
      let value = Math.floor(Math.random() * (max - 50));
      if (i == results.length - 1) {
        value = max;
      }
      if (i == results.length - 2) {
        value += 50;
      }
      animate({
        duration: 1000,
        timing: makeEaseOut(quad),
        draw: function (progress) {
          results[i].querySelector('.result-count').innerHTML = Math.floor(progress * value) + '%';
          results[i].querySelector('.progress-bar').style.height = Math.floor(progress * value) + '%';
        }
      });
      max -= value;
      if (maxVotes < value) {
        maxVotes = value;
        count = i;
      }
    }
    cards[count].classList.add('main-cards-item-active');
  });
}