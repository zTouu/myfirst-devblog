import { header } from "./components/header";
import { footer } from "./components/footer";
import { navPart } from "./components/navPart";
import { loadAndRenderPage } from "./components/loadAndRenderPage";

document.getElementById('header')?.insertAdjacentHTML('beforebegin', header());
navPart()
document.getElementById('footer')?.insertAdjacentHTML('beforebegin', footer());

window.addEventListener('locationchange', function () {
  loadAndRenderPage()
});
loadAndRenderPage()
