<template>
    <div class="protected-container mb-5">
<!-- 
        <div class="card card-body m-5">
            <div class="row">
              <div class="col-md-4 col-xl-3">
                  <input type="text" class="form-control product-search ps-5" id="input-search" placeholder="Search Contacts...">
                  <i class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
              </div>
              <div class="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                <button 
                    @click="loadMore" 
                    class="btn btn-secondary d-flex align-items-center">
                Add Contact </button>
                <button 
                
                    class="btn btn-danger d-flex align-items-center">
                Clear LIst </button>
              </div>
            </div>
        </div> -->
        
        <div class="card card-body my-5">
            <table class="table table-nowrap">
                <thead>
                    <tr>
                        <th>User</th>   
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <transition-group name="user-list">
                        <ItemCard 
                            v-for="user in this.$store.state.users"
                            :key="user.email"
                            :user="user" 
                        />
                    </transition-group>
                </tbody>
            </table>
        </div>
        <div class="d-flex">
            <button 
                @click="loadMore" 
                class="btn btn-secondary btn-green">
            Add Contact </button>
        </div>
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
    mounted() {
        this.checkUser();
    },
    data() {
        return {
            users: this.$store.state.users,
        };
    },

    methods: {
        loadUsers() {
            return this.$store.state.users;
        },
        getUser() {
            this.$store.dispatch('fetchUsers');
        },
        checkUser() {
            if(this.users.length === 0) {
                this.$store.dispatch('fetchUsers');
            } 
        },
        loadMore() {
            this.$store.dispatch('loadMore');
        },
        logout() {
            this.updateVariable();
            window.localStorage.removeItem('token')
            this.$router.push('/');
        },
        updateVariable() {
            this.$store.dispatch('updateVariableAuthorization', false);
        },
        removeItem() {

        }
    },
    components: {
        ItemCard,
    },
};
</script>

<style lang="scss" scoped>
.user-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .user-list-enter-active,
  .user-list-leave-active {
    transition: all 1s ease;
  }
  .user-list-enter-from,
  .user-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .card {
    border: none;
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  }

  .btn-green {
    background: #87bb50;
    border: none;
    &:hover {
        background: #87bb50e1;
    }
}
</style>