import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    movies: [],
    loading: 1,
    getSearchedMovies: null,
    movie: null,
    savedMovies: [],
  },

  mutations: {
    getMovies(state, response){
        state.movies = response; 
        state.loading = 0;
    },

    getSearchedMovies(state, response){
      state.getSearchedMovies = response;
    },

    falsifyLoading(state){
      state.loading = 0
    },

 
    getMovie(state, movie) {
        state.movie = movie;
        localStorage.setItem('movie', JSON.stringify(movie));
      },

      getMovieFromLocal(state){
        state.movie = localStorage.getItem("movie") ? JSON.parse(localStorage.getItem("movie")) : state.movie;
      },

      saveMovie(state, movie){
        state.savedMovies.push(movie);
        localStorage.setItem('savedMovies', JSON.stringify(state.savedMovies));
      },

      getsavedMoviesFromLocal(state){
          state.savedMovies = localStorage.getItem("savedMovies") ? JSON.parse(localStorage.getItem("savedMovies")) : state.savedMovies;
      }, 

      removeMovie(state, movie) {
        // state.toBeRemoved = state.savedMovies.findIndex(x => x.title === movie.title);

        if (state.savedMovies.findIndex(x => x.title === movie.title) > -1) {
          state.savedMovies.splice(state.savedMovies.findIndex(x => x.title === movie.title), 1);
        }

        localStorage.setItem('savedMovies', JSON.stringify(state.savedMovies));
        
      }
       
    },

  actions: {
    getMovies({ commit }){
      axios.get(`http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
      .then((response) => {
        commit('getMovies', response.data.results)
      })
    },

    getSearchedMovies({commit}, query){
      axios.get('https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=' + query)
      .then((response) => {
        commit('getSearchedMovies', response.data.results);
      })
    },

    falsifyLoading({commit}){
        commit('falsifyLoading')
    },

    getMovie({commit}, movie){
      commit('getMovie', movie);
    },

    getMovieFromLocal({commit}){
        commit('getMovieFromLocal');
    },

    saveMovie({commit}, movie){
      commit('saveMovie', movie);
    },

    getsavedMoviesFromLocal({commit}){
      commit('getsavedMoviesFromLocal');
    }, 

    removeMovie({commit}, movie){
      commit('removeMovie', movie)
    }

  },

  modules: {
  }
})
