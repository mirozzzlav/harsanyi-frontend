<script>
import contentData from '../config/content.json';
export default {
  name: 'ContentBase',
  data: function() {
    return {
        content: {

        }
    };
  },
  props: {
      id: String
  },
  methods: {
      
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
      if (!contentData[this.id]) {
          return;
      }
      this.content = contentData[this.id];
      
      Object.values(this.content).forEach(
        (val) => {
          if (val.visible === undefined) {
              val.visible = true;
          }
      })
  }
}
</script>