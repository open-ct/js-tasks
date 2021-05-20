<template>
	<div id="app" class="max-h-screen">
		<img v-if="step==0" src="./assets/question.jpg" @click="()=>step=1"/>
		<div v-if="step>0">
			<div class="text-2xl text-left ml-24" v-if="step==1">（1）现有一碗红烧肉，它的温度为 30℃，需要冷藏保鲜，碗内温度越低冷藏效果越好。请同学们选择毛巾位置和水位高度，点击“试一试”，探究何种情况下冷藏效果最好。若已探究完成，请点击“下一步”。</div>
			<div class="text-2xl text-left ml-24" v-if="step==2">（2）经过探究，你认为：冷藏效果最好的毛巾位置水位高度</div>
			<div class="text-2xl text-left ml-24" v-if="step==3">（3）请结合小红探索的数据，分析毛巾在冷藏食物中的作用。作答完毕请点击“下一步”。</div>
			<div class="text-2xl text-left ml-24" v-if="step==4">（4）请结合小明探索的数据，分析水位在冷藏食物中的作用。作答完毕请点击“下一步”。</div>
			<div class="text-2xl text-left ml-24" v-if="step==5">（5）现在你认为：冷藏效果最好的毛巾位置水位高度</div>
			<div class="text-2xl text-left ml-24" v-if="step==6">（6）请根据第（5）题的作答，解释此种情况下冷藏效果最好的原因。</div>
			<textarea v-if="step==3||step==4||step==6" rows="3" cols="120" class="border-gray-200 border-2 float-right mr-24">
			
			</textarea>
			<div class="flex flex-1 m-24">
				<div class="w-1/3">
					<div class="text-2xl">
						毛巾位置
					</div>
					<button class="" :class="maojinweizhi==0?'border-4 border-blue-500':''" @click="()=>maojinweizhi=0">
						<img class="h-36" src="./assets/00.png" />
					</button>
					<button :class="maojinweizhi==1?'border-4 border-blue-500':''" @click="()=>maojinweizhi=1">
						<img class="h-36" src="./assets/10.png" />
					</button>
					<button :class="maojinweizhi==2?'border-4 border-blue-500':''" @click="()=>maojinweizhi=2">
						<img class="h-36" src="./assets/20.png" />
					</button>
					
				</div>
				<div class="w-1/3 ml-24">
				
					<div class="text-2xl">
						水位高度
					</div>
					<img class="h-36" v-if="!shuiweiweizhi||shuiweiweizhi==0" src="./assets/00.png" />
					<img class="h-36" v-if="shuiweiweizhi==1" src="./assets/01.png" />
					<img class="h-36" v-if="shuiweiweizhi==2" src="./assets/02.png" />
					<img class="h-36" v-if="shuiweiweizhi==3" src="./assets/03.png" />
					<img class="h-36" v-if="shuiweiweizhi==4" src="./assets/04.png" />
					<button class="w-full h-12 mt-6 bg-gray-200 rounded" :class="shuiweiweizhi==0?'border-4 border-blue-500':''" @click="()=>shuiweiweizhi=0">
						0
					</button>
					<button class="w-full h-12 mt-6 bg-gray-200 rounded" :class="shuiweiweizhi==1?'border-4 border-blue-500':''" @click="()=>shuiweiweizhi=1">
						1
					</button>
					<button class="w-full h-12 mt-6 bg-gray-200 rounded" :class="shuiweiweizhi==2?'border-4 border-blue-500':''" @click="()=>shuiweiweizhi=2">
						2
					</button>
					<button class="w-full h-12 mt-6 bg-gray-200 rounded" :class="shuiweiweizhi==3?'border-4 border-blue-500':''" @click="()=>shuiweiweizhi=3">
						3
					</button>
					<button class="w-full h-12 mt-6 bg-gray-200 rounded" :class="shuiweiweizhi==4?'border-4 border-blue-500':''" @click="()=>shuiweiweizhi=4">
						4
					</button>
				</div>
				<div v-if="step<5" class="w-1/3 ml-24 max-h-96">
					
					<div class="text-2xl">
						{{step==3?'小红的':(step==4?'小明的':'')}}实验数据
					</div>
					<div class="overflow-scroll h-full">
						<table class="w-full">
						  <tr>
						    <th>毛巾位置</th>
						    <th>水位高度</th>
						    <th>碗内温度</th>
						  </tr>
						  <tr v-for="(item,index) in list" :key="index">
						    <td>{{item.maojin}}</td>
						    <td>{{item.shuiwei}}</td>
						    <td>{{item.temperature}}</td>
						  </tr>
						</table>
					</div>
				</div>
				<div v-else class="w-1/3 ml-24 max-h-96">
					<img class="h-36" :src="getImg" v-if="maojinweizhi!=undefined&&shuiweiweizhi!=undefined"/>
				</div>
			</div>
			<div class="flex ml-96 -mt-24">
				
				<button v-if="step==1" class="w-24 m-12 bg-blue-500 text-white rounded" @click="expert">
					试一试
				</button>
				<button v-if="step<6" class="w-24 m-12 bg-blue-500 text-white rounded" @click="next">
					下一步
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	
	
	export default {
		components: {
			
		},
		provide: {
			
		},
		computed:{
			getImg(){
				return this.imgList[this.maojinweizhi+''+this.shuiweiweizhi]
			}
		},
		data() {
			return {
				list:[
					
					
				],
				name:'',
				step:0,
				maojinweizhi:undefined,
				shuiweiweizhi:undefined,
				tempData:{
					'00':'30.0℃',
					'01':'30.0℃',
					'02':'30.0℃',
					'03':'29.5℃',
					'04':'29.1℃',
					'10':'30.0℃',
					'11':'30.0℃',
					'12':'30.0℃',
					'13':'29.4℃',
					'14':'29.0℃',
					'20':'30.0℃',
					'21':'24.8℃',
					'22':'20.2℃',
					'23':'28.4℃',
					'24':'27.9℃'
				},
				imgList:{
					'00':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/5ce8a0e7-59d0-4d88-90f2-330fd3dd90e0.png',
					'01':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/5cc94332-39ec-48b8-a43c-dcc2ccf166e2.png',
					'02':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/0fd665aa-ce6c-45dc-9b66-f1895a4517ff.png',
					'03':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/0add29fc-4229-4d57-b048-763c16e7b9ec.png',
					'04':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/73260064-3f05-4e27-8e18-66fe3a62d342.png',
					'10':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/fcd77f75-dbc5-4a9a-958e-d686015767f1.png',
					'11':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/21c23e2d-0523-4851-9fd6-9ff8d08d8755.png',
					'12':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/fdff9229-ade1-4e1f-8294-fa2db11d7c54.png',
					'13':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/329ee909-2f25-45df-9be9-732cd417cb50.png',
					'14':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/5a0e94c4-6d89-4df5-87b7-3c63e82f993a.png',
					'20':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/1881ca9d-767f-4e63-ae4c-5a6c7edec9f7.png',
					'21':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/3d537444-1b14-4cdf-af68-7c3e8216125a.png',
					'22':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/dc32ef67-02b7-423c-9790-1bf761db304b.png',
					'23':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/a5fa8038-22d6-4eed-89bb-53bb78470193.png',
					'24':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4c3346ea-97a1-4ca8-84cd-109211a993c9/a45c4e6c-61c3-467a-8d12-efbf79f54de5.png'
				}
			}

		},
		name: 'app',
		mounted() {
			
			
		},
		methods: {
			next() {
				

				this.step++
				if(this.step==2){
					
					this.maojinweizhi=undefined
					this.shuiweiweizhi=undefined
				}
				
				if(this.step==3){
					this.list=[]
					this.shuiweiweizhi=2
					this.maojinweizhi=0
					this.expert()
					this.maojinweizhi=1
					this.expert()
					this.maojinweizhi=2
					this.expert()
					this.shuiweiweizhi=4
					this.maojinweizhi=0
					this.expert()
					this.maojinweizhi=1
					this.expert()
					this.maojinweizhi=2
					this.expert()
					this.maojinweizhi=undefined
					this.shuiweiweizhi=undefined
				}
				if(this.step==4){
					this.list=[]
					
					this.maojinweizhi=0
					this.shuiweiweizhi=0
					this.expert()
					this.shuiweiweizhi=1
					this.expert()
					this.shuiweiweizhi=2
					this.expert()
					this.shuiweiweizhi=3
					this.expert()
					this.shuiweiweizhi=4
					this.expert()
					this.maojinweizhi=undefined
					this.shuiweiweizhi=undefined
				}
				if(this.step==5){
					this.list=[]
					
				}
			},
			expert(){
				if(this.maojinweizhi==undefined){
					alert('请选择毛巾位置')
					return
				}
				if(this.shuiweiweizhi==undefined){
					alert('请选择水位位置')
					return
				}
				let item={}
				
				if(this.maojinweizhi==0){
					item.maojin='无毛巾'
				}else if(this.maojinweizhi==1){
					item.maojin='毛巾未进入水中'
				}else if(this.maojinweizhi==2){
					item.maojin='毛巾进入水中'
				}
				if(this.shuiweiweizhi==0){
					item.shuiwei='水位0'
				}else if(this.shuiweiweizhi==1){
					item.shuiwei='水位1'
				}else if(this.shuiweiweizhi==2){
					item.shuiwei='水位2'
				}else if(this.shuiweiweizhi==3){
					item.shuiwei='水位3'
				}else if(this.shuiweiweizhi==4){
					item.shuiwei='水位4'
				}
				item.temperature=this.tempData[this.maojinweizhi+''+this.shuiweiweizhi]
				this.list.push(item)
			}
		}
	}
</script>

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
