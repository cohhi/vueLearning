# vueLearning
### 创建vue3项目

```
npm init //初始化
npm create vue@latest //创建vue项目
cd vueProject 		//切换到项目
npm instal 	//安装依赖
npm run dev		//启动项目
```



### 目录结构

```
build 	项目构建(webpack)相关代码
config 	配置目录，包括端口号等。我们初学可以使用默认的。
node_modules 	npm 加载的项目依赖模块
src 	这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
    assets: 放置一些图片，如logo等。
    components: 目录里面放了一个组件文件，可以不用。
    App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
    main.js: 项目的核心文件。
    index.css: 样式文件。
static 	静态资源目录，如图片、字体等。
public 	公共资源目录。
test 	初始测试目录，可删除
.xxxx文件 	这些是一些配置文件，包括语法配置，git配置等。
index.html 	首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
package.json 	项目配置文件。
README.md 	项目的说明文档，markdown 格式
dist 	使用 npm run build 命令打包后会生成该目录。
```

### 指令

```
v-text		//将数字以纯文本方式填充到元素中
v-html		//数据将采用html语法填充
{{  }}		//在元素某一位置采用纯文本方式渲染数据
v-module	//双向数据绑定
	绑定<input>和<textarea>的value属性
	.number		//自动输入值转为数值
	.trim		//过滤开始和结尾的空白字符
	.lazy		//chage时才会更新
```





### 模板语法

```
{{  }}		//数据绑定
v-once		//屏蔽`{{  }}`语法
v-html		//输出html语法
v-text		//输出纯文本语法
v-bind		//属性绑定 v-bind:属性
v-module        //数据双向绑定
```



### 条件语句

```vue
v-if		//返回值为真的时候才会被渲染
v-else-if	//二次判断
v-else		//所有判断都不成立时才被渲染

v-show		//类似v-if,不能与v-else-if v-else使用
```



### 事件绑定指令

```vue
v-on:		//简写:@

@click		//点击事件
@dbclick	//双击事件
```



### 计算属性

```vue
# 一个数据需要通过另一些数据处理得到
computed:{
	值(){
		return 返回数值
	}
}
```



### 事件修饰符

```
.prevent	//消除默认行为
.stop		//阻止冒泡
.self		//只有event.tarhet是当前元素自身触发事件处理函数
.capture	//冒泡时先触发,如果有多个则由外向内触发
.once		//绑定的事件只触发一次
.passice	//向浏览器表明不想阻止事件的默认行为
```



### 按键修饰符

| 按键    | 触发时间   |
| ------- | ---------- |
| keydown | 按下时触发 |
| keyup   | 松开时触发 |

按键别名:

```
.enter		
.tab		
.delete		//包含delete和backspace
.esc		
.space		
.up			
.down		
.left		
.right		
```

### 鼠标按键修饰符

```
.left		//左键
.right		//右键
.middle		//滚轮键
```



### 列表渲染

```
v-for 
	v-for="新数组 in 源数组"		//渲染数组
	新数组.index		//索引
	新数组.key			//键
	新数组.value		//值
```



### 组件

组件需要注册才能使用`全局注册` `局部注册`

- 全局注册

  ```
  app.component(name,Component)
  	name 注册名
  	Component 注册组件
  ```

  

- 局部注册

  ```
  import login from './components/xxx.vue' //引入组件
  export default{
    components:{
      login:login							//挂载组件
    }
  }
  <login></login>							//使用组件
  ```

- 组件通信(prop)

- - 父传子	$props

    ```vue
    <script>
    import hello from './components/hello.vue'
    export default{
      components:{
        hello
      },
      data(){
        return{
          message:'富贵君'
        }
      }
    }
    </script>
    <template>
    <hello :name="message"></hello>
    </template>
    
    
    <script>
    export default{
        props:['name']
    }
    </script>
    <template>
        <p>你好:{{ name }}</p>
    </template>
    ```
  
  - 父组件访问子组件	$emit	$.refs
  
    ```
    ```
  
    

### 监听

```
如果数据发生变化就执行回调
```



### 组件通信



### 路由	https://router.vuejs.org/zh/

```
npm install vue-router@4

router-link		//链接 to路由地址
router-view		//将显示与 url 对应的组件

路由规则:
	path		//url
	name		//只想页面时显示的名字
	componen 	//路由调用时加载组件
	
重定向
	redirect
嵌套路由
	children
动态路由	
	
```





### Element UI	https://element-plus.gitee.io/zh-CN/

```
npm install element-plus --save
```

### View UI	https://www.iviewui.com/

```
npm install view-ui-plus --sace
```





### axios异步请求

```shell
npm install axios
```

- 配置项

  ```
  axios.post(
  	'请求地址'		
  	{ 请求的参数 }
  	{ 其他配置项 }
  )
  ```

- 实例

  ```
  import axios from 'axios'
  ```

- 响应数据

  ```
  .then(response=>{
  	response.data	//获取服务器返回的数据
  })
  .catch(error=>{
  	//请求失败的处理
  })
  ```

- 跨域

  ```
  在config.js添加proxy
  ```
  
  这是一个标准的get请求 `https://api.github.com`
  
  ```vue
  <template>
  <button @click="githubapi()">api.github.com请求</button>
  </template>
  <script>
  import axios from 'axios'
  export default{
      methods:{
          githubapi(){
              axios({
                  method:'get',
                  url:'https://api.github.com/'
              })
              .then(response=>{
                  console.log(response);
              })
          }
      }
  }
  </script>
  ```
  
  
