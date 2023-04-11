<script>
import {defineComponent} from "vue";
import Hello from "@/components/hello.vue";

export default defineComponent({
    components:{
        Hello
    },
    data(){
        return{
            name:'steam-404'
        }
    },
    props:[
        'name'
    ]
})
</script>
<template>
  <Hello :name="name"></Hello>	//向组件传入数据
</template>