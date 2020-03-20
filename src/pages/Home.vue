<template>
  <div id="home">
    <loadable :data-loaded="!ajaxLoading">
      <template>
        <harsanyi :content="content.homeHarsanyi1" />
      </template>
    </loadable>

    <bigButtons :links="true" />
    <loadable :data-loaded="!ajaxLoading">
      <template>
        <areasOfSupport :content="content.areasOfSupport1" />
      </template>
    </loadable>
    
    <loadable :data-loaded="!ajaxLoading" :spinner-css-class="'white'">
          <template>
            <numbers :data="content.homeNumbers1"/>
          </template>
    </loadable>
    
    <!-- <mediaCarousel /> -->
    
  </div>  
</template>

<script>
import Harsanyi from '../components/Harsanyi';
import BigButtons from '../components/BigButtons';
import AreasOfSupport from '../components/AreasOfSupport';
import Numbers from '../components/Numbers';
//import MediaCarousel from '../components/MediaCarousel'
import ContentManager from '../mixins/ContentManager'
import Loadable from '../components/Loadable';

export default {
  name: 'Home',
  mixins: [ContentManager],
  components: {
    Harsanyi,
    BigButtons,
    AreasOfSupport,
    Numbers,
    Loadable
    //MediaCarousel
  }
}
</script>
