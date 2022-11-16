 const openModal = document.querySelector('.spiderman-img');
 const modal =document.querySelector('.modal');
 const closeModal = document.querySelector('.modal-close');

 openModal.addEventListener('click', ()=>{
     e.preventDefault();
     modal.classList.add('modal--show');
 });

 closeModal.addEventListener('click', ()=>{
     e.preventDefault();
     modal.classList.remove('modal--show');
 });

