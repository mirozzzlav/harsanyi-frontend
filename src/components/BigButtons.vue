<template>
    <div class="big-buttons">
        <div class="container-type1">
            <div class="row big-btns-row">
                <div class="col col-12 col-md-6" v-for="(link,indx) in links" v-bind:key="indx">
                    <router-link class="big-btn" :to="link.link"
                    v-bind:class="{'active': links[indx].active}">
                    {{link.skname}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SupportLinkHelper from '../mixins/SupportLinkHelper'
export default {
    name: "BigButtons",
    mixins: [SupportLinkHelper],
}
</script>

<style scoped lang="scss">
.big-buttons   {
    background: $dark-brown;
    font-weight: $font-weight-medium;
}
.big-btns-row {
     > * {
         border-top: 1px solid #d8d8d8;
     }
     :first-child {
         border:none;
     }
}

.big-buttons .big-btn {
    text-align: center;
    background: $dark-brown;
    color: #fff;
    font-size: 1.5rem;
    line-height: 3rem;
    text-transform: uppercase;
    padding: 0;
    margin: 1rem 0;
    border: none;
    font-weight: $font-weight-medium;
    width: 100%;
    display: block;
    cursor: pointer;
}
.big-buttons .row .col:last-child > .big-btn {
    border: none;
}

.big-buttons .big-btn:focus {
    outline: none;
}
.big-buttons .big-btn:hover, .big-buttons .big-btn.active {
  text-decoration: underline;
  color: #fff;
}
@include media-breakpoint-up(md) {
    .big-btns-row > * {
        border:none;
    }
    .big-buttons .big-btn {
        border-right: 1px solid #d8d8d8;
    }
}
</style>