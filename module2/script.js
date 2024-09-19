document.querySelectorAll('.sales-btn').forEach(button => {
    button.onclick = function() {
        document.getElementById('salesModal').style.display = 'block';
    }
});

document.querySelector('.close').onclick = function() {
    document.getElementById('salesModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('salesModal')) {
        document.getElementById('salesModal').style.display = 'none';
    }
}

// Carousel Functionality
const carousel = document.querySelector('.carousel');
let images = carousel.querySelectorAll('img');
let index = 0;

setInterval(() => {
    images[index].style.opacity = 0;
    index = (index + 1) % images.length;
    images[index].style.opacity = 1;
}, 3000);
