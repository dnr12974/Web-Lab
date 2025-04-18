let movie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  
  function printMovie(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}`);
  }
  
  printMovie(movie);

  
  /*OUTPUT:
  Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes*/