document.addEventListener('DOMContentLoaded', () => {
    console.log('Watchlist page loaded');

    // Function to render the watchlist
    function renderWatchlist() {
        const mediaListContainer = document.querySelector('.media-list');
        mediaListContainer.innerHTML = '';  // Clear existing content

        // Loop through localStorage to get saved media items
        for (let i = 0; i < localStorage.length; i++) {
            const mediaTitle = localStorage.key(i);
            const mediaData = JSON.parse(localStorage.getItem(mediaTitle));

            if (mediaData) {
                // Create a new media card element
                const mediaCard = document.createElement('div');
                mediaCard.classList.add('media-card');

                // Add media details
                mediaCard.innerHTML = `
                    <h5 class="media-title">${mediaData.name}</h5>
                    <p class="media-details">Watched on: ${mediaData.platform}</p>
                    <p class="media-details">Date: ${mediaData.date}</p>
                    <div class="media-details">
                        <label>Rating:</label>
                        <div class="gl-star-rating">
                            <select class="gl-star-rating--stars" data-rating="${mediaData.rating}">
                                <option value="1" ${mediaData.rating == 1 ? 'selected' : ''}>1</option>
                                <option value="2" ${mediaData.rating == 2 ? 'selected' : ''}>2</option>
                                <option value="3" ${mediaData.rating == 3 ? 'selected' : ''}>3</option>
                                <option value="4" ${mediaData.rating == 4 ? 'selected' : ''}>4</option>
                                <option value="5" ${mediaData.rating == 5 ? 'selected' : ''}>5</option>
                            </select>
                        </div>
                    </div>
                `;

                // Append the media card to the container
                mediaListContainer.appendChild(mediaCard);

                // Initialize star rating for the card based on the user's rating
                new StarRating(mediaCard.querySelector('.gl-star-rating--stars'));
            }
        }
    }

    // Render the watchlist on page load
    renderWatchlist();

    // Log out button functionality
    const logoutButton = document.querySelector('.logout-link a');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Redirect to login page or clear session
            document.location.replace('./login.html');
        });
    }
});
