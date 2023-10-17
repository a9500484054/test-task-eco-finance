<template>
    <tr class="search-items" @click="selectItem">
        <td>
            <div class="n-chk align-self-center text-center">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input contact-chkbox primary" :id="user.email">
                    <label class="form-check-label" :for="user.email"></label>
                </div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-center">
                <img :src="user.picture.medium" alt="avatar" class="rounded-circle" width="35">
                <div class="ms-3">
                    <div class="user-meta-info">
                        <h6 class="user-name fs-5 mb-0">{{ user.name.first }} {{ user.name.last }}</h6>
                        <span class="user-work">
                            <span v-html="checkGender(user.gender)"></span>
                            Age: {{ user.dob.age }}
                        </span>  
                        
                    </div>
                </div>
            </div>
        </td>
        <td>
            <span><i class="ri-calendar-line me-1"></i>{{ dob }}</span>
        </td>
        <td>
            <span><i class="ri-mail-line me-1"></i> {{ user.email }}</span>
        </td>
        <td>
            <span><i class="ri-map-pin-2-line me-1"></i> {{ user.location.state }}, {{ user.location.country }} </span>
        </td>
        <td>
            <span><i class="ri-phone-line  me-1"></i> {{ user.phone }}</span>
        </td>
        <td>
            <my-button
                @click="deleteItem"
                class="btn btn-danger"
            ><i class="ri-delete-bin-line"></i>
        </my-button>
        </td>
    </tr>

</template>

<script>
import moment from 'moment'
import MyButton from './UI/MyButton.vue'

export default {
  components: { MyButton },
        props: ['user'],
        data() {
            return {
                dob: moment(this.user.dob.date).format('LL')
            }
        },
        methods: {
            checkGender(gender) {
                return gender === "male" ? '<i class="ri-men-line me-1"></i>' : `<i class="ri-women-line me-1"></i>`
            },
            deleteItem() {
                this.$store.dispatch('removeUser', this.user);
            },
            selectItem(event) {
                if(!event.target.closest('.btn') && !event.target.closest('.form-check-input') ) {
                    // Получаем элемент флажка, используя его ID
                    const checkbox = document.getElementById(this.user.email);
                    // // Проверяем, установлен ли флажок или снят
                    const isChecked = checkbox.checked;
                    
                    // // Меняем состояние флажка
                    checkbox.checked = !isChecked;
                }

                
            }
        }
    }
</script>

<style lang="scss" scoped>

    tr  {
        display: table-row;
        vertical-align: middle;
    }

    td {
        border: none;
    }

</style>