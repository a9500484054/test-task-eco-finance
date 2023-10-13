<template>
    <tr class="search-items">
        <td>
            <div class="n-chk align-self-center text-center">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input contact-chkbox primary" id="checkbox1">
                    <label class="form-check-label" for="checkbox1"></label>
                </div>
            </div>
        </td>
        <td>
            <div class="d-flex align-items-center">
                <img :src="user.picture.medium" alt="avatar" class="rounded-circle" width="35">
                <div class="ms-3">
                    <div class="user-meta-info">
                        <h6 class="user-name fs-5 mb-0">{{ user.name.first }} {{ user.name.last }}</h6>
                        <span class="user-work">Age: {{ user.dob.age }}</span>  
                        
                    </div>
                </div>
            </div>
        </td>
        <td>
            <span>{{ dob }}</span>
        </td>
        <td>
            <span>{{ user.email }}</span>
        </td>
        <td>
            <span>{{ user.location.state }}, {{ user.location.country }} </span>
        </td>
        <td>
            <span>{{ user.phone}}</span>
        </td>
        <td>
        <div class="">
            <my-button
                class="btn text-info"
            >
                <i class="ri-pencil-line fs-5"></i>
            </my-button>
            <my-button
                class="btn text-danger"
            >
                <i class="ri-close-circle-line fs-5"></i>
            </my-button>
        </div>
        </td>
    </tr>

</template>

<script>
import moment from 'moment'

export default {
        props: ['user'],
        data() {
            return {
                dob: moment(this.user.dob.date).format('LL')
            }
        },
        methods: {
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