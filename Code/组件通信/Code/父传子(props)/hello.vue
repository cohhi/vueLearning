<script>
export default {
    name:'hello',	//组件名
    props:[
        'name'		//props接收的数据
    ]
}
</script>
<template>
  <p>Hello:{{name}}</p>
</template>