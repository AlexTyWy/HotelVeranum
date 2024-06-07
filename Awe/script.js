document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Simulate a loading process
    setTimeout(() => {
        loader.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('animate__fadeIn');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 3000); // Adjust the time as needed (3 seconds here)
});
