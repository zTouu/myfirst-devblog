import { header } from "./components/header";
import { footer } from "./components/footer";
import { navPart } from "./components/navPart";
import { loadMore } from "./components/loadMore";
//import { marked } from "marked"

//document.body.insertAdjacentHTML('beforeend',await marked.parse('# Marked in the browser\n\nRendered by marked.'));

document.getElementById('header')?.insertAdjacentHTML('beforebegin', header());
navPart()
document.getElementById('footer')?.insertAdjacentHTML('beforebegin', footer());

//content
function loadAndRenderPage(pathname: string = location.pathname) {
  if (pathname == "/") {
    pathname = "/index.html"
  }
  const url = pathname.replace(/\/([\d\D]+?).html/, "/contentHtmls/$1Content.html")
  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      //console.log(text)
      document.getElementById('content')?.insertAdjacentHTML('beforebegin', text)
      loadMore()
    })
}

window.addEventListener('locationchange', function () {
  loadAndRenderPage()
});
loadAndRenderPage()