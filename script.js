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
  
