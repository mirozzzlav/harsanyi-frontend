<template>
    <div class="big-buttons" v-bind:class="{'some-link-active': someLinkActive}">

        <div v-for="(link,indx) in links"  v-bind:key="indx" class="big-btn-outer">
            <router-link class="big-btn" :to="link.link"
            v-bind:class="{'active': links[indx].active}">
            <b-icon icon="chevron-compact-right"></b-icon>
            {{link.skname}}
            <b-icon icon="chevron-compact-left"></b-icon>
            </router-link>            
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
.big-buttons {
    background: $dark-brown;
    font-weight: $font-weight-medium;
    display: block;

    :last-child.big-btn-outer, :last-child.big-btn-outer > .big-btn{
        border: none;
    }
    .big-btn-outer {
        padding: 1rem 0;
        border-bottom: 1px solid #d8d8d8;
    }
    .big-btn {
        background: $dark-brown;
        display: block;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 1.5rem;
        line-height: 3rem;
        text-transform: uppercase;
        
        font-weight: $font-weight-medium;
        cursor: pointer;
        transition: all .2s ease-in-out;
        > * {
            color: $light-brown;
            display: none;
        }
    }
    
    &:hover, &.some-link-active {
        .big-btn {
            color:$light-brown;
        }
    }
    .big-btn:focus {
        outline: none;
    }
    .big-btn:hover, .big-btn.active {
        color: #fff;
        text-decoration: none;
    }
    .big-btn.active > * {
        display: inline;
    }

} 

@include media-breakpoint-up(md) {
    .big-buttons {
        display: flex;
        flex-direction: row;

        .big-btn-outer {
            width: 50%;
            border: none;
        
            .big-btn {
                border-right: 1px solid #d8d8d8;
            }
        }
    }
}
</style>