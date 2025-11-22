document.addEventListener("DOMContentLoaded", () => {
  const checkBox = document.getElementById("myCheck");
  const playBtn = document.getElementById("play-btn");
  const imdbInput = document.getElementById("imdb-input");
  const seasonInput = document.getElementById("season-input");
  const episodeInput = document.getElementById("episode-input");
  const modeLabel = document.getElementById("modeLabel");
  const playerDiv = document.getElementById("player");

  // Toggle series inputs
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      modeLabel.textContent = "Mode: Series";
      seasonInput.style.display = "block";
      episodeInput.style.display = "block";
      playBtn.textContent = "Play Movie"
    } else {

      modeLabel.textContent = "Mode: Movie";
      seasonInput.style.display = "none";
      episodeInput.style.display = "none";
      playBtn.textContent = "Play Series"
    }
  });

  // Play button
  playBtn.addEventListener("click", () => {
    const imdbId = imdbInput.value.trim();
    if (!imdbId) {
      alert("Please enter an IMDb ID!");
      imdbInput.focus();
      return;
    }

    let embedUrl;

    if (checkBox.checked) {
      const season = seasonInput.value.trim();
      const episode = episodeInput.value.trim();
      if (!season || !episode) {
        alert("Please enter both Season and Episode numbers!");
        seasonInput.focus();
        return;
      }
      embedUrl = `https://vidsrc-embed.ru/embed/tv/${imdbId}/${season}-${episode}`;
      //https://vidsrc-embed.ru/embed/tv/tt0944947/1-1
    } else {
      embedUrl = `https://vidsrc-embed.ru/embed/movie?imdb=${imdbId}`;
      //https://vidsrc-embed.ru/embed/movie/tt5433140
    }

    playerDiv.innerHTML = `
      <iframe 
        src="${embedUrl}" 
        width="720" 
        height="405" 
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        frameborder="0">
      </iframe>
    `;
  });
});