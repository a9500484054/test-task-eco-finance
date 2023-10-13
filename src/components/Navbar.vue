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
        <AuthorizedPanel v-if="checkAuthorization"></AuthorizedPanel>
    </div>
</template>

<script>
    import AuthorizedPanel from '@/components/AuthorizedPanel'
    import { mapGetters } from 'vuex';

    export default {
        components: {
            AuthorizedPanel,
        },
        computed: {
            ...mapGetters(['isAuthorized'])
        },
        data() {
            return {
                checkAuthorization: false,
            }
        }, 
        created() {
            this.checkAuthorization = this.getAuthorization();
            console.log(this.checkAuthorization);
            
        },
        methods: {
            getAuthorization() {
                return this.$store.getters.isAuthorized
            },

        }

    }
</script>

<style lang="scss" scoped>

.navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }



</style>