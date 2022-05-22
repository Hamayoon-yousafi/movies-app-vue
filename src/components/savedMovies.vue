<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Saved Movies
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div v-if="this.savedMovies.length === 0">
                <p class="dropdown-item">No Movies Saved Yet</p>
            </div>
            <div v-else v-for="(movie, index) in this.savedMovies" :key="index" >
                <p class="dropdown-item d-flex justify-content-between">
                    <img :src="'https://image.tmdb.org/t/p/w1280/' + movie.poster_path" alt="${title}">
                    <router-link :to="`/movie/${movie.title}`">
                        <span @click="getMovie(movie)">{{ movie.title }}</span> 
                    </router-link>
                    <button @click.stop="removeMovie(movie)" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </p>
                <div class="dropdown-divider"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState([
        'savedMovies'
    ]),

    methods: {
        removeMovie(movie){
            this.$store.dispatch('removeMovie', movie);
        },
        getMovie(movie){
            this.$store.dispatch('getMovie', movie);
        }   
    },

    created(){
        this.$store.dispatch('getsavedMoviesFromLocal');
    }
    }
</script>

<style scoped>
    #dropdownMenuButton {
        background: #22254b !important;
    }

    img {
        width: 45px;
        height: 45px;
    }

    a {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 151px;
    margin: 13px;
    color: black;
    }
</style>


