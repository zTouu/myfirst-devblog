export function loadMore(){
    return `
    <script>
      let loadMoreBtn = document.querySelector('.load-more');
      let currentItem = 4;
  
      loadMoreBtn.onclick = () =>{
        let boxes = [...document.querySelectorAll('.blog .blog-card-group .blog-card')];
        for (var i = currentItem; i < currentItem + 4; i++){
          boxes[i].style.display = 'grid';
        }
        currentItem += 4;
  
        if(currentItem >= boxes.length){
          loadMoreBtn.style.display = 'none';
        }
      }
    </script>`
  }