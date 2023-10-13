<template>
    <div class="navbar">
        <my-button
            @click="$router.push('/')"
            class="btn btn-danger me-2" 
            type="button"
        >На главную</my-button>
        <my-button
            @click="$router.push('/public')"
            class="btn btn-danger me-2" 
            type="button"
        >Резюме</my-button>
        <my-button
            @click="$router.push('/protected')"
            class="btn btn-danger me-2" 
            type="button"
        >Личный кабинет</my-button>
        <AuthorizedPanel v-if="isAuthorization"></AuthorizedPanel>
    </div>
</template>

<script>
    import AuthorizedPanel from '@/components/AuthorizedPanel'


    export default {
        components: {
            AuthorizedPanel
        },
        data() {
            return {
                isAuthorization: this.getAuthorization(),
            }
        }, 
        methods: {
            getAuthorization() {
                console.log(isAuthorization)
                return this.$store.getters.isAuthorization
            },

        }

    }
</script>
MyButton

<style lang="scss" scoped>

.navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }



</style>