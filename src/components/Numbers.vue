<template>
    <div class="numbers-outer">
        <div class="container-type4 numbers">
            <div class="custom-row">
                <div class="number-element">
                    <div class="projects-count numbers-value">
                        {{formatDecimal(supportedProjects)}}
                    </div>
                    <div class="numbers-label">
                        PODPORENÝCH PROJEKTOV
                    </div>
                </div>
                <div class="number-element">
                    <div class="donation-value numbers-value">
                        {{formatEuro(supportedProjectsValue)}}
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

import NumbersFormatter from '../mixins/NumbersFormatter';
import ContentBase from '../mixins/ContentBase';

export default {
    name: "Numbers",
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    computed: {
        supportedProjects: function() {
            return this.data && this.data.root.content.supportedProjects 
                ? this.data.root.content.supportedProjects : null;
        },
        supportedProjectsValue: function() {
            return this.data && this.data.root.content.supportedProjectsValue 
                ? this.data.root.content.supportedProjectsValue : null;
        }
    },
    mixins: [ContentBase, NumbersFormatter]
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


</style>