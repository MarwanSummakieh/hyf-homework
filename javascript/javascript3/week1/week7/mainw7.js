function fetchMovies(){
    const url="https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
    return fetch(url)
    .then(resp=>resp.json())
  }
  
  fetchMovies()
  .then((movies)=>{
    const tagsMovies= movies.map((movie)=>{
      let newMovie = Object.assign({},movie,{tag:""});
      if(movie.rating>=7) newMovie.tag = "Good";
      else if (movie.rating>=4 && movie.rating<7) newMovie.tag = "Avarage";
      else if (movie.rating<4) newMovie.tag = "Bad";
      return newMovie;
    })
    console.log(tagsMovies);
  
    const ratingSum = movies.reduce(ratingReducerSum,0)
  
    function ratingReducerSum(accumulator,movie){
      accumulator=accumulator + movie.rating;
      return accumulator;
    }
    const avarageRating = Math.floor(ratingSum/movies.length);
    console.log(avarageRating);
    let goodTags=0;
    let avarageTags=0;
    let badTags=0;
  
    tagsMovies.forEach((movie)=>{
      if(movie.tag=="Good") {
        goodTags++;
      }
      else if(movie.tag=="Avarage"){
        avarageTags++;
      }
      else if(movie.tag=="Bad"){
        badTags++;
      }
    })
    console.log("Good movies "+goodTags);
    console.log("Avarage movies "+avarageTags);
    console.log("Bad movies "+badTags);
  
    let dogCount = 0;
    let theCount = 0;
    let whoCount = 0;
    let isCount = 0;
    let notCount = 0;
    let aCount = 0;
    let manCount = 0;
    movies.map((movie)=>{
      movie.title.split(" ")
                 .filter((key)=>{
                   if(key.toLowerCase()==="dog") dogCount++;
                   if(key.toLowerCase()==="the") theCount++;
                   if(key.toLowerCase()==="who") whoCount++;
                   if(key.toLowerCase()==="is")  isCount++;
                   if(key.toLowerCase()==="not") notCount++;
                   if(key.toLowerCase()==="a")   aCount++;
                   if(key.toLowerCase()==="man") manCount++;
                 })
    })
    console.log("'Dog' key: "+dogCount+"\n"+
                "'The' key: "+theCount+"\n"+
                "'Who' key: "+whoCount+"\n"+
                "'Is'  key: "+isCount +"\n"+
                "'Not' key: "+notCount+"\n"+
                "'A'   key: "+aCount  +"\n"+
                "'Man' key: "+manCount+"\n");
  
  let movieYears=movies.filter((movie)=>{
    if(movie.year>=1980 && movie.year<=1989)
    return true;
  })
  console.log(movieYears);
  })