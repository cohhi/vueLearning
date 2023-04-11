<script>
import axios from 'axios'

export default {
    components: {
        axios
    },
    methods: {
        githubApi() {
            //请求方式,请求地址
            axios.get('https://api.github.com/users/steam-404', {}
            ).then(function (response) {
                console.log(response) //成功时返回
            }).catch(function (error) {
                console.log(error) //失败时返回
            })
        }
    }
}
</script>
<template>
    <button @click="githubApi()">发送请求</button>
</template>