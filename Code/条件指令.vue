<script>
export default {
    data() {
        return {}
    }
}
</script>
<template>
  <!--  条件或返回值为true数据被渲染-->
    <p v-if="1+1===2">返回值为true</p>

  <!--  条件或返回值为false数据不会被渲染-->
    <p v-if="1+1===3">返回值为false</p>
  
  <!--  条件或返回值为true时显示-->
    <p v-show="true">v-show只能单独使用</p>
</template>
<style>

</style>