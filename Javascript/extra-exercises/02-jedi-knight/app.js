// Ejercicio 1
const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  let finalcategory = [];
  for(const movie of movies) {
    for(const category of movie.categories) {
        if(!finalcategory.includes(category))
        finalcategory.push(category);
    }
  }
  console.log(finalcategory);