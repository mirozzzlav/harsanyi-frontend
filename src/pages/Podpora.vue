<template>
  <div id="podpora">
        <bigButtons/>
        <textContent :page-slug="'o-nadacii'" v-if="links[0].active"/>
        <textContent :page-slug="'podporte-nas'" v-if="links[1].active"/>
        
  </div>  
</template>

<script>

import BigButtons from '../components/BigButtons';
import SupportLinkHelper from '../mixins/SupportLinkHelper';
import TextContent from '../components/TextContent';

export default {
  name: 'Podpora',
  mixins: [SupportLinkHelper],
  components: {
    BigButtons, TextContent
  },  
  props: {
    
  },
  created: function() {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
