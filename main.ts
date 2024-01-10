import { header } from "./components/header";
import { footer } from "./components/footer";
import { navPart } from "./components/navPart";
//import { loadMore } from "./components/loadMore";
//import { marked } from "marked"
//loadMore()
//navPart()

//document.body.insertAdjacentHTML('beforeend',await marked.parse('# Marked in the browser\n\nRendered by marked.'));
document.getElementById('header')?.insertAdjacentHTML('beforebegin', header());
navPart()
document.getElementById('footer')?.insertAdjacentHTML('beforebegin', footer());

fetch('/contentHtmls/indexContent.html')
  .then((res) => res.text())
  .then((text) => document.getElementById('content')?.insertAdjacentHTML('beforebegin', text))
