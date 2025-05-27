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

    // Collapsible sections functionality
    const collapsibleButtons = document.querySelectorAll('.collapsible-button');

    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest parent that contains both the header and the content to collapse
            const parentSectionContainer = this.closest('.section-container');
            const collapsibleContent = parentSectionContainer ? parentSectionContainer.querySelector('.collapsible-content') : null;

            if (collapsibleContent) {
                this.classList.toggle('active'); // Toggle active class on the button itself
                collapsibleContent.classList.toggle('active'); // Toggle active class on the content

                // Adjust max-height for smooth transition
                if (collapsibleContent.classList.contains('active')) {
                    collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
                } else {
                    collapsibleContent.style.maxHeight = "0";
                }
            }
        });
    });
});
