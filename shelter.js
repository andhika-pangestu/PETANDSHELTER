let previewContainer = document.querySelector('.location-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.card-container .card').forEach(card => {
    card.onclick = () => {
        previewContainer.style.display = 'flex'; 
        let name = card.getAttribute('data-name');
        previewBoxes.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name === target){
                preview.classList.add('active');
            }
        });
    };
});

previewBoxes.forEach(preview => {
    preview.querySelector('.fa-times').onclick = () => {
        preview.classList.remove('active');
        previewContainer.style.display = 'none';
    };
}); 

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });