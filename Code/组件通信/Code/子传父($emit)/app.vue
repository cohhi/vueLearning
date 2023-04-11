<script>
import message from "@/components/message.vue";
import {defineComponent} from "vue";

export default defineComponent({
    components:{
        message
    },
    methods:{
        receive(message){
            console.log(message)
        }
    }
})
</script>
<template>
  <message @message="receive"></message>
</template>