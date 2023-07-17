const Heroes = document.querySelector(".Heroes");
Heroes.addEventListener('click',() =>{
    setTimeout(() => {
       window.location.assign("http://127.0.0.1:5500/WallOfHeroes.html");
    }, 1500);
 });
 
