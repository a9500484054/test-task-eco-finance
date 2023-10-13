<template>
    <div class="user-panel">
        <div class="user-panel__img me-1">
            <i class="ri-user-fill fs-18"></i>
        </div>
        <div class="d-flex align-items-center">
            <div class="user-panel__name me-1">User authorized</div>
            <my-button
                class="btn text-danger"
            >
                <i class="ri-logout-box-line"></i>
            </my-button>
        </div>
    </div>
</template>

<script>
    import AuthorizedPanel from '@/components/AuthorizedPanel'
    export default {
        components: {
            AuthorizedPanel
        }, 
    }
</script>

<style lang="scss" scoped>
.user-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #b2afaf;
        border-radius: 50px;
        width: 2em;
        height: 2em;
        font-size: 1em;
    }
    &__wrapper {

    }
    &__name {

    }
    &__role {
        display: inline-block;
        padding: 5px 10px;
        font-size: 0.5rem;
        font-weight: 400;
        line-height: 1;
        color :#fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 4px;
        background-color: rgba(83,155,255 ,1);
    }

}
</style>