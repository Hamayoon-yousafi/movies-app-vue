<template>
    <div class="movie" v-for="(movie, index) in this.movies" :key="index">
        <img :src="'https://image.tmdb.org/t/p/w1280/' + movie.poster_path" alt="${title}">
        <div class="movie-info">
            <h3>{{ movie.title }}</h3>
            <span>{{ (movie.vote_average).toFixed(1) }}</span>
        </div>
        <div class='info'>
        <h3>Overview: </h3>
            <p>{{ movie.overview }}</p>   
        <br><router-link :to="`/movie/${movie.title}`">
              <button class="btn btn-primary m-3" @click="getMovie(movie)">Open</button>
            </router-link>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        movies: String
    },

    methods: {
     getMovie(movie){
            this.$store.dispatch('getMovie', movie);
        }   
    }
    
}
</script>