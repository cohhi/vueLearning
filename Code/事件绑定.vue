<script>
export default {
    // 自定义方法
    methods: {
        click() {
            alert("单击事件")
        },
        dbclick() {
            alert("双击事件")
        }
    }
}
</script>
<template>
    <button v-on:click="click">click (v-on)</button>
    <button @click="click">click (@click)</button>
    <button @click="dbclick">dbclick (@dbclick)</button>
</template>
<style>

</style>