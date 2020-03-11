<template>
    <div class="gallery-outer">
        <div class="container-type1 vertical-space">
            <div class="spinner-container" v-if="ajaxLoading">
                <b-spinner label="Loading..."></b-spinner>
            </div>
            <div v-if="!ajaxLoading">
              <div class="row" v-for="(row, indx) in rows" v-bind:key="indx">
                  <div class="item-wrapper col-12" v-bind:class="'col-md-' + (12 / defaultGalleryCols)"
                      v-for="item in row" v-bind:key="item.id"
                  >
                      <img v-bind:src="item.imgs[0].src" v-bind:alt="item.post_tile"/>
                      <h4 class="item-title">{{item.post_title}}</h4>
                      <div class="item-desc">{{item.post_content}}</div>
                  </div>
              </div>

              <b-pagination v-model="currentPage" :total-rows="itemsCount"
                    :per-page="itemsPerPageGallery" first-number align="center" v-if="itemsCount > itemsPerPageGallery">
              </b-pagination>
            </div>
        </div>
    </div>

</template>

<script>
import Ajaxable from '../mixins/Ajaxable'
import ConfigHelper from '../mixins/ConfigHelper'

export default {
    mixins: [Ajaxable, ConfigHelper],
    name: "Gallery",
    data: function() {
        return {
          items: [],
          itemsCount: 0,
          currentPage: 1
        }
    },
    computed: {
        rows: function() {
            var rowNr = -1;
            var rows = [[]];

            this.items.forEach((item, indx) => {
                if (indx % this.defaultGalleryCols === 0) {
                  rowNr++;
                  rows[rowNr] = [];
                }

                rows[rowNr].push(item);
            });
            return rows;
        }
    },
    methods: {
      getGallery: function(pageNr) {

        let url = `${process.env.VUE_APP_APIURL}custom-api/v2/get-posts/pomohlisme/${pageNr}/${this.itemsPerPageGallery}`;
        this.getAjaxDelayed(
            url,
            (response) => {
                const {data} = response;
                this.items = data.items;
                this.itemsCount = data.items_count;
            }
        );
      }
    },
    watch: {
        $route: {
            immediate: true,
            handler: function() {
              this.getGallery(1);
            }
        },
        currentPage: function(curr) {
          this.getGallery(curr);
        }
    }
}
</script>

<style lang="scss">
.gallery-outer {
    background: none;
    min-height: 200px;
    position: relative;
}
.gallery-outer .item-wrapper {

  margin-bottom: 2rem;

  > img{
    width: 100%;
    max-width: 300px;
    display: block;
    margin: 0 auto 0rem auto;
  }
  .item-title {
        font-family: 'droid_serifregular', serif;
        font-size: 1.3rem;
        margin:0.8rem 0 0.4rem 0;
        padding: 0;
        text-align: center;
        color:$dark-brown;
        font-weight: $font-weight-medium;
    }
    .item-desc {
        font-family: 'droid_serifregular', serif;
        font-size: 1rem;
        line-height: 1.4;
        text-align: center;
        padding: 0 1rem;
        color:$dark-brown;
        font-weight: $font-weight-medium;
        max-height: 8.2rem;
        overflow-y: hidden;
    }
}

.gallery-outer {
  .pagination {
    margin: 3rem 0 2rem 0;
  }
  .page-item .page-link {
    color: $dark-brown;
    background-color:rgba(150, 105, 76, 0.05);
    border: none;
    font-weight: $font-weight-medium;
    font-size: 1.15rem;
  }
  .page-item.active .page-link {
    color: #fff;
    background-color: $dark-brown;
    font-weight: $font-weight-medium;
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
  .page-item.disabled .page-link {
    color: rgba(150, 105, 76, 0.3);
    background-color: rgba(150, 105, 76, 0.05);
  }
}


</style>
