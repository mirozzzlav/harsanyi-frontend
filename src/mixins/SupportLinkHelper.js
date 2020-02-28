import configHelper from '../modules/configHelper';
export default {
    data: function() {
      return {
        links: [

        ]
      }
    },
    methods: {
        initLinks: function() {
            var indx = 0;
            var _this = this;
            let configSupportLinkArgs = this.configHelper.get('menuItemsArgs')['support'];

            configSupportLinkArgs.forEach(
                () => {
                    let link = {
                        link: this.getSupportLink(indx),
                        slug: this.getSupportLinkSlug(indx),
                        active: false,
                        skname: this.getSupportLinkSkName(indx)
                    }
    
                    _this.links[indx] = link;
                    indx++;
                }    
            )
        },
        getSupportLink(argIndex) {
        
            let menuItem = configHelper.get('menuItems')['support'];
            if (menuItem === undefined) {
                return '';
            }
            if (menuItem.queryString === undefined) {
                return menuItem.path || '';
            }
            
            let tmpQureyString = menuItem.queryString.match(/([^:]*):[^/\s]+$/);
               
            if (tmpQureyString[1] !== undefined) {
                let tmpArgs = configHelper.get('menuItemsArgs')['support'];
                let argValue = '';
                if (tmpArgs !== undefined && tmpArgs[argIndex] !== undefined) {
                    argValue = tmpArgs[argIndex].slug
                }
    
                return menuItem.path + tmpQureyString[1] + argValue;
            }

            return menuItem.path || '';
        },
        getSupportLinkParam(argIndex, paramName) {
            let tmpArgs = configHelper.get('menuItemsArgs')['support'];
            
            if (tmpArgs !== undefined && tmpArgs[argIndex] !== undefined) {   
                return tmpArgs[argIndex][paramName];
            }
            return '';

        },
        getSupportLinkSkName(argIndex = 0) {
            return this.getSupportLinkParam(argIndex, 'skname');
        },
        getSupportLinkSlug(argIndex = 0) {
            return this.getSupportLinkParam(argIndex, 'slug');
        }
    },
    computed: {
    },
    watch: {
        $route: {
            immediate: true, 
            handler: function() {
                
                if (!this.links || this.links.length === 0) {
                    this.initLinks();
                }

                this.currentAction = this.$route.params.action;
                this.links.forEach((linkData) => {
                    linkData.active = false;
                    if (linkData.slug === this.currentAction) {
                        linkData.active = true;
                    }
                });
                this.$forceUpdate();
            }, 
        },
    }
    

  }