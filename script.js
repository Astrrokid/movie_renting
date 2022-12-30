class Movie {
    constructor(title, year, rating) {
      this.title = title;
      this.year = year;
      this.rating = rating;
      this.available = true;
    }
  
    rent() {
      if (this.available) {
        this.available = false;
        console.log(`${this.title} has been rented.`);
      } else {
        console.log(`${this.title} is not available for rent.`);
      }
    }
  
    return() {
      if (!this.available) {
        this.available = true;
        console.log(`${this.title} has been returned.`);
      } else {
        console.log(`${this.title} was not rented.`);
      }
    }
  }
  
  class MovieStore {
    constructor(name, inventory) {
      http://this.name = name;
      this.inventory = inventory;
    }
  
    rentMovie(title) {
      for (const movie of this.inventory) {
        if (movie.title === title && movie.available) {
          http://movie.rent();
          return;
        }
      }
      console.log(`${title} is not available for rent.`);
    }
  
    returnMovie(title) {
      for (const movie of this.inventory) {
        if (movie.title === title && !movie.available) {
          movie.return();
          return;
        }
      }
      console.log(`${title} was not rented.`);
    }
  }
  
  const movies = [
    new Movie("The Shawshank Redemption", 1994, 9.2),
    new Movie("The Godfather", 1972, 9.2),
    new Movie("The Godfather: Part II", 1974, 9.0),
    new Movie("The Dark Knight", 2008, 9.0),
    new Movie("12 Angry Men", 1957, 8.9)
  ];
  
  const movieStore = new MovieStore("Film Buffs", movies);
  
  movieStore.rentMovie("The Shawshank Redemption");
  movieStore.rentMovie("The Shawshank Redemption");
  movieStore.returnMovie("The Shawshank Redemption");
  movieStore.returnMovie("The Shawshank Redemption");