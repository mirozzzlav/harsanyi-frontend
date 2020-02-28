<template>
  <div id="podpora">
        <bigButtons/>
        <weHelpedForm v-if="links[0].active" />
        <supportUs v-if="links[1].active" />
  </div>  
</template>

<script>

//import TextContent from '../components/TextContent';
import BigButtons from '../components/BigButtons';
import WeHelpedForm from '../components/WeHelpedForm';
import SupportUs from '../components/SupportUs'
import SupportLinkHelper from '../mixins/SupportLinkHelper';

export default {
  name: 'Podpora',
  mixins: [SupportLinkHelper],
  components: {
    BigButtons, SupportUs, WeHelpedForm,
  },  
  props: {
    
  },
  created: function() {
  },
  methods: {
  }
}
</script>
