document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    const form = document.querySelector('form');
    if (!form) {
        console.error('Form element not found');
        return;
    }

    const stars = new StarRating('.gl-star-rating--stars');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const mediaTitle = document.querySelector('#media-title').value;
        const watchedDate = document.querySelector('#watched-date').value;
        const platform = document.querySelector('#platform').value;
        const rating = document.querySelector('#rating').value;

        console.log(rating);

        if (mediaTitle && rating > 0) {
            const mediaData = {
                name: mediaTitle,
                date: watchedDate,
                platform: platform,
                rating: rating,
            };

            localStorage.setItem(mediaTitle, JSON.stringify(mediaData));

            console.log(`Media: ${mediaData.name}, Date of Watching: ${mediaData.date}, Platform: ${mediaData.platform}, Rating: ${mediaData.rating}`);

            form.reset();
            
        } else {
            alert('Please enter a movie name and provide a rating for submission!');
        }
    });
});