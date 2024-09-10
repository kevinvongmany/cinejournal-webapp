const FormHandler = async (event) => {
    event.preventDefault();
  
    const mediaTitle = document.querySelector('#media-title').value.trim();
    const watchedDate = document.querySelector('#watched-date').value.trim();
    const platform = document.querySelector('#platform').value.trim();
    const rating = document.querySelector('#rating').value.trim();
  
  
    if (mediaTitle && rating > 0) {
      const mediaData = {
        media_title: mediaTitle,
        watched_ts: watchedDate,
        // platform: platform,
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
          document.location.replace('/watchlist');
        } else {
          alert('Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      }
    } else {
      alert('Please enter a movie name and provide a rating for submission!');
    }
  };
  
  document
    .querySelector('form')
    .addEventListener('submit', FormHandler);