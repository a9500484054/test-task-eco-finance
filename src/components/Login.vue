<template>
    <div>
        <p> {{ myVariable }}</p>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card mt-4">

                    <div class="card-body p-4">
                        <div class="text-center mt-2">
                            <h5 class="text-primary">Create New Account</h5>
                            <p class="text-muted">Get your free velzon account now</p>
                        </div>
                        <div class="p-2 mt-4">

                                <div class="mb-3">
                                    <label for="useremail" class="form-label">Email <span class="text-danger">*</span></label>
                                    <my-input 
                                        id="email"
                                        v-model="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="password-input">Password</label>
                                    <div class="position-relative auth-pass-inputgroup">
                                        <my-input 
                                            id="password-input"
                                            v-model="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div class="text-danger text-center"> {{ error }}</div>
                                <div class="mt-4">
                                    <my-button
                                        @click="login"
                                        class="btn btn-danger me-2 w-100" 
                                        type="button"
                                    >Enter</my-button>
                                </div>

                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: '',
        };
    },
    methods: {
        async login() {
            // Проверьте введенные данные
            console.log(this.email)
            console.log(this.password)
            if (this.email === 'admin@example.com' && this.password === 'Qwerty12345') {
                try {
                    // Выполните запрос на сервер для получения списка пользователей
                    const response = await fetch('https://randomuser.me/api/?results=5');
                    console.log(response);
                    const data = await response.json();

                    localStorage.setItem('token', 'z42Kk4?Ii!sEUVd5p/CiIWIZmer-cl33DCG-Pi/OlJtrmrNontWb!XXLrWclsY1L');
                    // Сохраните полученные данные в хранилище или передайте их в другой компонент
                    // this.$store.commit('setUsers', data.results);
                    // Перенаправьте пользователя на защищенную страницу
                    this.updateVariable()
                    this.$router.push('/protected');
                } catch (err) {
                    console.error('Ошибка при получении списка пользователей', err);
                    this.error = 'Произошла ошибка. Пожалуйста, попробуйте еще раз.';
                }
            } else {
                this.error = 'Неверные имя пользователя или пароль.';
            }
        },
        updateVariable() {
            this.$store.dispatch('updateVariableAuthorization', true);
        },
    },
};
</script>

<style lang="scss" scoped>

</style>