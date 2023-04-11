<script>
export default {
    methods:{
        send(){
            this.$emit('message',"我是子组件")
        }
    }
}
</script>
<template>
  <button @click="send()">获取子组件数据</button>
</template>