window.addEventListener('load', function() {
    const loadingElement = document.getElementById('loading');
    setTimeout(() => {
        loadingElement.style.transition = 'opacity 0.5s ease-out'; 
        loadingElement.style.opacity = '0'; 
        setTimeout(() => {
            loadingElement.style.display = 'none';
        }, 500); 
    }, 700); 
});
