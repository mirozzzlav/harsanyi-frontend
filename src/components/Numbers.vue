<template>
    <div class="numbers-outer">
        <div class="spinner-container" v-if="ajaxLoading">
                <b-spinner label="Loading..."></b-spinner>
            </div>
        <div class="container-type1 numbers">
            <div class="custom-row">
                <div class="number-element">
                    <div class="projects-count numbers-value">
                        {{supportedProjects}}
                    </div>
                    <div class="numbers-label">
                        PODPORENÝCH PROJEKTOV
                    </div>
                </div>
                <div class="number-element">
                    <div class="donation-value numbers-value">
                        {{supportedProjectsValue}}
                    </div>
                    <div class="numbers-label">
                        HODNOTA PODPORY
                    </div>
                </div>
            </div>
        </div>
    </div>   
    
</template>

<script>
import Ajaxable from '../mixins/Ajaxable'
export default {
    name: "Numbers",
    data: function() {
        return {
            supportedProjects: '-',
            supportedProjectsValue:'-',
        }
    },
    mixins: [Ajaxable],
    watch: {
        $route: {
            immediate: true,
            handler: function() {
                this.getAjaxDelayed(
                    `${process.env.VUE_APP_APIURL}custom-api/v2/get-support-values`,
                    (response) => {
                        const {data} = response;
                        this.supportedProjects = data.supported_projects;
                        this.supportedProjectsValue = data.supported_projects_value + ' €';
                    }
                );
            }
        },
    }
}
</script>

<style scoped lang="scss">
.numbers-outer {
    position: relative;
    background-color: $gray;
    border-bottom: 3px solid $dark-gray;
}
.numbers {    
    color:#f8f4e3;
}
.numbers .number-element {
    text-align: center;
    padding: 4rem 0;
}
.numbers .numbers-value {
    font-size: 2.8em;
    font-weight: $font-weight-medium;
}
.numbers .numbers-label {
    font-size: 1.2rem;
    font-weight: $font-weight-light;
}

@include media-breakpoint-up(lg) {
    .numbers .numbers-value {
        font-size: 3.5rem;
    }
    .numbers .col {
        padding: 3.5rem 0;
    }
}
.spinner-container {
    color:$dark-gray;
}

</style>