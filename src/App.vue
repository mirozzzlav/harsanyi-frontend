<template>
  <div>
    <header>
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
              <b-nav-item :to="{name: menuItems.weHelped.name}" class="mr-3" right>
                {{menuItems.weHelped.skname}}
              </b-nav-item>
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
      <section id="main-footer-content">
        Harsanyi Foundation<br />
        Okružná 5, 917 01 Trnava<br />
        Slovenská republika<br /><br />

        info@harfou.sk<br />
        www.harfou.sk<br /><br />

        IČO: 52212777<br />
        Reg. č.: 203/Na-2002/1204
      </section>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import SupportLinkHelper from './mixins/SupportLinkHelper'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  name: 'App',
  mixins: [SupportLinkHelper],
  data: function() {
    return {
      
    }
  },
  computed: {
    menuItems: function() {
      return this.configHelper.get('menuItems');
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
  }
}
</script>

<style lang="scss" scoped>
@import 'scss/app';
</style>>
