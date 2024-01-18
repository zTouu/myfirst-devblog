import { loadMore } from "./loadMore"

export function loadAndRenderPage(pathname: string = location.pathname) {
  if (pathname == "/") {
    pathname = "/index.html"
  }
  const url = pathname.replace(/\/([\d\D]+?).html/, "/contentHtmls/$1Content.html")
  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      document.getElementById('content')?.insertAdjacentHTML('beforebegin', text)
      loadMore()
  })
}