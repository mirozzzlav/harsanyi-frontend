<template>
  <div id="home">
    <harsanyi id="homeHarsanyi1" />
    <bigButtons :links="true" />
    <numbers />
    <mediaCarousel />
    
  </div>  
</template>

<script>
import Harsanyi from '../components/Harsanyi';
import BigButtons from '../components/BigButtons';
import Numbers from '../components/Numbers';
import MediaCarousel from '../components/MediaCarousel'

export default {
  name: 'Home',
  components: {
    Harsanyi,
    BigButtons,
    Numbers,
    MediaCarousel
  },
  data: function() {
    return {
    };
  },
  props: {
    
  },
  watch: {
    $route: {
        immediate: true, 
        handler: function() {
          // on route change
        }, 
    },
  },
  created: function() {
    
  },
  methods: {

  }
}
</script>
