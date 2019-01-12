export default function custom() {
  let ready = document.getElementById('ready'),
    newCard = document.querySelector('.main-cards-item').cloneNode(true),
    cards = document.querySelector('.main-cards'),
    name = document.getElementById('name'),
    age = document.getElementById('age'),
    radios = document.getElementsByName('sex'),
    select = document.getElementById('select'),
    bio = document.getElementById('bio'),
    skin = document.querySelector('.skin'),
    clothes = document.querySelector('.clothes'),
    hair = document.querySelector('.hair'),
    personSkin = document.querySelector('#person-skin'),
    personClothes = document.querySelector('#person-clothes'),
    personHair = document.querySelector('#person-hair'),
    custom = document.querySelector('.custom');

  newCard.classList.remove('main-cards-item-active');
  newCard.classList.remove('fadeInLeft');
  newCard.classList.add('fadeIn');
  // Слайдеры
  class Slider {
    constructor(slider) {
      this.prev = slider.querySelector('.prev'),
        this.next = slider.querySelector('.next'),
        this.slides = slider.getElementsByTagName('li'),
        this.sliders = slider.querySelectorAll('ul'),
        this.slider = this.sliders[0],
        this.slider.style.transition = 'all 1s',
        this.sliderIndex = 1,
        this.pos = 0,
        this.len = 4,
        this.sex = 'Мужской';
    }

    checkSex() {
      if (this.sex == 'Мужской') {
        this.sex = 'Женский';
        this.sliderIndex = 1;
        this.slider.style.transform = "translateX(0px)";
        this.slider.classList.add('hidden');
        this.slider = this.sliders[1];
        this.slider.classList.remove('hidden');
        this.pos = 0;
        this.slider.style.transform = "translateX(0px)";
        personSkin.style.backgroundImage = `url(img/skin/skin-${this.sliderIndex+3}.png)`;
        personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${this.sliderIndex+3}.png)`;
        personHair.style.backgroundImage = `url(img/hair/construct/hair-${this.sliderIndex+3}.png)`;

      } else if (this.sex == 'Женский') {
        this.sex = 'Мужской';
        this.sliderIndex = 1;
        this.slider.style.transform = "translateX(0px)";
        this.slider.classList.add('hidden');
        this.slider = this.sliders[0];
        this.slider.classList.remove('hidden');
        this.slider.style.transform = "translateX(0px)";
        this.pos = 0;
        personSkin.style.backgroundImage = `url(img/skin/skin-${this.sliderIndex}.png)`;
        personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${this.sliderIndex}.png)`;
        personHair.style.backgroundImage = `url(img/hair/construct/hair-${this.sliderIndex}.png)`;
      }
    }
    nextSlide() {
      if (this.sliderIndex >= this.len - 1) {
        this.sliderIndex = 1;
      } else {
        this.sliderIndex++;
      }
      if (this.pos == (-this.len + 2) * 164) this.pos = 164;
      this.pos -= 164;
      this.slider.style.transform = `translateX(${this.pos}px)`;
    }
    prevSlide() {
      if (this.sliderIndex <= 1) {
        this.sliderIndex = this.len - 1;
      } else {
        this.sliderIndex--;
      }
      if (this.pos == 0) this.pos = (-this.len + 1) * 164;
      this.pos += 164;
      this.slider.style.transform = `translateX(${this.pos}px)`;
    }
  }

  radios.forEach(element => {
    element.addEventListener('change', () => {
      if (skinSlider.sex == 'Мужской') {
        skinSlider.sex = 'Женский';
        skinSlider.sliderIndex = 1;
        skinSlider.slider.style.transform = "translateX(0px)";
        skinSlider.pos = 0;
        personSkin.style.backgroundImage = `url(img/skin/skin-${skinSlider.sliderIndex+3}.png)`;
      } else if (skinSlider.sex == 'Женский') {
        skinSlider.sex = 'Мужской';
        skinSlider.sliderIndex = 1;
        skinSlider.slider.style.transform = "translateX(0px)";
        skinSlider.pos = 0;
        personSkin.style.backgroundImage = `url(img/skin/skin-${skinSlider.sliderIndex}.png)`;
      }
      hairSlider.checkSex();
      clothesSlider.checkSex();
    });
  });
  // Цвет кожи
  let skinSlider = new Slider(skin);

  skinSlider.next.addEventListener('click', () => {
    skinSlider.nextSlide();
    if (skinSlider.sex == "Мужской") {
      personSkin.style.backgroundImage = `url(img/skin/skin-${skinSlider.sliderIndex}.png)`;
    } else if (skinSlider.sex == "Женский") {
      personSkin.style.backgroundImage = `url(img/skin/skin-${skinSlider.sliderIndex+3}.png)`;
    }
  });
  skinSlider.prev.addEventListener('click', () => {
    skinSlider.prevSlide();
    if (skinSlider.sex == "Мужской") {
      personSkin.style.backgroundImage = `url(img/skin/skin-${skinSlider.sliderIndex}.png)`;
    } else if (skinSlider.sex == "Женский") {
      personSkin.style.backgroundImage = `url(img/skin/skin-${skinSlider.sliderIndex+3}.png)`;
    }
  });

  // Волосы
  let hairSlider = new Slider(hair);


  hairSlider.next.addEventListener('click', () => {
    hairSlider.nextSlide();
    if (hairSlider.sex == "Мужской") {
      personHair.style.backgroundImage = `url(img/hair/construct/hair-${hairSlider.sliderIndex}.png)`;
    } else if (hairSlider.sex == "Женский") {
      personHair.style.backgroundImage = `url(img/hair/construct/hair-${hairSlider.sliderIndex+3}.png)`;
    }
  });
  hairSlider.prev.addEventListener('click', () => {
    hairSlider.prevSlide();
    if (hairSlider.sex == "Мужской") {
      personHair.style.backgroundImage = `url(img/hair/construct/hair-${hairSlider.sliderIndex}.png)`;
    } else if (hairSlider.sex == "Женский") {
      personHair.style.backgroundImage = `url(img/hair/construct/hair-${hairSlider.sliderIndex+3}.png)`;
    }
  });

  // Одежда
  let clothesSlider = new Slider(clothes);

  clothesSlider.next.addEventListener('click', () => {
    clothesSlider.nextSlide();
    if (clothesSlider.sex == "Мужской") {
      personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${clothesSlider.sliderIndex}.png)`;
    } else if (clothesSlider.sex == "Женский") {
      personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${clothesSlider.sliderIndex+3}.png)`;
    }
  });
  clothesSlider.prev.addEventListener('click', () => {
    clothesSlider.prevSlide();
    if (clothesSlider.sex == "Мужской") {
      personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${clothesSlider.sliderIndex}.png)`;
    } else if (clothesSlider.sex == "Женский") {
      personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${clothesSlider.sliderIndex+3}.png)`;
    }
  });



  function onReady() {
    ready.removeEventListener('click', onReady);
    document.querySelector('.custom').classList.toggle('fadeOut');
    custom.children[0].classList.toggle('fadeOutLeft');
    custom.children[2].classList.toggle('fadeOutRight');
    custom.children[1].classList.toggle('fadeOut');
    setTimeout(() => {
      document.querySelector('.custom').classList.toggle('fadeOut');
      document.querySelector('.custom').style.display = 'none';
      document.querySelector('.main').style.display = 'block';
      ready.addEventListener('click', onReady);
      custom.children[0].classList.toggle('fadeOutLeft');
      custom.children[2].classList.toggle('fadeOutRight');
      custom.children[1].classList.toggle('fadeOut');
    }, 2000);
    cards.children[0].classList.remove('main-cards-item-active');
    cards.insertBefore(newCard, cards.children[1]);

    // Добавление текста к карточке
    newCard.querySelector('.name').innerHTML = name.value;
    newCard.querySelector('.age').innerHTML = age.value;
    radios.forEach(element => {
      if (element.checked) newCard.querySelector('.sex').textContent = element.value;
    });
    newCard.querySelector('.bio').innerHTML = bio.value;
    newCard.querySelector('.views').innerHTML = select.options[select.selectedIndex].value;
    newCard.querySelector('.photo').classList.remove('photo-1');
    newCard.querySelector('.photo').appendChild(document.querySelector('.person').cloneNode(true));
  }
  // OnReady
  ready.addEventListener('click', onReady);


}