<template>
  <div id="podpora">
        <bigButtons/>
        <loadable :link="'wp/v2/pages?slug=o-nadacii&status=publish'" v-if="links[0].active">
          <template slot-scope="slotData">
            <textContent :data="slotData.data ? slotData.data[0] : {}"></textContent>
          </template>
      </loadable>
      <loadable :link="'wp/v2/pages?slug=podporte-nas&status=publish'" v-if="links[1].active">
          <template slot-scope="slotData">
            <textContent :data="slotData.data ? slotData.data[0] : {}"></textContent>
          </template>
      </loadable>
  </div>  
</template>

<script>

import BigButtons from '../components/BigButtons';
import SupportLinkHelper from '../mixins/SupportLinkHelper';
import TextContent from '../components/TextContent';
import Loadable from '../components/Loadable';

export default {
  name: 'Podpora',
  mixins: [SupportLinkHelper],
  components: {
    BigButtons, TextContent, Loadable
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
