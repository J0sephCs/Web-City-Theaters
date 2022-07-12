$(document).ready(function(){
    var apiURL= 'https://api.themoviedb.org/3/'; 
    var imgURL= 'https://image.tmdb.org/t/p/';
    var apiKey= '2f10bad98e5065d3423e59e201b8c2cf';


    const nowPlaying= apiURL + 'movie/now_playing?api_key=' + apiKey;

   
    function getNowPlayingData(){
        $.getJSON(nowPlaying, function(nowPlayingData){
            for(let i=0; i<nowPlayingData.results.length; i++){
                var movieID= nowPlayingData.results[i].id;
                var movieURL= apiURL+'movie/'+movieID+'/videos?api_key='+apiKey;

                $.getJSON(movieURL, function(movieKey){
                    var poster= imgURL+'w300'+nowPlayingData.results[i].poster_path;
                    var title= nowPlayingData.results[i].original_title;
                    var releaseDate= nowPlayingData.results[i].release_date;
                    var overview= nowPlayingData.results[i].overview;
                    var voteAverage= nowPlayingData.results[i].vote_average;
                    var youtubeKey= movieKey.results[0].key;
                    var youtubeLink= 'https://www.youtube.com/watch?v='+youtubeKey;

                    var nowPlayingHTML= '';
                    nowPlayingHTML+= '<div class="col-sm-3 eachMovie">';
                    nowPlayingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
                    nowPlayingHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
                        nowPlayingHTML += '<div class="modal-dialog" role="document">';
                            nowPlayingHTML += '<div class="modal-content col-sm-12">';
                                nowPlayingHTML += '<div class="col-sm-6 moviePosterInModal">';
                                    nowPlayingHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
                                nowPlayingHTML += '</div><br>'; 
                                nowPlayingHTML += '<div class="col-sm-6 movieDetails">';
                                    nowPlayingHTML += '<div class="movieName">'+title+'</div><br>';
                                    nowPlayingHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
                                    nowPlayingHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
                                    nowPlayingHTML += '<div class="overview">' +overview+ '</div><br>';
                                    nowPlayingHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
                                    nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
                                    nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
                                    nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">4:00 PM' + '</div>';
                                    nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
                                    nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
                                    nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
                                nowPlayingHTML += '</div>';
                            nowPlayingHTML += '</div>'; 
                        nowPlayingHTML += '</div>'; 
                    nowPlayingHTML += '</div>';
                nowPlayingHTML += '</div>'; 

                $('#movieGrid').append(nowPlayingHTML);
                $('#movieGenreLabel').html('Trending');
                })
            }
        })
    };
    getNowPlayingData();  
});



function getMoviesByGenre(genreId){
    const getMoviesByGenreURL= apiURL+'genre/'+genreId+'/movies?api_key='+apiKey+'&language=en-US&include_adult=false&sort_by=created_at.asc';

    $.getJSON(getMoviesByGenreURL, function(genreData){
        console.log(genreData);
        for (let i=0; i<genreData.results.length; i++){
            var movieID= genreData.results[i].id;
            var thisMovieURL= apiURL+'movie/'+movieID+'/vidoes?api_key='+apiKey;

            $.getJSON(thisMovieURL, function(movieKey){
                var poster= imgURL+'w300'+genreData.results[i].poster_path;
                var title= genreData.results[i].original_title;
                var releaseDate= genreData.results[i].release_date;
                var overview= genreData.results[i].overview;
                var voteAverage= genreData.results[i].vote_average;
                var youtubeKey= movieKey.results[0].key;
                var youtubeLink= 'https://www.youtube.com/watch?v='+youtubeKey;
                var genreHTML= '';
                genreHTML += '<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">';
						genreHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
						genreHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
							genreHTML += '<div class="modal-dialog" role="document">';
								genreHTML += '<div class="modal-content col-sm-12 col-lg-12">';
									genreHTML += '<div class="col-sm-6 moviePosterInModal">';
										genreHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
									genreHTML += '</div><br>';
									genreHTML += '<div class="col-sm-6 movieDetails">';
										genreHTML += '<div class="movieName">'+title+'</div><br>';
										genreHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
										genreHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
										genreHTML += '<div class="overview">' +overview+ '</div><br>';
										genreHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
                                        genreHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
										genreHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
										genreHTML += '<div class="col-sm-3 btn btn-primary">4:00 PM' + '</div>';
										genreHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
										genreHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
										genreHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
									genreHTML += '</div>';
								genreHTML += '</div>'; 
							genreHTML += '</div>'; 
						genreHTML += '</div>'; 
					genreHTML += '</div>'; 
					$('#movieGrid').append(genreHTML);
            })
        }
    })
};


