const stars = new StarRating('.gl-star-rating--stars');

const FormHandler = async (event) => {
    event.preventDefault();
  
    const mediaTitle = document.querySelector('#media-title').value.trim();
    const watchedDate = document.querySelector('#watched-date').value.trim();
    const platformId = document.querySelector('#platform').value.trim();
    const rating = document.querySelector('#rating').value.trim();

    if (mediaTitle && rating > 0) {
      const mediaData = {
        media_title: mediaTitle,
        watched_ts: watchedDate,
        platform_id: platformId,
        rating: rating,
      };
      try {
        const response = await fetch('/api/entries', {
          method: 'POST',
          body: JSON.stringify(mediaData),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          localStorage.setItem(mediaTitle, JSON.stringify(mediaData));
          document.location.replace('/');
        } else {
          $('#submission-error').toast('show');
        }
        
      } catch (error) {
        console.error('Error:', error);
        $('#submission-error').toast('show');
      }
    } else {
      $('#missing-fields').toast('show');
    }
  };
  
  document
    .querySelector('form')
    .addEventListener('submit', FormHandler);