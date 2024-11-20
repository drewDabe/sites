document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', function() {
        document.getElementById('main-site').src = this.getAttribute('data-site');
    });
});