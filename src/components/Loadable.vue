<template>
    <div class="loadable-container" :class="{'loading': !dataReady}">
        <div class="spinner-container" v-if="!dataReady" :class="spinnerCssClass">
            <b-spinner label="Loading..."></b-spinner>
        </div>
        <div class="loadable-content">
            <slot :data="data"></slot>
        </div>
    </div>   
</template>

<script>
import Ajaxable from '../mixins/Ajaxable'

export default {
    name: "Loadable",
    mixins: [Ajaxable],
    props: {
        spinnerCssClass: String,
        link: {
            type: String
        },
        dataLoaded: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            data: null,
            dataError: false
        }
    },
    computed: {
        dataReady: function() {
            if(this.link) {
                return this.data !== null;
            }
            return this.dataLoaded ? true : false;
        }
    },
    watch: {
        $route: {
            immediate: true, 
            handler: function() {
                if (!this.link) {
                    return;
                } 
                this.data = null;
                this.getAjaxDelayed(
                    this.link,
                    (response) => {
                        this.data = response.data || {};
                    }
                );
            }
        }
    }
}
</script>

<style scoped lang="scss">
.loadable-container {
    position: relative;
    min-height: 100px;
}
.loadable-content {
    transition: all 0.5s;
}
.loadable-container.loading >.loadable-content {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
}
.spinner-container {
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    top:0;
    left:0;
    color:$dark-brown;
    z-index: 99;
    /*background-color: rgba(255,255,255,0.85);*/
}
.spinner-container > * {
    position: relative;
    top: 50%;
    margin-top: -1rem;
    filter:blur(0);
}
.spinner-container.gray {
    color:$dark-gray;
}
.spinner-container.white {
    color:#fff;
}
</style>