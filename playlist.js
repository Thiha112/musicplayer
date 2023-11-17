document.addEventListener('DOMContentLoaded', function () {
      const playlist = document.getElementById('playlist');

      // Example songs (you can add more)
      const songs = [
            { name: 'မေရေအဲ့သလောက်တောင်ချစ်ရသည်', singer: 'ဇော်ပိုင်/မေခလာ', image: 'img/song1.jpg', src: 'img/song1.jpg' },
            { name: 'Song 2', singer: 'Singer 2', image: 'song2.jpg', src: 'song2.mp3' },
            // Add more songs here
      ];

      // Populate playlist
      songs.forEach((song, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('song-item');

            // Create image element
            const image = document.createElement('img');
            image.src = `images/${song.image}`;
            image.alt = song.name;
            listItem.appendChild(image);

            // Create song details
            const details = document.createElement('div');
            details.classList.add('song-details');
            details.innerHTML = `
            <p class="song-name">${song.name}</p>
            <p class="singer-name">${song.singer}</p>
        `;
            listItem.appendChild(details);

            // Add click event to navigate to the player.html page with the selected song index
            listItem.addEventListener('click', () => {
                  window.location.href = `player.html?index=${index}`;
            });

            // Append the list item to the playlist
            playlist.appendChild(listItem);
      });
});
