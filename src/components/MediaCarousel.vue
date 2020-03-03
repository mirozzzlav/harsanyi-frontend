<template>
    <div class="carousel-container">
        <div class="container-type2 vertical-space">
            <h2>Pomohli sme</h2>

            <div class="spinner-container" v-if="ajaxLoading">
                <b-spinner label="Loading..."></b-spinner>
            </div>

            <carousel v-bind="carousel" v-if="items" :perPageCustom="[[300,1],[500, 2], [768, 3], [1024, 4]]">
                <slide v-for="item in items" v-bind:key="item.id">
                    <img v-bind:src = "item.first_img.src" v-bind:alt = "item.post_title"/>
                    <h4 class="img-title">{{item.post_title}}</h4>
                    <div class="img-desc">{{item.post_content}}</div>
                </slide>
            </carousel>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';  // optional style for arrows & dots
import Ajaxable from '../mixins/Ajaxable';

export default {
  name: 'MediaCarousel',
  mixins: [Ajaxable],
  components: {
      Carousel,
      Slide
  },
  data: function() {
    return {
        carousel: {

        },
        items: null,
    };
  },
  props: {
  },
  methods: {
  },
  watch: {
    $route: {
        immediate: true,
        handler: function() {
            this.getAjaxDelayed(
                `${process.env.VUE_APP_APIURL}custom-api/v2/get-posts/pomohlisme`,
                (response) => {
                    const {data} = response;
                    this.items = data.items;
                }
            );
        }
    },
  },

}
</script>
<style lang="scss">
.VueCarousel .VueCarousel-slide {
    margin: 0 0.5rem 0 0;
    word-wrap: none;
    word-break: normal;
    img {
        width: 100%;
        min-width: 10rem;
        height: auto;
    }
    .img-title {
        font-family: 'droid_serifregular', serif;
        font-size: 1.4rem;
        margin:0.8rem 0 0.4rem 0;
        padding: 0;
        text-align: center;
        color:$dark-brown;
        font-weight: $font-weight-medium;
    }
    .img-desc {
        font-family: 'droid_serifregular', serif;
        color:$dark-brown;
        font-size: 1rem;
        line-height: 1.4;
        text-align: center;
        padding: 0 1rem;
        font-weight: $font-weight-light;
        max-height: 7rem;
        overflow: hidden;
    }
}
.VueCarousel :last-child.VueCarousel-slide {
    margin: 0;
}
.VueCarousel-pagination {
    .VueCarousel-dot {
        height: 0.2rem !important;
        width: 0.2rem !important;
        background: $light-brown !important;
        border: none !important;
        outline: none !important;
        margin: 0 0.30rem;
        transition: all .2s ease-in-out;
    }
    .VueCarousel-dot:hover {
        transform: scale(1.15);
    }
    .VueCarousel-dot--active {
        background: $super-dark-brown !important;
    }
}


.carousel-container {
    position: relative;
    margin-bottom: 2rem;
    min-height: 20rem;
}
.carousel-container h2 {
    text-align: center;
    font-weight: $font-weight-medium;
    color:$dark-brown;
    text-transform: uppercase;
    margin: 1rem 0 3rem 0;
}

</style>
