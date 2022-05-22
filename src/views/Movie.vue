<template>
        <div class="container">
            <div class="main">
                <img :src="'https://image.tmdb.org/t/p/w1280/' + this.movie.poster_path" class="img-fluid" alt="Responsive image">
                <div class="information">
                    <h1 class="display-3">{{this.movie.title}}</h1>
                    <p class="lead">{{ this.movie.overview }}</p>
                    <div class="extra"> 
                    <table class="table table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Vote-Average</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Vote Count</th>
                            <th scope="col">Relase Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{{(this.movie.vote_average).toFixed(2)}}</td>
                            <td>{{(this.movie.popularity).toFixed(2)}}</td>
                            <td>{{this.movie.vote_count}}</td>
                            <td>{{this.movie.release_date}}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div>
                        <div v-if="isSaved(movie)" class="alert alert-success" role="alert">
                            Saved!
                        </div>
                        <button v-else class="btn btn-primary" @click="saveMovie()">Save</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'; 

export default {
    name: 'Movie',

    computed: mapState([
        'loading',
        'movie',
        'savedMovies'
    ]),

    created(){
        this.$store.dispatch('getMovieFromLocal');     
    },

    methods: {
        saveMovie(){
            this.$store.dispatch('saveMovie', this.movie);
        },

        isSaved(movie){
            if (this.savedMovies.findIndex(x => x.title === movie.title) > -1) {
                    return true;
                }
        }
    }
}
</script>

<style>
    .main{
            color: #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    margin: auto;
    }

    .information{
            display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    }

    p {
        width: 93%;
    }

    img {
        width: 445px;
        height: 500px;
        border-radius: 5px;
    }

    #loadingIcon {
    color: white;
    font-size: 86px;
    position: absolute;
    left: 50%;
    top: 43%;
    }
</style>