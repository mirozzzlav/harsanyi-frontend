<template>
  <div id="stefan">
    <harsanyi :content="content.stefanHarsanyi1" />
    
    <div class="stefan-outer">
      <loadable :link="'wp/v2/pages?slug=stefan-harsanyi&status=publish'">
          <template slot-scope="slotData">
            <textContent :data="slotData.data ? slotData.data[0] : {}"></textContent>
          </template>
      </loadable>
    </div>


  </div>
</template>

<script>
import Harsanyi from '../components/Harsanyi';
import TextContent from '../components/TextContent';
import ContentManager from '../mixins/ContentManager';
import Loadable from '../components/Loadable'

export default {
  name: 'StefanHarsanyi',
  mixins: [ContentManager],
  components: {
    Harsanyi,
    TextContent,
    Loadable
  }
}
</script>
