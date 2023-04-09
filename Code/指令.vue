<script>
export default ({
    data(){
        return{
            message1:"纯文本数据",
            message2:"<span style='color: red'>采用html语法填充</span>",
            message3:"{{}}语法，插值表达式",
            message4:"数据双向绑定"
        }
    }
})
</script>
<template>
  <p v-text="message1"></p>
  <p v-html="message2"></p>
  <p>{{message3}}</p>
  <input v-model="message4"> <br>
  {{message4}}
</template>
<style>
body{
    text-align: center;
}
p{
    display: block;
}
</style>