<template>
    <div class="navbar">
        <div>
            <router-link v-if="!checkAuthorization" class="me-2 navbar__link" to="/">authorization </router-link>
            <router-link class="me-2 navbar__link" to="/public">Summary</router-link>
            <router-link
                class="me-2 navbar__link"
                v-if="checkAuthorization"
                to="/protected"
            >User list</router-link>
        </div>
        <div v-if="!checkAuthorization">unauthorized user</div>
        <AuthorizedPanel v-if="checkAuthorization"></AuthorizedPanel>
    </div>
</template>

<script>
    import AuthorizedPanel from '@/components/AuthorizedPanel'

    export default {
        components: {
            AuthorizedPanel,
        },
        computed: {
            checkAuthorization() {
                return this.$store.state.isAuthorization;
            },
        },
    }
</script>

<style lang="scss" scoped>

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #2F2F2F;
        height: 60px;
        &__link {
            font-size: 20px;
            color: #2F2F2F;
            text-decoration: none;
            &:hover {
                opacity: .6;
            }
        }
    }



</style>