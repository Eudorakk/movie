<template>
  <div id="app" class="row">
<ul class="col-xs-1" >
  		<li>	<router-link to='/home'>主页</router-link></li>
  			<li><router-link to='/about'>关于</router-link></li>
  </ul>
   <transition :name="transitionName">  
            <router-view></router-view>  
       </transition>
  </div>
</template>
<style scoped>
ul{
	position: fixed;
}
ul li{
	list-style: none;
	height: 50px;
	width: 100%;
	min-width: 100px;
	font-size: 22px;
	background:oldlace;
	margin-top: 5px;
	line-height: 50px;
	border: 1px solid #ccc;
}
</style>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script type="text/javascript">
	export default {
		data () {  
                return {  
                   transitionName:'slide' 
                }  
            },  
              watch: {  
        // 监视路由，参数为目标路由和当前页面的路由  
       //to---目标路由   form---当前页面路由
        '$route' (to, from){  
        	console.log(to);
        	console.log(from);
        	//to调用path可以得到目标路由路径，求子字符串，
            const toDepth = to.path.substring(0, to.path.length-2).split('/').length  ;
           
            // 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'  
            // 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥  
            // 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教  
            const fromDepth = from.path.substring(0, from.path.length-2).split('/').length  
             console.log("{{{{{"+toDepth);
                  console.log("}}}}}}}"+fromDepth);
            console.log("to  ---"+to.path.length);
               console.log("from___"+from.path.length);
       
            this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'  
            // 根据路由深度，来判断是该从右侧进入还是该从左侧进入  
        }  
      }  
	}
</script>
