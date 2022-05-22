<template>
  <div class="home">
       
        <div v-if="this.loading === 1" >
            <div class="fa-3x" id="loadingIcon" >
                <i class="fas fa-circle-notch fa-spin"></i>
            </div>
        </div>
        <main v-else>
           <movieList :movies="this.getSearchedMovies"></movieList>  
        </main>
    
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Search',
  components: {
       MovieList: require('@/components/MovieList').default,
  },
   created(){
      this.$store.dispatch('getSearchedMovies', this.$route.params.query);
  },

  updated(){
      this.$store.dispatch('getSearchedMovies', this.$route.params.query);
  },

computed: mapState([
        'getSearchedMovies',
        'loading'
    ])

}
</script>


