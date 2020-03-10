<template>
  <div  class="harsanyi-outer">
    <div class="harsanyi" v-bind:style="{height: content.root.style.height}" v-bind:class="content.root.class">
      
      <section class="main-block" v-if="content.mainBlock.visible">
          <h1 class="main-hl" v-html="content.mainBlock.content.title"></h1>
          <p>{{content.mainBlock.content.desc}}</p>
          <div class="stefan-label-small-screen">
            Štefan<br/>Harsányi<br/>
            <router-link :to="{name: this.configHelper.get('menuItems').stefan.name}" class="mr-3" right>
              viac
            </router-link>
          </div>
          
      </section>

      <div class="img-big-right-block" v-if="content.imgBigRightBlock.visible">
        <img src="../assets/harsanyi.png" alt="Harsanyi" />
        <div class="stefan-label">
          Štefan<br/>Harsányi<br/>
          <router-link :to="{name: this.configHelper.get('menuItems').stefan.name}" class="mr-3" right>
            viac
          </router-link>
        </div>
      </div>

      <div class="img-centered-block" v-if="content.imgCenteredBlock.visible">
        <img src="../assets/harsanyi.png" alt="Harsanyi" />
        <h1 class="main-hl stefan-hl" v-html="content.stefanHeadline.content.text" 
          vi-if="content.stefanHeadline.visible">
        </h1>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import ContentBase from '../components/ContentBase';

export default {
  name: 'Harsanyi',
  mixins: [ContentBase],
  data: function() {
    return {
    };
  },
  props: {
  },
  watch: {
    $route: {
        immediate: true, 
        handler: function() {
          // on route change
        }, 
    },
  }
}
</script>

<style scoped lang="scss">
.harsanyi-outer {
  background-color: #000;
}
.harsanyi {
    position: relative;
    display: flex;
}
.harsanyi .img-big-right-block {
  display: none;
}
.img-centered-block {
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  > img {
    display: block;
    width: auto;
    height: 100%;
    position: relative;
    margin: 0 auto;
  }
  .stefan-hl {
    position: relative;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    width: 16rem;
    padding: 0.5rem 0.5rem;
    background: rgba(255, 255, 255, 0.9);
    margin: 0 auto;
    top: -2.7rem;
  }
}
.harsanyi .main-block {
    align-self: center;
    margin: 2rem;
    > h1 {
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: $font-weight-medium;
    }
    > p {
      color: #c2c2c2;
      font-weight: $font-weight-medium;
    }
}

.stefan-label-small-screen, .stefan-label {
  color:#fff;
  text-transform: uppercase;
  font-weight: $font-weight-light;
  line-height: 1.2;
  > a { 
    color: $dark-brown;
    margin-top:0.2rem;
    display: inline-block;
  }
}
.stefan-label {
  position: absolute;
  right: 2rem;
  top:40%;
}

/*for bigger screens */
@include media-breakpoint-up(lg) {
  .img-centered-block {
      width: 100%;
      height: 100%;
      position: absolute;
      left:0;
      top:0;
      > img {
        display: block;
        height: 90%;
        width: auto;
        right:-10%;
        bottom:0;
        position: absolute;
        margin: 0;
      }
      .stefan-hl {
        position: absolute;
        background: none;
        top:50%;
        width: 20vw;
        left: -1rem;
        font-size:2.5vw;
        font-weight: $font-weight-medium;
        text-align: left;
      }
  }
  .harsanyi .main-block {
    width: 50%;
    overflow: hidden;
    > h1 {
      font-size: 2.2rem;
    }
  }
  .harsanyi .img-big-right-block {
    display: block;
    width: 50%;
    align-self: flex-end;
    > img {
      position: static;
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .stefan-label-small-screen {
    display: none;
  }
}

</style>
