<script>

export default ({
    data(){
        return{
            message1:"模板语法",
            message2:"数据只渲染一次",
            message3:"<span style='color: blueviolet'>输出html语法</span>",
            message4:"输出纯文本语法",
            message5:"color:red",//绑定属性
            message6:"数据双向绑定"
        }
    }
})
</script>
<template>
  {{message1}}
  <p v-once>{{message2}}</p>
  <p v-html="message3"></p>
  <p v-text="message4"></p>
  <p v-bind:style="message5">绑定color属性</p>
  <input v-model="message6"> <br>
  {{message6}}
</template>
<style>

</style>