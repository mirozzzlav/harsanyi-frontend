
import Ajaxable from '../mixins/Ajaxable'
import contentDefaults from '../config/contentDefaults.json'
import deepmerge from 'deepmerge';

const ContentManager = {
  name: 'ContentManager',
  mixins: [Ajaxable],
  props: [
      "staticpg"
  ],
  data: function() {
      return {
          content: null,
          contentLoaded: false
      }
  },
  methods: {
    sanitizeContent: function(content) {
        Object.values(content).forEach((contentBlock) => {
            Object.values(contentBlock).forEach((contentBlockData) => {
                if (contentBlockData.visible === undefined) {
                    contentBlockData.visible = true;
                }
            });
        });
        return content;
    } 
  },
  created: function() {
    this.content = this.sanitizeContent(contentDefaults);
    
    if(this.staticpg) return;

    this.getAjaxDelayed(
        'custom-api/v2/get-content-settings',
        (response) => {
            let {data} = response;
            data = this.sanitizeContent(data);
            const overwriteMerge = 
                (destinationArray, sourceArray) => sourceArray

            this.content = deepmerge(this.content, data, {arrayMerge:overwriteMerge });
            this.contentLoaded = true;
        }
    );
  }
}

export default ContentManager;
