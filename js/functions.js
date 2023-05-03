// FUNCTIONS

// FUNCTION PRINT IN HTML
function printPost(posts, socialPost) {
  let html = "";
  posts.forEach((el) => {
    html += renderPost(el);
  });
  socialPost.innerHTML = html;
}

// FUNCTION TO CREATE THE POST
function renderPost(el) {
  return `
    <div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img class="profile-pic" src="${el.author.image}" alt="Phil Mangione">
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${el.author.name}</div>
            <div class="post-meta__time">${el.created}</div>
          </div>
        </div>
      </div>
      <div class="post__text">
        Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima
        iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil
        ullam aut alias.
      </div>
      <div class="post__image">
      <img class="profile-pic" src="${el.media}" alt="Phil Mangione">
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <a class="like-button js-like-button" href="#" data-postid="1">
              <i
                class="like-button__icon fas fa-thumbs-up"
                aria-hidden="true"
              ></i>
              <span class="like-button__label">Mi Piace</span>
            </a>
          </div>
          <div class="likes__counter">
            Piace a
            <b id="like-counter-1" class="js-likes-counter">
              80
            </b>{" "}
            persone
          </div>
        </div>
      </div>
    </div>`;
}
