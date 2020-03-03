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
import Ajaxable from '../mixins/Ajaxable';

export default {
    name: "SupportUs",
    props: ['pageSlug'],
    mixins: [Ajaxable],
    methods: {
        getContent: function() {
            this.getAjax(
                `${process.env.VUE_APP_APIURL}wp/v2/pages?slug=${this.pageSlug}&status=publish`,
                (response) => {
                    console.log(this.pageSlug);
                    const {data} = response;
                    this.content = "";
                    this.contentError = false;
                    if (data === undefined || data[0] === undefined) {
                        this.contentError = true;
                        return;
                    }
                    this.content = data[0].content.rendered;
                }
            );

        }
    },
    data: function() {
        return {
            content: '',
            contentError: false
        }
    },
    watch: {
        $route: {
            immediate: true, 
            handler: function() { this.getContent() }
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
}

</style>