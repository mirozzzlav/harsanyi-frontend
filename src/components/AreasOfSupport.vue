<template>
    <div class="areas-outer">
        <div class="container-type4">
            <h2 class="areas-hl">Oblasti podpory</h2>
            <div class="custom-row" v-for="(areaRow,indx) in content.root.content.arreasOfSupport" v-bind:key="indx">
                <div v-for="(area,j) in areaRow" v-bind:key="j">
                    <div class="icon-wrapper"></div>
                    <div class="content-wrapper">
                        <h3>{{area.hl}}</h3>
                        <p>{{area.desc}}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>    
</template>

<script>


import ContentBase from '../components/ContentBase';
export default {
    mixins: [ContentBase],
    name: "AreasOfSupport",
    data: function() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">
.areas-outer {
    font-family: 'droid_serifregular';
    padding: 6rem 0 6rem 0;
    .areas-hl {
        color:$dark-brown;
        text-align:center;
        font-weight: $font-weight-light;
        margin-bottom:4rem;
    }
    .custom-row > * {
        position: relative;
        text-align: center;
        > * {
            display: inline-block;
        }
        margin-bottom: 3rem;
        .content-wrapper {
            text-align: left;
            vertical-align: middle;
            width:24vw;
        }
        .content-wrapper > h3 {
            font-weight: bold;
            color: $dark-brown;
        }
        .content-wrapper > p {
            font-weight: $font-weight-medium;
            color: $dark-brown;
        }
        .icon-wrapper {
            vertical-align: middle;
            width:10vw;
            height:10vw;
            min-width: 100px;
            min-height: 100px;
            max-width: 120px;
            max-height: 120px;
            border:1px solid $dark-brown;
            border-radius: 50%;
            margin-right: 30px;            
        }
        
    }
}
@include media-breakpoint-down(sm) {
    .areas-outer {
        .custom-row > * {
            > * {
                display:block;
            }
            > .icon-wrapper {
                margin-bottom: 10px;
                margin-left: auto;
                margin-right: auto;
            }
            > .content-wrapper {
                width: auto;
                text-align: center
            }
        }
    }
}
@media (min-width: 2000px) {
    .areas-outer .content-wrapper {
        width:14vw !important;    
    }
}

</style>