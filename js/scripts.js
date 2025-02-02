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


// web3 forms
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("submitSuccessMessage").classList.remove("d-none");
            document.getElementById("submitErrorMessage").classList.add("d-none");
            this.reset(); // Reset form fields after success
        } else {
            document.getElementById("submitSuccessMessage").classList.add("d-none");
            document.getElementById("submitErrorMessage").classList.remove("d-none");
        }
    })
    .catch(() => {
        document.getElementById("submitSuccessMessage").classList.add("d-none");
        document.getElementById("submitErrorMessage").classList.remove("d-none");
    });
});