var nowPlayingHTML= '';
var genreHTML= '';

$('.navbar-brand').click(function(){
    getNowPlayingData();
    $('#movieGrid').html(nowPlayingHTML);
    $('#movieGenreLabel').html('Now Playing');
})
$('.nowPlaying').click(function(){
    getNowPlayingData();
    $('#movieGrid').html(nowPlayingHTML);
    $('#movieGenreLabel').html('Now Playing');
})
$('#action').click(function(){
    getMoviesByGenre(28);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Action');
})
$('#adventure').click(function(){
    getMoviesByGenre(12);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Adventure');
})
$('#animation').click(function(){
    getMoviesByGenre(16);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Animation');
})
$('#comedy').click(function(){
    getMoviesByGenre(35);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Comedy');
})
$('#crime').click(function(){
    getMoviesByGenre(80);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Crime');
})
$('#drama').click(function(){
    getMoviesByGenre(18);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Drama');
})
$('#family').click(function(){
    getMoviesByGenre(10751);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Family');
})
$('#fantasy').click(function(){
    getMoviesByGenre(14);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Fantasy');
})
$('#history').click(function(){
    getMoviesByGenre(36);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('History');
})
$('#horror').click(function(){
    getMoviesByGenre(27);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Horror');
})
$('#music').click(function(){
    getMoviesByGenre(10402);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Music');
})
$('#scifi').click(function(){
    getMoviesByGenre(878);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Sci-Fi');
})
$('#thriller').click(function(){
    getMoviesByGenre(53);
    $('#movieGrid').html(genreHTML);
    $('#movieGenreLabel').html('Thriller');
});

var searchTerm= '';
searchMovies();
$('.searchForm').submit(function(event){
    $('#movieGrid').html('');
    event.preventDefault();
    searchTerm= $('.form-control').val();
    searchMovies();
});



function searchMovies(){
    const searchMovieURL= apiURL+'search/movie?api_key='+apiKey+'&language=en-US&page=1&include_adult=false&query='+searchTerm;
    $.getJSON(searchMovieURL, function(movieSearchResults){
        for (let i=0; i<movieSearchResults.results.length; i++){
            var movieID= movieSearchResults.results[i].id;
            var thisMovieURL= apiURL+'movie/'+movieID+'/videos?api_key='+ apiKey;

            $.getJSON(thisMovieURL, function(movieKey){
                var poster= imgURL+'w300'+movieSearchResults.results[i].poster_path;
                var title= movieSearchResults.results[i].original_title;
                var releaseDate= movieSearchResults.results[i].release_date;
                var overview= movieSearchResults.results[i].overview;
                var voteAverage= movieSearchResults.results.vote_average;
                var youtubeKey= movieKey.results[0].key;
                var youtubeLink= 'https://www.youtube.com/watch?v='+youtubeKey;
                var searchResultsHTML= '';
                searchResultsHTML += '<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">';
						searchResultsHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
						searchResultsHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
							searchResultsHTML += '<div class="modal-dialog" role="document">';
								searchResultsHTML += '<div class="modal-content col-sm-12 col-lg-12">';
									searchResultsHTML += '<div class="col-sm-6 moviePosterInModal">';
										searchResultsHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
									searchResultsHTML += '</div><br>';
									searchResultsHTML += '<div class="col-sm-6 movieDetails">';
										searchResultsHTML += '<div class="movieName">'+title+'</div><br>';
										searchResultsHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
										searchResultsHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
										searchResultsHTML += '<div class="overview">' +overview+ '</div><br>';
										searchResultsHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
                                        searchResultsHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">4:00 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
									searchResultsHTML += '</div>'; 
							searchResultsHTML += '</div>'; 
						searchResultsHTML += '</div>'; 
					searchResultsHTML += '</div>';
					$('#movieGrid').append(searchResultsHTML);
					$('#movieGenreLabel').html(searchTerm);	
            })
        }
    })
};

