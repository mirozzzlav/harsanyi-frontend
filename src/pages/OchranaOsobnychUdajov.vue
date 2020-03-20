<template>
  <div id="ochrana-osobnych-udajov">
    <div class="onadacii-outer">
      <loadable :link="'wp/v2/pages?slug=ochrana-osobnych-udajov&status=publish'">
          <template slot-scope="slotData">
            <textContent :data="slotData.data ? slotData.data[0] : {}"></textContent>
          </template>
      </loadable>
    </div>
  </div>  
</template>

<script>

import TextContent from '../components/TextContent';
import Loadable from '../components/Loadable';

export default {
  name: 'OchranaOsobnychUdajov', 
  components: {
    TextContent,
    Loadable
  },
  data: function() {
    return {
    };
  },
  props: {
    
  },
  created: function() {
    
  },
  methods: {

  }
}
</script>
