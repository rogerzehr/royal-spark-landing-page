document.addEventListener('DOMContentLoaded', function() {
    // Podcast player functionality
    const podcastAudio = document.getElementById('podcastAudio');
    const podcastPlayButton = document.getElementById('podcastPlayButton');
    const podcastPlayIcon = podcastPlayButton ? podcastPlayButton.querySelector('.podcast-play-icon') : null; // Check if podcastPlayButton exists

    let isPlaying = false;

    if (podcastPlayButton && podcastAudio && podcastPlayIcon) {
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
    }

    // Mobile menu toggle (placeholder - expand as needed)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            console.log('Mobile menu functionality would go here');
        });
    }
});
