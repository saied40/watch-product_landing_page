const reviews = [
  {
    'name': 'Christopher Heath',
    'position': 'Science technician',
    'img': './imgs/testimonial-1.jpg',
    'text': 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sit amet'
  },
  {
    'name': 'Mollie White',
    'position': 'Youtuber',
    'img': './imgs/testimonial-2.jpg',
    'text': 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sit amet'
  },
  {
    'name': 'Tom McKenzie',
    'position': 'Videographer',
    'img': './imgs/testimonial-3.jpg',
    'text': 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sit amet'
  },
  {
    'name': 'Ruby Forster',
    'position': 'Photographer',
    'img': './imgs/testimonial-4.jpg',
    'text': 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sit amet'
  },
  {
    'name': 'Leo Conway',
    'position': 'Relationship manager',
    'img': './imgs/testimonial-5.jpg',
    'text': 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa sit amet'
  }
];

let cont = document.getElementById('cardCont');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
let cardNum = 0, translateX = 0, shownCards = 4;

let card = (info, cardId) => {
  let container = document.createElement('div');
  container.classList.add('card', 'h-100', 'align-items-center', 'text-center', 'border-0', 'bg-transparent'), container.setAttribute('data-card-id', cardId);
  let img = document.createElement('img');
  img.src = info.img, img.alt = info.img, img.classList.add('mb-3');
  let heading = document.createElement('div');
  let h4 = document.createElement('h4');
  h4.classList.add('fw-bold', 'mb-1'), h4.textContent = info.name;
  let h5 = document.createElement('h5');
  h5.classList.add('fst-italic', 'mb-3'), h5.textContent = info.position;
  heading.appendChild(h4), heading.appendChild(h5);
  let p = document.createElement('p');
  p.textContent = info.text;
  container.appendChild(img), container.appendChild(heading), container.appendChild(p);
  cardNum+=1;
  return container;
}

onload = _ => {
  cont.innerHTML = '';
  for (let i = 0; i < reviews.length; i++) {
    if (i == shownCards) {
      break;
    }
    cont.appendChild(card(reviews[i], cardNum));
  }
  cont.style.width = `calc((270px * ${cont.children.length}) + ${cont.children.length - 1}rem)`;
  cont.style.transform = `translateX(${translateX})`;
  scrollTop();
}

setInterval(_ => generateCard(), 8000);

setInterval(_ => {
  translateX == 0 ? leftBtn.setAttribute('disabled', '') : leftBtn.removeAttribute('disabled');
  for (const item of document.querySelectorAll('.collapse')) {
    let ele = item.previousElementSibling.lastChild.previousElementSibling;
    if (item.classList.contains('show')) {
      ele.classList.remove('fa-plus')
      ele.classList.add('fa-minus')
    } else {
      ele.classList.remove('fa-minus')
      ele.classList.add('fa-plus')
    }
  }
});

window.addEventListener('scroll', _ => scrollTop());

function leftBtnClick() {
  translateX += 286;
  cont.style.transform = `translateX(${translateX}px)`;
};

function generateCard() {
  if (cont.lastChild.getAttribute('data-card-id') == reviews.length-1) {
    cardNum = 0;
  }
  cont.appendChild(card(reviews[cardNum], cardNum));
  cont.style.width = `calc((270px * ${cont.children.length}) + ${cont.children.length - 1}rem)`;
  translateX -= 286;
  cont.style.transform = `translateX(${translateX}px)`;
}

function scrollTop() {
  let btnEle = _ => {
    let ele = document.createElement('a');
    ele.classList.add('scroll-to-top', 'btn', 'btn-outline-primary', 'position-fixed'), ele.href = '#';
    let iEle = document.createElement('i');
    iEle.classList.add('fa-solid', 'fa-angle-up');
    ele.addEventListener('click', _ => scrollTop());
    ele.appendChild(iEle);
    console.log('btn Created successfully');
    return ele;
  };

  let btn1 = document.querySelector('.scroll-to-top');

  if (btn1 && scrollY <= 180) {
    btn1.remove();
  } else if (!btn1 && scrollY > 180) {
    document.body.appendChild(btnEle());
  } else {
    console.error('scrolling else statement is NOT defined');
    return null;
  }
}
