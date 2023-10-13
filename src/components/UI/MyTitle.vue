<template>
    <div class="title-block row mb-2">
        <div class="col-3">
            <h2 class="title-block__title"><slot></slot></h2>
        </div>
        <div class="col-9">
            <div class="d-flex justify-content-end align-items-center h-100">
                <div class="title-block__line"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-title'
    }
</script>

<style lang="scss" scoped>
.title-block {

    &__title {
        text-transform: uppercase;
        font-size: 2em;
        font-weight: #2F2F2F; 
    }
    &__line {
        width: 100%;
        height: 1px;
        background-color: #2F2F2F;
    }
}
</style>