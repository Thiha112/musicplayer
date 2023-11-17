document.addEventListener('DOMContentLoaded', function () {
      const musicPlayer = document.getElementById('music-player');
      const musicBackground = document.getElementById('music-background');
      const songName = document.getElementById('song-name');
      const singerName = document.getElementById('singer-name');
      const playPauseBtn = document.getElementById('play-pause-btn');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const shuffleBtn = document.getElementById('shuffle-btn');
      const repeatBtn = document.getElementById('repeat-btn');
      const repeatAllBtn = document.getElementById('repeat-all-btn');
      const downloadBtn = document.getElementById('download-btn');

      // Get the song index from the URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const currentSongIndex = parseInt(urlParams.get('index')) || 0;
      let isPlaying = false;

      // Example songs (you can add more)
      const songs = [
            { name: 'Song 1', singer: 'Singer 1', src: 'song1.mp3' },
            { name: 'Song 2', singer: 'Singer 2', src: 'song2.mp3' },
            // Add more songs here
      ];

      function playSong(index) {
            const currentSong = songs[index];

            // Update music player UI
            songName.textContent = currentSong.name;
            singerName.textContent = currentSong.singer;
            musicBackground.src = `backgrounds/${currentSong.src.replace('.mp3', '.mp4')}`;

            // Start playing music
            playPauseBtn.textContent = '❚❚';
            isPlaying = true;
      }

      playSong(currentSongIndex);

      playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                  // Pause the music
                  playPauseBtn.textContent = '►';
                  isPlaying = false;
            } else {
                  // Resume playing
                  playPauseBtn.textContent = '❚❚';
                  isPlaying = true;
            }
      });

      prevBtn.addEventListener('click', () => playSong((currentSongIndex - 1 + songs.length) % songs.length));
      nextBtn.addEventListener('click', () => playSong((currentSongIndex + 1) % songs.length));

      // Add functionality for shuffle, repeat, repeat all, and download buttons

      // ...
});
