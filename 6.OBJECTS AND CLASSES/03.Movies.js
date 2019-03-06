function storeMovies(params) {
    let movies = [];
 
    for (let param of params) {
 
        if (param.includes('add movie ')) {
            let tokens = param.split('add movie ').filter(x => x !== '');
            let movieName = tokens[0];
            movies.push({
                name: movieName
            });
        } else if (param.includes(' directed by ')) {
            let tokens = param.split(' directed by ').filter(x => x !== '');
            let movieName = tokens[0];
            let directorName = tokens[1];
            let movie = movies.find(m => m.name === movieName);
 
            if (movie !== undefined) {
                movie['director'] = directorName;
            }
        } else if (param.includes(' on date ')) {
            let tokens = param.split(' on date ').filter(x => x !== '');
            let movieName = tokens[0];
            let movieDate = tokens[1];
            let movie = movies.find(m => m.name === movieName);
 
            if (movie !== undefined) {
                movie['date'] = movieDate;
            }
        }
    }
 
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(`{"name":"${movie.name}","director":"${movie.director}","date":"${movie.date}"}`);
        }
    }
}