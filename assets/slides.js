<script>
    document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.slideshow img');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');
  }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

    // Automatically change the image every 3 seconds
    setInterval(nextImage, 3000);
});