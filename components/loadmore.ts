export function loadMore(){
      let loadMoreBtn = document.querySelector('.load-more') as HTMLElement;
      let currentItem = 4;
  
      loadMoreBtn.onclick = () =>{
        let boxes = [...document.querySelectorAll('.blog .blog-card-group .blog-card')] as HTMLElement[];
        for (var i = currentItem; i < currentItem + 4; i++){
          boxes[i].style.display = 'grid';
        }
        currentItem += 4;
  
        if(currentItem >= boxes.length){
          loadMoreBtn.style.display = 'none';
        }
      }
    
  }