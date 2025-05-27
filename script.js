document.addEventListener('DOMContentLoaded', function() {
    // Podcast player functionality
    const podcastAudio = document.getElementById('podcastAudio');
    const podcastPlayButton = document.getElementById('podcastPlayButton');
    const podcastPlayIcon = podcastPlayButton.querySelector('.podcast-play-icon');
    
    let isPlaying = false;
    
    podcastPlayButton.addEventListener('click', function() {
        if (isPlaying) {
            podcastAudio.pause();
            // Change to play icon
            podcastPlayIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
        } else {
            podcastAudio.play();
            // Change to pause icon
            podcastPlayIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
        }
        
        isPlaying = !isPlaying;
    });
    
    // Reset play button when audio ends
    podcastAudio.addEventListener('ended', function() {
        isPlaying = false;
        podcastPlayIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    });
    
    // Mobile menu toggle (placeholder - expand as needed)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    mobileMenuButton.addEventListener('click', function() {
        // Add mobile menu functionality here
        alert('Mobile menu functionality would go here');
    });
    
    // Video play button (placeholder - expand as needed)
    const videoPlayButton = document.querySelector('.play-button');
    
    videoPlayButton.addEventListener('click', function() {
        // Add video play functionality here
        alert('Video play functionality would go here');
    });
});
