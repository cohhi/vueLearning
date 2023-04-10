### 局部引入

在`components`下新建iku.vue组件,写入以下内容

```vue
<template>
  <p>哎呦,你~干~嘛~!</p>
</template>

<script>
export default {
    name: "ikun"
}
</script>

<style scoped>
p{
    color: green;
}
</style>
```

在app.vue中导入并使用

```vue
<script>
import {defineComponent} from "vue";
import Ikun from "@/components/ikun.vue";

export default defineComponent({
    components: {Ikun}
})

</script>
<template>
    <ikun></ikun>
</template>
```

