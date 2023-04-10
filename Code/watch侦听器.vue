<script>
export default {
    data() {
        return {
            number: 10
        }
    },
    watch: {
        number(newValue, oldValue) {
            console.log('更新后的值:' + newValue)
            console.log('更新前的值:' + oldValue)
        }
    }
}
</script>
<template>
    <input v-model="number">
</template>