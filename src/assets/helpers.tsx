export function atButtomOfPage() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
