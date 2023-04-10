安装:``npm install vue-router@4``

在src文件夹下新建``router.js``文件

```javascript
<!--创建路由-->
import {createRouter, createWebHashHistory} from 'vue-router'

//要跳转的页面
import message1 from "@/components/view/message1.vue";
import message2 from "@/components/view/message2.vue";

const routes = [
    {path: '/'},
    {path: '/message1', component: message1},
    {path: '/message2', component: message2},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
```



在``main.js``中导入

```javascript
import router from '@/router'
app.use(router)
```



``APP.vue``

```vue
<script>

</script>
<template>
  <div id="message">
      <p>
          <router-link to="/">首页</router-link>
          <router-link to="/message1">页面1</router-link>
          <router-link to="/message2">页面2</router-link>
      </p>
      <router-view>

      </router-view>
  </div>
</template>
```

