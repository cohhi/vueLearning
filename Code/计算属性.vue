<script>
export default {
    data() {
        return {
            // 声明数据
            count1: 3,
            count2: 3
        }
    },
    computed: {
        sum() {
            // 求和
            return this.count1 + this.count2
        }
    }
}
</script>
<template>
    <input v-model="count1"> +
    <input v-model="count2"> =
  {{sum}}
</template>