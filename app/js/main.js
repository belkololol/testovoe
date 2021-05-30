$(function () {
    // Gallery Filtering
    let containerEl = document.querySelector('.gallery__inner');
    let mixer;

    if (containerEl) {
        mixer = mixitup(containerEl, {
            load: {
                filter: '.living'
            }
        });
    }
})

let badroomArray = [
    { likes: 3, image: "images/gallery/6.jpg" },
    { likes: 62, image: "images/gallery/7.jpg" },
    { likes: 2, image: "images/gallery/8.jpg" },
    { likes: 34, image: "images/gallery/9.jpg" },
    { likes: 46, image: "images/gallery/10.jpg" },
    { likes: 23, image: "images/gallery/11.jpg" },
    { likes: 0, image: "images/gallery/12.jpg" },
    { likes: 44, image: "images/gallery/13.jpg" },
    { likes: 5, image: "images/gallery/14.jpg" },
    { likes: 9, image: "images/gallery/15.jpg" },
];

let livingArray = [
    { likes: 4, image: "images/gallery/1.jpg" },
    { likes: 2, image: "images/gallery/2.jpg" },
    { likes: 25, image: "images/gallery/3.jpg" },
    { likes: 38, image: "images/gallery/4.jpg" },
    { likes: 4, image: "images/gallery/5.jpg" },
    { likes: 3, image: "images/gallery/6.jpg" },
    { likes: 0, image: "images/gallery/7.jpg" },
    { likes: 14, image: "images/gallery/8.jpg" },
    { likes: 52, image: "images/gallery/9.jpg" },
    { likes: 9, image: "images/gallery/10.jpg" },
];

let chairArray = [
    { likes: 4, image: "images/gallery/18.jpg" },
    { likes: 2, image: "images/gallery/17.jpg" },
    { likes: 25, image: "images/gallery/16.jpg" },
    { likes: 38, image: "images/gallery/15.jpg" },
    { likes: 4, image: "images/gallery/14.jpg" },
    { likes: 3, image: "images/gallery/13.jpg" },
    { likes: 0, image: "images/gallery/12.jpg" },
    { likes: 14, image: "images/gallery/11.jpg" },
    { likes: 52, image: "images/gallery/10.jpg" },
    { likes: 9, image: "images/gallery/9.jpg" },
];

let markupbadroom = "";
let badroomContainer = document.querySelector('.bedroom');
let markupliving = "";
let livingContainer = document.querySelector('.living');
let markupchair = "";
let chairContainer = document.querySelector('.chair');

function createMarkup(index, like, image) {
    return `<div class="gallery__modal" style="display: none;" id="hidden-content${index}">
    <img class="gallery__image" src="${image}" alt="images">
    <div class="gallery__heart-count">
      <img class="gallery__heart" src="images/heart.svg">
      <span class="gallery__count">${like}</span>
    </div>
    <div class="gallery__comment">
      <div class="gallery__commentAdd"></div>
      <textarea class="gallery__comment-area" placeholder="Ваш комментарий"></textarea>
      <button class="gallery__comment-btn">Отправить</button>
    </div>
  </div>
  <a class="gallery__item" data-fancybox="gallery" href="javascript:;" data-src="#hidden-content${index}">
    <img src="${image}" alt="images">
  </a>`;
}

for (let i = 0; i < badroomArray.length; i++) {
    markupbadroom = markupbadroom + createMarkup(i, badroomArray[i].likes, badroomArray[i].image)
}
badroomContainer.innerHTML = markupbadroom;


for (let i = 0; i < livingArray.length; i++) {
    markupliving = markupliving + createMarkup(i, livingArray[i].likes, livingArray[i].image)
}
livingContainer.innerHTML = markupliving;


for (let i = 0; i < chairArray.length; i++) {
    markupchair = markupchair + createMarkup(i, chairArray[i].likes, chairArray[i].image)
}
chairContainer.innerHTML = markupchair;

let heart = document.querySelectorAll('.gallery__heart');
let count = document.querySelectorAll('.gallery__count');
let addCommentButton = document.querySelectorAll('.gallery__comment-btn');
let commentContainer = document.querySelectorAll('.gallery__commentAdd');
let commentText = document.querySelectorAll('.gallery__comment-area');

heart.forEach((el, index) => {
    el.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active')
            e.target.setAttribute("src", "images/heart.svg");
            count[index].textContent = Number(count[index].textContent) - 1;
        } else {
            e.target.classList.add('active')
            e.target.setAttribute("src", "images/heartActive.svg");
            count[index].textContent = Number(count[index].textContent) + 1;
        }
    })
})
addCommentButton.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (commentText[index].value.length > 0) {
            let comment = document.createElement("p");
            comment.innerHTML = commentText[index].value;
            commentContainer[index].appendChild(comment);
            commentText[index].value = "";
        }
    })
})