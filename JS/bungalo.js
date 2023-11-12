let menus = document.querySelector('.menu');
let deleteButton = document.querySelector('.close');
let navbars = document.querySelector('.navbar');

menus.addEventListener('click', function(){
  
  navbars.classList.add('Active2');
});

deleteButton.addEventListener('click', function(){
  
  navbars.classList.remove('Active2');
});

