### 父传子props

在``src/components``文件夹下创建hello.vue组件

```vue
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
```



app.vue

```vue
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
```



### 子传父$emit

app.vue

```vue
<script>
import hello from "@/components/hello.vue";
import {defineComponent} from "vue";

export default defineComponent({
    components:{
        hello
    },
    methods:{
        receive(message){
            console.log(message)
        }
    }
})
</script>
<template>
  <hello @message="receive"></hello>
</template>
```



子组件

```vue
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
```

