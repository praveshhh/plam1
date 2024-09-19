// script.js

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