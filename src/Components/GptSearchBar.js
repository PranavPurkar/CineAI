import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import { useRef } from "react";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptslice";

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const Search = useRef(null);
 
  //for each movie it will search in the TMDB..
  const searchMovieTmdb = async (movie) => {
     const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" 
      + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

      const json = await data.json();
      return json.results;
  };
  const handleGptSearchclick = async() => { 

  const gptquery = "Act as a Movie Recommendation system and suggest some movies for the query :" + 
    Search.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil gaya";
   
   
    const gptresults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptquery }],
      model: 'gpt-3.5-turbo',
    });
    
    console.log(gptresults.choices?.[0]?.message?.content);

    //This will convert the movies in array of movies.
    const gptmovies = gptresults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptmovies.map((movie) => searchMovieTmdb(movie));
    //Promise,Promise,Promise,Promise,Promise

    //This will resolve the promises.
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

     //dispatching multiple parameters/actions to a single slice.
    dispatch(addGptMovieResult({movieNames: gptmovies, movieResults: tmdbResults}));
  };
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input 
            ref={Search}
            type="text" 
            className="p-4 m-4 col-span-9 "
            placeholder= {lang[langkey].gptSearchPlaceholder}
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg "
              onClick={handleGptSearchclick}>
               {lang[langkey].search}
            </button>
        </form>
    </div>   
  );
};

export default GptSearchBar;