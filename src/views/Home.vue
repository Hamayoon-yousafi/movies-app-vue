<template>
  <div class="home">
        <div v-if="this.loading === 1" >
            <div class="fa-3x" id="loadingIcon" >
                <i class="fas fa-circle-notch fa-spin"></i>
            </div>
        </div>

        <main v-else>
           <movieList :movies="this.movies"></movieList>   
        </main>
    
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
      MovieList: require('@/components/MovieList').default,
  },

computed: mapState([
        'movies',
        'loading'
    ])

}
</script>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .movie {
    background-color: #373b69;
    width: 300px;
    border-radius: 3px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    margin: 2rem;
    overflow: hidden;
    position: relative;
   }

  .movie img {
    display: inline-block;
    object-fit: fill;
    width: 100%;
    height: 400px;
}

.movie-info {
    color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem 1rem;
    letter-spacing: 0.5px;
    height: 120px;
}

.movie-info h3 {
    margin: 0;
}

.movie-info span {
    background-color: #22254b;
    padding: 0.25rem 0.5rem;
    font-weight: bold;
}

.info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #22254bfa;
    overflow: auto;
    color: white;
    padding: 120px 12px 0 12px;
    transform: translateY(100%);
    transition: 0.4s ease-out;
    border-radius: 3px;
}

.movie:hover .info {
    transform: translateY(0);
}

.info h3 {
    letter-spacing: 1px;
}

ul li a{
    background: #373b69 !important;
    color: white !important;
}

#loadingIcon {
    color: white;
    font-size: 86px;
    position: absolute;
    left: 50%;
    top: 43%;
}

</style>
