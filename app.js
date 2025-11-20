document.getElementById("play-btn").onclick = () => {
  const imdbId = document.getElementById("imdb-input").value.trim();
  if (!imdbId) {
    alert("Please enter an IMDb ID!");
    return;
  }

  // Build the Vidsrc embed URL
  const embedUrl = `https://vidsrc-embed.ru/embed/movie?imdb=${imdbId}`;

  // Create the iframe player
  const playerDiv = document.getElementById("player");
  playerDiv.innerHTML = `
    <iframe 
      src="${embedUrl}" 
      width="720" 
      height="405" 
      allow="autoplay; fullscreen" 
      frameborder="0">
    </iframe>
  `;
};