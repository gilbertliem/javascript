// local reviews data
const text = [
  {
    slide: 'Slide 1',
    text1:
    'Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis.',
    text2:
    'Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque.',
    page: '1/3'
  },
  {
    slide: 'Slide 2',
    text1:
    'Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis.',
    text2:
    'Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque.',
    page: '2/3'
  },
  {
    slide: 'Slide 3',
    text1:
    'Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis.',
    text2:
    'Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque.',
    page: '3/3'
  },
];

// SELECT ITEMS
const title = document.querySelector('.title');
const paragraph1 = document.querySelector('.para1');
const paragraph2 = document.querySelector('.para2');
const pageNum = document.querySelector('.page');

const rightBtn = document.querySelector('#btn-right')
const leftBtn = document.querySelector('#btn-left')

// SET STARTING ITEM
let currentSlide = 0;

// LOAD INITIAL ITEM
window.addEventListener('DOMContentLoaded', function() {
  showSlide(currentSlide);
})

function showSlide(side) {
  const item = text[side];
  title.textContent = item.slide;
  paragraph1.textContent = item.text1;
  paragraph2.textContent = item.text2;
  pageNum.textContent = item.page;
}

// NEXT PAGE
rightBtn.addEventListener('click', function() {
  currentSlide++;
  if(currentSlide > text.length -1) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});


// PREV PAGE
leftBtn.addEventListener('click', function() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = text.length - 1;
  }
  showSlide(currentSlide);
});