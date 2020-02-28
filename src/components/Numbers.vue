<template>
    <div class="numbers-outer">
        <div class="container-type1 numbers">
            <div class="row">
                <div class="col col-12 col-md-6">
                    <div class="projects-count numbers-value">
                        1 678
                    </div>
                    <div class="numbers-label">
                        PODPORENÝCH PROJEKTOV
                    </div>
                </div>
                <div class="col col-12 col-md-6">
                    <div class="donation-value numbers-value">
                        2 236 768 €
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
export default {
    name: "Numbers"
}
</script>

<style scoped lang="scss">
.numbers-outer {
    background-color: $gray;
}
.numbers {    
    color:#f8f4e3;
}
.numbers .col {
    text-align: center;
    padding: 1.5rem 0;
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