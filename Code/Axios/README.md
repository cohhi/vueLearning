### [Axios 中文文档 ](https://www.axios-http.cn/)

- 安装

  ```shell
  npm install axios
  ```

  

- 全局挂载

  ```javascript
  //在main.js中实现全局挂载
  
  import axios from 'axios' //导入axios
  
  
  createApp(App).use(axios).mount('#app')  //挂载方式1
  
  const app=createApp(App)	//挂载方式2
  app.use(axios)
  app.mount('#app')   
  ```

  

- 使用

  ```vue
  <script>
  import axios from 'axios'	//导入
  
  export default {
      components: {
          axios				//单页面挂载
      },
      methods: {
          githubApi() {
              //请求方式,请求地址
              axios.get('https://api.github.com/users/steam-404', {}
              ).then(function (response) {
                  console.log(response) //成功时返回
              }).catch(function (error) {
                  console.log(error) //失败时返回
              })
          }
      }
  }
  </script>
  <template>
      <button @click="githubApi()">发送请求</button>
  </template>
  ```

  

