function showCertificates() {
    // Get all three container divs (assumes the first two are the ones to hide)
    const containers = document.querySelectorAll('.flex-div .container');
    const languagesContainer = containers[0];
    const softwareContainer = containers[1];
    const certificatesContainer = containers[2];
  
    // Apply blur and fade-out to the first two containers
    languagesContainer.style.filter = "blur(5px)";
    languagesContainer.style.opacity = "0";
    softwareContainer.style.filter = "blur(5px)";
    softwareContainer.style.opacity = "0";
  
    // After the transition, hide the first two completely
    setTimeout(() => {
      languagesContainer.classList.add("hidden");
      softwareContainer.classList.add("hidden");
  
    // Remove the hidden class from the Certificates container
    certificatesContainer.classList.remove("hidden");
    // Set its initial opacity to 0 (for fade-in effect)
    certificatesContainer.style.opacity = "0";
    certificatesContainer.style.filter = "blur(0)";
    setTimeout(() => {
      certificatesContainer.style.opacity = "1";
    }, 10);
    }, 300);
}
function hideCertificates() {
    // Get all three container divs (assumes the first two are the ones to hide)
    const containers = document.querySelectorAll('.flex-div .container');
    const languagesContainer = containers[0];
    const softwareContainer = containers[1];
    const certificatesContainer = containers[2];
  
    // Apply blur and fade-out to the first two containers
    certificatesContainer.style.filter = "blur(5px)";
    certificatesContainer.style.opacity = "0";
  
    // After the transition, hide the first two completely
    setTimeout(() => {
      certificatesContainer.classList.add("hidden");
      languagesContainer.classList.remove("hidden");
      softwareContainer.classList.remove("hidden");
  
    // Set its initial opacity to 0 (for fade-in effect)
    languagesContainer.style.opacity = "0";
    softwareContainer.style.opacity = "0";
    languagesContainer.style.filter = "blur(0)";
    softwareContainer.style.filter = "blur(0)";
    setTimeout(() => {
        languagesContainer.style.opacity = "1";
        softwareContainer.style.opacity = "1";
    }, 10);
    }, 300);
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Trigger the page load transition after a short delay
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 50);
  });
  
  // Attach click listeners to all internal links
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {

      if (link.hasAttribute('download')) {
        return; // Let the browser handle it normally
      }
      // Get the destination URL
      const targetUrl = this.getAttribute('href');
      
      // Prevent immediate navigation
      e.preventDefault();
      
      // Remove the 'loaded' class to trigger the fade-out transition
      document.body.classList.remove('loaded');
      
      // Wait for the transition to finish (match the duration from CSS)
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 150); // 500ms delay matches the CSS transition duration
    });
  });
  // Modal image viewer for certificates
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.getElementById('modal-close');

  // When any certification image is clicked
  document.querySelectorAll('.container.wide img').forEach(img => {
      img.addEventListener('click', () => {
          modalImg.src = img.src;
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.add('show');
          }, 10);
      });
  });

  // Click to close (anywhere outside the image or on the close button)
  modal.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => {
          modal.classList.add('hidden');
      }, 300); // Match transition duration
    
  });

  closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => {
          modal.classList.add('hidden');
      }, 300); // Match transition duration
    
  });
});

  
