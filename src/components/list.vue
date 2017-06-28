<template>
	<div id="cont" class="row">
		  <div class="col-xs-6 ">
		  	
		
		<ul>
			<h2>电影列表</h2>
			
			<li v-for='(item,i) in items' >
				
				<img :src='item.images.small' />
			<router-link to='/home/movie'><span @click='func(item)'>{{item.title}}</span></router-link><br>
			<span>年份:{{item.year}}</span><br>
			<span>类型:{{item.subtype}}</span>
			
			</li>
			<router-view :msg='ite'></router-view>
		</ul>
		  </div>
		
	</div>
</template>
<style scoped="scoped">
	#cont{
		position: relative;
		margin:  0 auto;
		/*background: #ccc;*/
		width: 70%;
	}
	ul{
	text-align: left;
	}
	.col-xs-6{
		min-width: 400px;
	}
	ul li{
		line-height: 50px;
		width:40vw ;
		height: 200px;
		list-style: none;
			border-bottom: 1px solid #ccc;
			background: none;
			font-size: 18px;
			margin-bottom: 20px;
	}
	ul h2{
		padding: 30px 0 ;
	}
	ul li img{
		width: 130px;
		height: 160px;
		float: left;
		margin-right: 50px;
	}
	ul li span{
		display: inline-block;

	}
a span{
				text-decoration: underline;
	}
</style>
<script>  
        export default {  
            data () {  
                return {  
                    items: [] ,
                   ite:''
                }  
            },  
            // 在组件创建完成时，执行的钩子函数  
            created (){  
                // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到了get方法  
                this.$http.get('/api/books').then((data) => {  
                    // 由于请求成功返回的是Promise对象，我们要从data.body.data拿到books数组  
                    console.log(data.body.data)
                    this.items = data.body.data;  
                })  
            },
            methods:{
            	
            	func:function(ev){
            		console.log("111111111111");
this.ite=ev;
            	}
            	
            }
        }  
    </script>  