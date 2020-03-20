<template>
    <div class="container-type3 text-content">
        <div class="content-error" v-if="contentError">
            <b-icon icon='alert-triangle'></b-icon>
            Vyskytla sa chyba pri načítavaní stránky.
        </div>
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    name: "TextContent",
    props: {
        data: {
            type: Object,
        },
        contentError: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        content: function() {
            if (this.data.content !== undefined) {
                return this.data.content.rendered
            }
            
            return "";
        }
    }
}
</script>

<style lang="scss">

.text-content {
    padding-top: 4vw !important;
    padding-bottom: 4vw !important;
    font-size:1.1rem;
    line-height: 2;
    min-height: 300px;
    position: relative;
    * {
        font-family: "droid_serifregular", Georgia,Times, Times New Roman, serif; 
        font-weight: $font-weight-medium;
    }
    h1, h2, h3, h4, h5, h6 {
        color:$dark-brown;
        text-align: center;
        line-height: 1.4;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: $font-weight-medium;
    }
    a {
        color: $super-dark-brown;
        font-weight: $font-weight-thick;
        text-decoration: underline;
    }
    a:hover {
        text-decoration: underline;
        color: $super-dark-brown;
    }
    img {
        display: block;
        margin: 2rem auto;
        width: 100%;
        min-width: 250px;
    }
    .content-error {
        text-align: center;
        > .b-icon {
            font-size: 2rem;
            margin-top: -5px;
            vertical-align: middle;
        }
    }
    
    .wp-block-media-text {
        margin: 2rem 0 1rem 0;
        .wp-block-media-text__content {
            > h2,h3,h4,h5,h6 {
                text-align: left;
            }
        }
        .wp-block-media-text__media {
            >img {
                display: block;
                margin:0;
            }
        }
        &.has-media-on-the-right {
            .wp-block-media-text__content {
                padding: 0 0 0 0;
                margin-bottom: 1rem;
            }
        }
    }
    @include media-breakpoint-up(sm) {
        .wp-block-media-text {
            display: flex;
            flex-direction:row;
            align-items: flex-start;

            .wp-block-media-text__content {
                width: 40%;
                
            }
            .wp-block-media-text__media {
                width: 60%;
            }
            
            &.has-media-on-the-right {
                flex-direction: row-reverse;
                .wp-block-media-text__content {
                    padding: 1rem 1rem 1rem 0;
                }
            }
        }
    
    }
}

</style>