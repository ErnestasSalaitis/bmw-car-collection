// Tries several common extensions/cases for each photo so filenames like
// "x5-g05.JPEG" or "x5-g05.png" work without renaming anything.
const PHOTO_EXTS = ['jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG'];

function tryNextExt(img) {
  const next = (parseInt(img.dataset.extIndex || '-1', 10)) + 1;
  if (next < PHOTO_EXTS.length) {
    img.dataset.extIndex = next;
    img.src = img.dataset.base + '.' + PHOTO_EXTS[next];
  } else {
    img.style.display = 'none';
    if (img.nextElementSibling) img.nextElementSibling.style.display = 'flex';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-base]').forEach(img => tryNextExt(img));
});
