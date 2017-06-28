<template>
	<div class="col-xs-3">
	
	<ul>
	<li><img :src="msg.images.small"/></li>
		<li>名字:{{msg.title}}</li>
		<li>类型:{{msg.genres}}</li>
		<li>年份:{{msg.year}}</li>
		<span>主演:</span>
		<li v-for='zhuyan in msg.casts' class="li">
		<img :src="zhuyan.avatars.small" id="img"/>{{zhuyan.name}}
		</li>

	</ul>
	</div>
</template>
<style type="text/css" scoped="scoped">
	div{
position: fixed;

overflow-y: scroll;
top: 50px;
right: 50px;
height: 750px;
text-align: center;
border: 1px solid #C0C0C0;
	}
	span{
		font-size: 22px;
		/*display:;*/
		text-align: left;
	}
	img{
		height: 200px;
		width: 180px;
		margin: 0 auto;
	}
li #img{
	height: 80px;
	width: 80px;
	border-radius: 50%;
}
.li{
	margin-top: 20px;
}
	ul{
		margin: 20px auto;
		display: flex;
		flex-direction: column;
	}
	ul li{
		font-size: 22px;
		text-align: left;
		margin-top: 20px;
	}
</style>
<script>
	export default {
	 props: ['msg']

	}

</script>