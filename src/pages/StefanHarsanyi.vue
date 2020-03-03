<template>
  <div id="stefan">
    <harsanyi id="stefanHarsanyi1" />
    
    <div class="stefan-outer">
      <textContent :page-slug="'stefan-harsanyi'" />
    </div>


  </div>
</template>

<script>
import Harsanyi from '../components/Harsanyi';
import TextContent from '../components/TextContent';

export default {
  name: 'StefanHarsanyi',
  components: {
    Harsanyi,
    TextContent
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
