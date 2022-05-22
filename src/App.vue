<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <div class="search" style="display: flex;">
      <input type="text" class="form-control" placeholder="Search Movie" aria-label="Username" aria-describedby="basic-addon1" v-model="this.query">
      <router-link :to="`/search/${this.query}`">
        <button class="btn btn-success" :disabled="!this.query" @click="falsifyLoading();">Go</button>
      </router-link>
    </div>
    <saved-movies></saved-movies>
    
  </div>
    
  <router-view/>
</template>


<script>
import { mapState } from 'vuex';

export default {
   components: {
      savedMovies: require('@/components/savedMovies').default,
  },

  data(){
     return{
        query: null
     }
  },
  created(){
    this.$store.dispatch('getMovies');
  },

  computed: mapState([
        'movies'
    ]),

  methods: {
    falsifyLoading(){
        this.$store.dispatch('falsifyLoading');
    }
  }

}
</script>




<style>
body {
  background-color: #22254b;;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #121212;
    display: flex;
    justify-content: space-evenly;
    /* flex-direction: column; */
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
  }

  button {
    margin-left: 5px;
  }
</style>
