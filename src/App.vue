<template>
  
  <div :style="{paddingTop: mainPaddingTop}">
    <header ref="header" :class="{'fixed' : headerFixed, 'tiny-downwards-shadow': showHeaderShadow}" id="main-header">
      <b-navbar toggleable="lg" id="main-navbar" class="container-type1 vertical-space">
        <b-navbar-brand :to="{name: menuItems.home.name}"></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="my-0 vertical-flex" is-nav>
          <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{name: menuItems.about.name}" class="mr-3" right >
                {{menuItems.about.skname}}
                </b-nav-item>
              <b-nav-item :to="{name: menuItems.stefan.name}" class="mr-3" right>
                {{menuItems.stefan.skname}}
              </b-nav-item>
              <b-nav-item :to="getSupportLink(0)" class="mr-3" right
                v-bind:class="{customactive: isCustomActive(menuItems.support.path)}">
                {{menuItems.support.skname}}
              </b-nav-item>
              <!--<b-nav-item :to="{name: menuItems.weHelped.name}" class="mr-3" right>
                {{menuItems.weHelped.skname}}
              </b-nav-item>-->
              <b-nav-item :to="{name: menuItems.contact.name}" class="mr-3" right>
                {{menuItems.contact.skname}}
              </b-nav-item>
          </b-navbar-nav>    
        </b-collapse>
      </b-navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer id="main-footer">
      <section id="main-footer-content-wrapper">
        <div id="main-footer-content" class="container-type1">
          <router-link :to="{name: menuItems.protection.name}">
            {{menuItems.protection.skname}}
          </router-link>
          <span>&nbsp;|&nbsp;</span>
          <router-link :to="{name: menuItems.contact.name}">
            {{menuItems.contact.skname}}
          </router-link>
          <br/>
          Všetky práva vyhradené, legálna vetička, prosím dotať.
        </div>
      </section>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import SupportLinkHelper from './mixins/SupportLinkHelper'
import ConfigHelper from './mixins/ConfigHelper'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  name: 'App',
  mixins: [SupportLinkHelper, ConfigHelper],
  props: ['headerFixed'],
  data: function() {
    return {
      'headerHeight': null,
      'windowScrollY': 0
    }
  },
  computed: {
    mainPaddingTop: {
      get: function () {
        return this.headerHeight === 'auto' ? '0px' : this.headerHeight + 'px';
      },
      set: function (val) {
        if (!this.headerFixed) {
          this.headerHeight = 'auto';
          return;
        }
        this.headerHeight = val;
      }
    },
    showHeaderShadow: function() {
      if (this.headerFixed && this.windowScrollY > 10) {
        return true;
      }
      return false;
    }
  },
  watch: {
    $route: function() {
      
    }
  },
  methods: {
    isCustomActive: function(linkPath) {
      return this.$route.path.indexOf(linkPath) !== -1;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.mainPaddingTop = this.$refs['header'].offsetHeight;
      
      window.addEventListener("resize", () => {
        this.mainPaddingTop = this.$refs['header'].offsetHeight;
      });
      this.windowScrollY = window.scrollY
      window.addEventListener('scroll', () => {
        this.windowScrollY = window.scrollY
      });
    });
  }
}
</script>

<style lang="scss" scoped>
@import 'scss/app';
</style>>
