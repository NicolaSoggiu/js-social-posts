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
  let authorImage = "";
  return `
    <div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
          ${
            el.author.image
              ? '<img class="profile-pic" src="' +
                el.author.image +
                '" alt="' +
                el.author.name +
                '">'
              : getNameInitials(el.author.name)
          }
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${el.author.name}</div>
            <div class="post-meta__time">${formatIsoToItalianDate(
              el.created
            )}</div>
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
            <a class="like-button js-like-button" data-postid="${el.id}">
              <i
                class="like-button__icon fas fa-thumbs-up"
                aria-hidden="true"
              ></i>
              <span class="like-button__label">Mi Piace</span>
            </a>
          </div>
          <div class="likes__counter">
            Piace a
            <b id="like-counter-${el.id}" class="js-likes-counter">
            ${el.likes}
            </b>
            persone
          </div>
        </div>
      </div>
    </div>`;
}

// FUNCTION TO ADD THE INITIALS INSTEAD OF THE PHOTO
function getNameInitials(name) {
  return name
    .split(" ")
    .reduce((initials, namePart) => initials + namePart[0].toUpperCase(), "");
}

// FUNCTION TO CONVERT THE DATA
function formatIsoToItalianDate(isoString) {
  return isoString.split("-").reverse().join("/");
}
