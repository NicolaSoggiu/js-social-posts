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
  const italianDate = formatItalianDate(el.created);
  return `
    <div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img class="profile-pic" src="${el.author.image}" alt="Phil Mangione">
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${el.author.name}</div>
            <div class="post-meta__time">${italianDate}</div>
          </div>
        </div>
      </div>
      <div class="post__text">
        ${el.content}
      </div>
      <div class="post__image">
      <img class="post__imgae" src="${el.media}">
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <a class="like-button js-like-button" data-postid="1">
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
            </b>
            persone
          </div>
        </div>
      </div>
    </div>`;
}

// FUNCTION TO CONVERT THE DATA
function formatItalianDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
