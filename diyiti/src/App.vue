<template>
	<div id="app" class="max-h-screen">
		<div class="flex flex-1">
			<div class="h-96 w-auto">
				<div class="h-0" v-if="showLight">
					<img src="./assets/light.png" class="h-16 relative left-4" style="top:-50px">
				</div>
				<div class="h-0" v-if="showUltraviolet">
					<img src="./assets/Ultraviolet.png" class="h-16 relative left-4" style="top:-50px">
				</div>
				<div class="h-0">
					<img v-if="showWaterDrop" src="./assets/water-drop.png"
						class="h-12 relative left-12 animation-drop">
				</div>
				<div class="h-0">
					<img v-if="showCloud" src="./assets/cloud.png" class="h-12 relative left-6 animation-up">
				</div>

				<img src="./assets/bottle.png" class="h-full">
				<span v-if="showNumber">A</span>
			</div>
			<div class="h-96 w-auto">
				<div class="h-0" v-if="showLight">
					<img src="./assets/light.png" class="h-16 relative left-4" style="top:-50px">
				</div>
				<div class="h-0" v-if="showUltraviolet">
					<img src="./assets/Ultraviolet.png" class="h-16 relative left-4" style="top:-50px">
				</div>
				<div class="h-0">
					<img v-if="showWaterDrop" src="./assets/water-drop.png"
						class="h-12 relative left-12 animation-drop">
				</div>
				<div class="h-0">
					<img v-if="showCloud" src="./assets/cloud.png" class="h-12 relative left-6 animation-up">
				</div>
				<div v-if="zhusheqiPush" class="h-0">
					<div class="text-xs relative top-24">5毫升二氧化碳</div>
					<img src="./assets/co2.png" class="h-6 relative left-12 top-24">
				</div>
				<div class="h-0 w-0">
					<svg v-if="showZhusheqi" class="h-16 w-16 relative left-16 top-4" width="570" height="567"
						viewBox="0 0 570 567" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="Frame 2">
							<g id="Group">
								<g id="huosai"
									:class="zhusheqiPull?'zhusheqi-pull':(zhusheqiPush?'zhusheqi-push':'zhushiqi')">
									<path id="Vector"
										d="M479.814 115.641L454.214 90.0412L523.069 22.0692L547.786 46.7862L479.814 115.641Z"
										fill="#BDC3C7" />
									<path id="Vector_2"
										d="M433.814 161.641L408.214 136.041L477.069 68.0692L501.786 92.7862L433.814 161.641Z"
										fill="#BDC3C7" />
									<path id="Vector_3"
										d="M398.6 196.855L373 171.255L429.496 115.641L454.214 140.359L398.6 196.855Z"
										fill="#BDC3C7" />
									<path id="Vector_4"
										d="M561.027 67.9723C558.379 67.9723 556.613 67.0892 554.848 65.3242L504.531 15.0072C501 11.4762 501 6.17925 504.531 2.64825C508.062 -0.88275 513.359 -0.88275 516.89 2.64825L567.207 52.9653C570.738 56.4963 570.738 61.7933 567.207 65.3242C565.441 67.0902 562.793 67.9723 561.027 67.9723Z"
										fill="#90BAE1" />
								</g>
								<g id="tong">
									<path id="Vector_5"
										d="M202.151 427.462L139.475 364.786C135.944 361.255 135.944 355.958 139.475 352.427L283.365 208.537L358.399 283.571L214.509 427.461C210.978 430.11 205.682 430.11 202.151 427.462Z"
										fill="#E4F4F9" />
									<path id="Vector_6"
										d="M358.399 283.572L283.365 208.538L339.861 152.041L414.896 227.076L358.399 283.572Z"
										fill="#E4F4F9" />
									<path id="Vector_7"
										d="M246.289 245.614L277.186 276.511C278.952 278.277 281.6 279.159 283.365 279.159C286.013 279.159 287.779 278.276 289.544 276.511C293.075 272.98 293.075 267.683 289.544 264.152L258.647 233.255L246.289 245.614Z"
										fill="#90BAE1" />
									<path id="Vector_8"
										d="M246.289 308.29C248.055 310.056 250.703 310.938 252.468 310.938C255.116 310.938 256.882 310.055 258.647 308.29C262.178 304.759 262.178 299.462 258.647 295.931L227.75 265.034L215.391 277.393L246.289 308.29Z"
										fill="#90BAE1" />
									<path id="Vector_9"
										d="M214.509 340.069C216.275 341.835 218.923 342.717 220.688 342.717C222.454 342.717 225.102 341.834 226.867 340.069C230.398 336.538 230.398 331.241 226.867 327.71L195.97 296.813L183.611 309.172L214.509 340.069Z"
										fill="#90BAE1" />
									<path id="Vector_10"
										d="M110.344 460.124L106.813 456.593C100.634 450.414 100.634 440.703 106.813 434.524L133.296 408.041L158.013 432.758L131.53 459.241C126.233 465.421 116.523 465.421 110.344 460.124Z"
										fill="#F0C419" />
									<path id="Vector_11"
										d="M158.896 433.641L133.296 408.041L158.896 383.324L183.613 408.041L158.896 433.641Z"
										fill="#25C3AB" />
									<path id="Vector_12"
										d="M8.82725 566.938C6.17925 566.938 4.41325 566.055 2.64825 564.29C-0.88275 560.759 -0.88275 555.462 2.64825 551.931L102.4 452.179C105.931 448.648 111.228 448.648 114.759 452.179C118.29 455.71 118.29 461.007 114.759 464.538L15.0062 564.29C13.2402 566.055 11.4752 566.938 8.82725 566.938Z"
										fill="#BDC3C7" />
									<path id="Vector_13"
										d="M423.723 236.786L330.151 143.214C328.385 141.448 328.385 138.8 330.151 137.035L348.689 118.497C350.455 116.731 353.103 116.731 354.868 117.614L448.44 211.186C450.206 212.952 450.206 215.6 448.44 217.365L429.902 235.903C428.137 238.552 425.489 238.552 423.723 236.786Z"
										fill="#DEEDF1" />
								</g>
							</g>
						</g>
					</svg>




				</div>
				<img src="./assets/bottle.png" class="h-full">
				<span v-if="showNumber">B</span>
			</div>
			<div class="h-96 w-auto">
				<div class="h-0" v-if="showLight">
					<img src="./assets/light.png" class="h-16 relative left-4" style="top:-50px">
				</div>
				<div class="h-0" v-if="showUltraviolet">
					<img src="./assets/Ultraviolet.png" class="h-16 relative left-4" style="top:-50px">
				</div>
				<div class="h-0">
					<img v-if="showWaterDrop" src="./assets/water-drop.png"
						class="h-12 relative left-12 animation-drop">
				</div>
				<div class="h-0">
					<img v-if="showCloud" src="./assets/cloud.png" class="h-12 relative left-6 animation-up">
				</div>

				<div v-if="zhusheqiPush2" class="h-0">
					<div class="text-xs relative top-24">5毫升甲烷</div>
					<img src="./assets/ch4.png" class="h-6 relative left-12 top-24">
				</div>
				<div class="h-0 w-0">
					<svg v-if="showZhusheqi2" class="h-16 w-16 relative left-16 top-4" width="570" height="567"
						viewBox="0 0 570 567" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="Frame 2">
							<g id="Group">
								<g id="huosai"
									:class="zhusheqiPull2?'zhusheqi-pull':(zhusheqiPush2?'zhusheqi-push':'zhushiqi')">
									<path id="Vector"
										d="M479.814 115.641L454.214 90.0412L523.069 22.0692L547.786 46.7862L479.814 115.641Z"
										fill="#BDC3C7" />
									<path id="Vector_2"
										d="M433.814 161.641L408.214 136.041L477.069 68.0692L501.786 92.7862L433.814 161.641Z"
										fill="#BDC3C7" />
									<path id="Vector_3"
										d="M398.6 196.855L373 171.255L429.496 115.641L454.214 140.359L398.6 196.855Z"
										fill="#BDC3C7" />
									<path id="Vector_4"
										d="M561.027 67.9723C558.379 67.9723 556.613 67.0892 554.848 65.3242L504.531 15.0072C501 11.4762 501 6.17925 504.531 2.64825C508.062 -0.88275 513.359 -0.88275 516.89 2.64825L567.207 52.9653C570.738 56.4963 570.738 61.7933 567.207 65.3242C565.441 67.0902 562.793 67.9723 561.027 67.9723Z"
										fill="#90BAE1" />
								</g>
								<g id="tong">
									<path id="Vector_5"
										d="M202.151 427.462L139.475 364.786C135.944 361.255 135.944 355.958 139.475 352.427L283.365 208.537L358.399 283.571L214.509 427.461C210.978 430.11 205.682 430.11 202.151 427.462Z"
										fill="#E4F4F9" />
									<path id="Vector_6"
										d="M358.399 283.572L283.365 208.538L339.861 152.041L414.896 227.076L358.399 283.572Z"
										fill="#E4F4F9" />
									<path id="Vector_7"
										d="M246.289 245.614L277.186 276.511C278.952 278.277 281.6 279.159 283.365 279.159C286.013 279.159 287.779 278.276 289.544 276.511C293.075 272.98 293.075 267.683 289.544 264.152L258.647 233.255L246.289 245.614Z"
										fill="#90BAE1" />
									<path id="Vector_8"
										d="M246.289 308.29C248.055 310.056 250.703 310.938 252.468 310.938C255.116 310.938 256.882 310.055 258.647 308.29C262.178 304.759 262.178 299.462 258.647 295.931L227.75 265.034L215.391 277.393L246.289 308.29Z"
										fill="#90BAE1" />
									<path id="Vector_9"
										d="M214.509 340.069C216.275 341.835 218.923 342.717 220.688 342.717C222.454 342.717 225.102 341.834 226.867 340.069C230.398 336.538 230.398 331.241 226.867 327.71L195.97 296.813L183.611 309.172L214.509 340.069Z"
										fill="#90BAE1" />
									<path id="Vector_10"
										d="M110.344 460.124L106.813 456.593C100.634 450.414 100.634 440.703 106.813 434.524L133.296 408.041L158.013 432.758L131.53 459.241C126.233 465.421 116.523 465.421 110.344 460.124Z"
										fill="#F0C419" />
									<path id="Vector_11"
										d="M158.896 433.641L133.296 408.041L158.896 383.324L183.613 408.041L158.896 433.641Z"
										fill="#25C3AB" />
									<path id="Vector_12"
										d="M8.82725 566.938C6.17925 566.938 4.41325 566.055 2.64825 564.29C-0.88275 560.759 -0.88275 555.462 2.64825 551.931L102.4 452.179C105.931 448.648 111.228 448.648 114.759 452.179C118.29 455.71 118.29 461.007 114.759 464.538L15.0062 564.29C13.2402 566.055 11.4752 566.938 8.82725 566.938Z"
										fill="#BDC3C7" />
									<path id="Vector_13"
										d="M423.723 236.786L330.151 143.214C328.385 141.448 328.385 138.8 330.151 137.035L348.689 118.497C350.455 116.731 353.103 116.731 354.868 117.614L448.44 211.186C450.206 212.952 450.206 215.6 448.44 217.365L429.902 235.903C428.137 238.552 425.489 238.552 423.723 236.786Z"
										fill="#DEEDF1" />
								</g>
							</g>
						</g>
					</svg>




				</div>
				<img src="./assets/bottle.png" class="h-full">
				<span v-if="showNumber">C</span>
			</div>
			<div class="w-96 h-96" style="margin-top: -50px;" v-if="showChart">
				<!-- <chart class="h-64" ref="chart1" :options="orgOptions" :auto-resize="true"></chart> -->
				<div class="flex flex-1">
					<svg v-if="showClock" class="w-24 h-24" width="1064" height="1480" viewBox="0 0 1064 1497" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g id="chronograph 1">
							<g id="Group">
								<path id="Vector"
									d="M449.5 1.19995C443 3.5 437.1 8.90002 434 15.5C432.1 19.3 432 22.6 432 82.8C432 152.8 431.7 149.3 438.7 157C445.5 164.6 448.5 165.4 471.8 165.8L492 166.2V192V217.8L484.8 218.5C380 228.1 281.2 267.6 200.7 332.2C195.4 336.5 190.6 340 190.2 340C189.8 340 186.6 337.2 183.2 333.7L177 327.5L186.1 318.5C197.5 307.1 199.2 304.5 199.2 297.6C199.2 293.5 198.6 291.1 196.7 287.8C193 281.5 136.3 225.4 131.8 223.5C126.9 221.5 121.4 221.6 116.5 223.9C111.6 226.2 36.6 301.1 35.1 305.3C33.5 309.3 33.8 315.5 35.5 319.8C37.5 324.4 93.4 380.9 99.8 384.7C104.6 387.6 112.9 388.1 117.2 385.9C118.4 385.3 124 380.3 129.5 374.9L139.6 365L145.5 371L151.4 376.9L142.9 385.7C94.7 436 54.3 503.1 29 575.2C5.49998 641.6 -4.20002 720.6 1.99998 793.5C15 944.3 91.1 1081.7 212.5 1173.2C292.4 1233.5 385.7 1269 488 1278.2C506.7 1279.8 557.3 1279.8 576 1278.2C667.4 1270 749.5 1241.6 824 1192.5C938.5 1117 1019.5 1001 1050 869C1070.3 781.3 1068.2 690.9 1043.8 603.2C1030.2 554 1005.6 500.4 976.5 456.1C942 403.6 895 354.4 844 317.5C786.3 275.7 721.7 246.3 652.5 230.2C628.8 224.6 598.1 219.8 577.3 218.4L567 217.7V191.9V166.2L587.3 165.8C610.5 165.4 613.5 164.6 620.3 157C627.3 149.3 627 152.8 627 82.8C627 11.8 627.3 15.3 619.6 7.69995C611.6 0 617.7 0.5 530.5 0.300049C477.8 0.199951 451.5 0.5 449.5 1.19995ZM568.7 297.5C665.8 305.8 754.1 342.7 827.5 405.9C900.7 468.9 952.9 555.8 973.4 649C981.5 685.8 983.5 705.2 983.5 748C983.5 786 982.7 796.9 977.4 827C958.3 936.9 897.7 1036.9 808.5 1106C751.3 1150.3 681.5 1181.2 611 1193.4C579.9 1198.8 571 1199.5 532 1199.5C493 1199.5 484.1 1198.8 453 1193.4C341.2 1174 238.7 1110.9 169.9 1019C121.3 954.2 92.5 881.6 82.3 798C79.7 777.2 79.8 718.7 82.3 698C91.2 626.3 112.6 565.4 149.3 507C203.6 420.8 287.5 354.2 383.5 321C442.5 300.6 507.8 292.3 568.7 297.5Z"
									fill="black" />
								<path id="Vector_2" d="M527 344V368H532H537V344V320H532H527V344Z" fill="black" />
								<path id="Vector_3"
									d="M318 377.2C316.1 378.4 314.4 379.5 314.2 379.6C314 379.7 335.9 418.3 337.6 420.8C338.1 421.5 346 416.9 346 415.9C346 414.5 323 375 322.2 375C321.8 375 319.9 376 318 377.2Z"
									fill="black" />
								<path id="Vector_4"
									d="M729.6 395.6C723.1 406.9 717.9 416.2 718.1 416.4C720.1 417.9 726.2 421.1 726.4 420.9C727.5 419.6 750.1 379.8 749.8 379.6C748.6 378.7 742.2 375 741.9 375C741.6 375 736.1 384.3 729.6 395.6Z"
									fill="black" />
								<path id="Vector_5"
									d="M162.1 533.4C160.9 535.2 160 537.1 160 537.6C160 538.6 198.9 561.3 200.4 561.2C200.9 561.2 202.3 559.4 203.6 557.3L205.9 553.4L185.6 541.7C174.4 535.3 165 530 164.7 530C164.4 530 163.2 531.5 162.1 533.4Z"
									fill="black" />
								<path id="Vector_6"
									d="M879 541.4C868.3 547.6 859.5 553.1 859.3 553.6C859.1 554.1 860 556.2 861.3 558.2L863.5 561.9L877 554.1C884.4 549.9 893.7 544.5 897.7 542.2L904.8 538L902.7 534C901.5 531.8 900.1 530 899.5 530.1C899 530.1 889.7 535.2 879 541.4Z"
									fill="black" />
								<path id="Vector_7"
									d="M104.9 742.7C104.5 744.2 104.9 752 105.4 752C105.7 752 116.4 752 129 752H152V747.2V742.5H128.5C115.6 742.5 105 742.6 104.9 742.7Z"
									fill="black" />
								<path id="Vector_8"
									d="M912 747.2V752H936.1H960.1L959.8 747.5L959.5 742.9L935.7 742.7L912 742.5V747.2Z"
									fill="black" />
								<path id="Vector_9"
									d="M180.5 944.7C169.5 951 160.3 956.3 160.2 956.5C159.6 957.1 161 960.4 162.9 962.9L164.7 965.3L185.3 953.4L205.9 941.5L203.8 938C202.6 936.1 201.4 934.2 201.1 933.8C200.8 933.4 191.5 938.3 180.5 944.7Z"
									fill="black" />
								<path id="Vector_10"
									d="M861.1 937.1C859.8 939.3 859.2 941.5 859.6 942C861 943.3 898.9 965 899.7 965C900.2 965 901.5 963.2 902.7 961L904.8 957L895.2 951.3C889.9 948.2 880.6 942.8 874.7 939.3C868.7 935.9 863.7 933 863.6 933C863.5 933 862.3 934.8 861.1 937.1Z"
									fill="black" />
								<path id="Vector_11"
									d="M325.8 1094.6L314.1 1115.1L318.2 1117.6C320.4 1119 322.6 1119.8 323 1119.3C324.2 1118 346 1079.8 346 1079C346 1078.4 338.7 1073.9 337.9 1074C337.7 1074.1 332.2 1083.3 325.8 1094.6Z"
									fill="black" />
								<path id="Vector_12"
									d="M722 1076.2C720.1 1077.4 718.3 1078.5 718.1 1078.6C717.9 1078.8 740.5 1118.6 741.6 1119.9C741.8 1120.1 747.8 1116.9 749.9 1115.4C750.3 1115 726.7 1074 726 1074C725.7 1074 723.9 1075 722 1076.2Z"
									fill="black" />
								<path id="Vector_13" d="M527 1151V1175H532H537V1151V1127H532H527V1151Z" fill="black" />
							</g>
							<g id="pointer">
								<path id="Vector_14"
									d="M524.7 401.2L517.2 415.5L516.1 459.5C515.5 483.7 514.5 518.8 514 537.5C512.2 598.6 511.1 641 510.4 667.8L509.7 694.1L504.3 696.7C486.9 705.3 473.9 726.5 473.8 746.9C473.6 763.1 478.8 776.5 489.4 787.8C501.2 800.3 515.2 806.4 532 806.4C548.8 806.4 562.8 800.3 574.6 787.8C589.3 772.2 594.2 749.9 587.3 729.8C585.7 725.2 582.7 718.8 580.6 715.7C575.7 708.4 566.6 700.1 559.5 696.6L554 693.9V688.2C554 685.1 552.4 622.3 550.5 548.8L547 415.1L540 401C536.1 393.3 532.8 387 532.6 387C532.3 387 528.8 393.4 524.7 401.2ZM540.8 731.7C547.9 735 552.2 744.9 550.1 752.7C547.9 760.7 540 767 532 767C527.2 767 521 763.9 517.7 760.1C514.6 756.3 512.6 749.8 513.4 745.7C516.1 732.3 528.5 725.9 540.8 731.7Z"
									fill="black" />
							</g>
						</g>
					</svg>



					<span>光照时间：{{duration}}分钟</span>
				</div>
				<v-chart class="chart h-96 w-96 " :option="orgOptions" />
			</div>
			<div class="w-96" v-if="!operating">
				<div class="w-96 h-24 text-left">{{steps[curStep]}}</div>
				<button v-if="curStep<steps.length" @click="next()"
					class="my-16 w-1/2 flex items-center justify-center rounded-md bg-blue-500 text-white"
					type="submit">操作</button>
			</div>

		</div>
		<div class="text-left mt-12">{{experiment==1?'实验一':'实验二'}}</div>

	</div>
</template>

<script>
	
	import {
		use
	} from "echarts/core";
	import {
		CanvasRenderer
	} from "echarts/renderers";
	import {
		LineChart
	} from "echarts/charts";
	import {
		TitleComponent,
		TooltipComponent,
		LegendComponent,
		ToolboxComponent,
		GridComponent
	} from "echarts/components";
	import VChart, {
		THEME_KEY
	} from "vue-echarts";

	use([
		CanvasRenderer,
		LineChart,
		TitleComponent,
		TooltipComponent,
		LegendComponent,
		ToolboxComponent,
		GridComponent
	]);
	export default {
		components: {
			VChart
		},
		provide: {
			[THEME_KEY]: "light"
		},
		data() {
			return {
				experiment:1,
				orgOptions: {},
				steps: [
					'各自滴入一滴水并装满空气后拧紧（此时水会蒸发成水蒸气），分别编号A、B、C。',
					'B瓶抽出5毫升的空气',
					'然后添加5毫升的CO2到B瓶',
					'C瓶抽出5毫升的空气',
					'然后添加5毫升的CH4到C瓶',
					'开启60瓦的灯泡持续对三个矿泉水瓶进行照射，并将三个矿泉水瓶内气体温度随时间的变化记录下来',
					'开始实验二，各自滴入一滴水并装满空气后拧紧（此时水会蒸发成水蒸气），分别编号A、B、C。',
					'B瓶抽出5毫升的空气',
					'然后添加5毫升的CO2到B瓶',
					'C瓶抽出5毫升的空气',
					'然后添加5毫升的CH4到C瓶',
					'以紫外灯照射三个矿泉水瓶一段时间',
					'开启60瓦的灯泡持续对三个矿泉水瓶进行照射，并将三个矿泉水瓶内气体温度随时间的变化记录下来'
				],
				curStep: 0,
				duration: 0,
				showNumber: false,
				showWaterDrop: false,
				showCloud: false,
				showZhusheqi: false,
				zhusheqiPull: false,
				zhusheqiPush: false,
				showZhusheqi2: false,
				zhusheqiPull2: false,
				zhusheqiPush2: false,
				operating: false,
				showLight: false,
				showChart: false,
				showClock:true,
				showUltraviolet:false
			}

		},
		name: 'app',
		mounted() {
			this.orgOptions = {
				animationDuration: 10000,
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['A', 'B', 'C']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['0', '25', '50', '75', '100', '125', '150', '175', '200'],
					name: '时间（分钟）',
					nameLocation: 'middle'
				},
				yAxis: {
					type: 'value',
					min: 20,
					name: '温度（℃）',
				},
				series: [{
						name: 'A',
						type: 'line',
						data: [20.0, 25.5, 28.0, 29.0, 29.2, 29.4, 29.5, 29.6, 29.6]
					},
					{
						name: 'B',
						type: 'line',
						data: [20.0, 26.5, 29.0, 29.7, 30.0, 30.2, 30.4, 30.5, 30.5]
					},
					{
						name: 'C',
						type: 'line',
						data: [20.0, 29.0, 30.5, 31.0, 31.2, 31.3, 31.4, 31.5, 31.5]
					}
				]
			}
		},
		methods: {
			next() {
				this.operating = true
				if (this.curStep == 0) {
					this.stepOne()
				} else if (this.curStep == 1) {
					this.stepTwo()
				} else if (this.curStep == 2) {
					this.stepThere()
				} else if (this.curStep == 3) {
					this.stepFour()
				} else if (this.curStep == 4) {
					this.stepFive()
				} else if (this.curStep == 5) {
					this.stepSix()
				} else if (this.curStep == 6) {
					this.stepOne()
				} else if (this.curStep == 7) {
					this.stepTwo()
				} else if (this.curStep == 8) {
					this.stepThere()
				} else if (this.curStep == 9) {
					this.stepFour()
				} else if (this.curStep == 10) {
					this.stepFive()
				} else if (this.curStep == 11) {
					this.stepZiwaideng()
				} else if (this.curStep == 12) {
					this.stepSix()
				}

				this.curStep++
			},
			//'各自滴入一滴水并装满空气后拧紧（此时水会蒸发成水蒸气），分别编号A、B、C。',
			stepOne() {
				if(this.curStep==6){
					this.experiment=2
					
					this.duration= 0
					this.showNumber= false
					this.showWaterDrop= false
					this.showCloud= false
					this.showZhusheqi= false
					this.zhusheqiPull= false
					this.zhusheqiPush= false
					this.showZhusheqi2= false
					this.zhusheqiPull2= false
					this.zhusheqiPush2= false
					this.showLight= false
					this.showChart= false
					this.showClock=true
				}
				let that = this
				
				//滴水
				that.showWaterDrop = true
				setTimeout(function() {
					that.showWaterDrop = false
					//水蒸气
					that.showCloud = true
					setTimeout(function() {
						that.showWaterDrop = false
						//水蒸气
						that.showCloud = true
						that.operating = false
					}, 5500);
				}, 1000);
				//编号
				this.showNumber = true
			},
			//'B瓶抽出5毫升的空气',
			stepTwo() {
				let that = this
				that.showZhusheqi = true
				setTimeout(function() {
					//'B瓶抽出5毫升的空气'
					that.zhusheqiPull = true
					setTimeout(function() {
						//'B瓶抽出5毫升的空气'
						that.zhusheqiPull = true
						that.operating = false
						that.showZhusheqi=false
					}, 2500);
				}, 500);

			},
			//'然后添加5毫升的CO2到B瓶',
			stepThere() {
				let that = this
				that.showZhusheqi=true
				that.zhusheqiPull = false
				that.zhusheqiPush = true
				setTimeout(function() {
					//'B瓶抽出5毫升的空气'

					that.showZhusheqi=false
					that.operating = false
				}, 2500);

			},
			//'C瓶抽出5毫升的空气',
			stepFour() {
				let that = this
				that.showZhusheqi2 = true
				setTimeout(function() {
					//'B瓶抽出5毫升的空气'
					that.zhusheqiPull2 = true
					setTimeout(function() {
						//'B瓶抽出5毫升的空气'
						
						that.showZhusheqi2=false
						that.zhusheqiPull2 = true
						that.operating = false
					}, 2500);
				}, 500);

			},
			//'然后添加5毫升的CO2到C瓶',
			stepFive() {
				let that = this
				
				that.showZhusheqi2=true
				that.zhusheqiPull2 = false
				that.zhusheqiPush2 = true
				setTimeout(function() {
					//'B瓶抽出5毫升的空气'

					that.showZhusheqi2=false
					that.operating = false
				}, 2500);

			},
			stepZiwaideng(){
				let that = this
				this.showUltraviolet=true
				setTimeout(function() {
					that.showUltraviolet=false
					that.operating=false
				}, 2500);
			},
			//'开启60瓦的灯泡持续对三个矿泉水瓶进行照射，并将三个矿泉水瓶内气体温度随时间的变化记录下来'
			stepSix() {
				let that = this
				that.showLight = true
				this.showChart = true
				let circle=this.orgOptions.animationDuration/200
				if(this.curStep==12){
					this.orgOptions = {
						animationDuration: 10000,
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['A', 'B', 'C']
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						toolbox: {
							feature: {
								saveAsImage: {}
							}
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['0', '25', '50', '75', '100', '125', '150', '175', '200'],
							name: '时间（分钟）',
							nameLocation: 'middle'
						},
						yAxis: {
							type: 'value',
							min: 20,
							name: '温度（℃）',
						},
						series: [{
								name: 'A',
								type: 'line',
								data: [20.0, 25.5, 28.0, 29.0, 29.2, 29.4, 29.5, 29.6, 29.6]
							},
							{
								name: 'B',
								type: 'line',
								data: [20.0,26.6,29.0,29.7,30.0,30.2,30.5,30.5,30.5]
							},
							{
								name: 'C',
								type: 'line',
								data: [20.0,27.4,29.6,30.2,30.4,30.7,30.8,30.9,30.9]
							}
						]
					}
				}
				let interval=setInterval(function() {
					//'B瓶抽出5毫升的空气'
				
					that.duration ++
				}, circle);
				setTimeout(function() {
					//'B瓶抽出5毫升的空气'
					clearInterval(interval)
					that.duration=200
					that.showClock=false
					that.showLight=false
					that.operating=false
				}, this.orgOptions.animationDuration);

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

	.animation-drop {
		animation: drop .5s;
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;
		/*让动画停留在最后一帧 */
		-moz-animation-fill-mode: forwards;
		-webkit-animation-fill-mode: forwards;
		-o-animation-fill-mode: forwards;


	}

	@keyframes drop {
		0% {
			top: 8rem
		}

		100% {
			top: 18rem
		}
	}

	.animation-up {
		animation: up 5.5s;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
		/*让动画停留在最后一帧 */
		-moz-animation-fill-mode: forwards;
		-webkit-animation-fill-mode: forwards;
		-o-animation-fill-mode: forwards;


	}

	@keyframes up {
		0% {
			top: 18rem;
			opacity: 100%;
		}

		100% {
			top: 8rem;
			opacity: 0%;
		}
	}

	.zhusheqi-pull {
		animation: pull 2.5s;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
		/*让动画停留在最后一帧 */
		-moz-animation-fill-mode: forwards;
		-webkit-animation-fill-mode: forwards;
		-o-animation-fill-mode: forwards;


	}

	@keyframes pull {
		0% {

			transform: translate(-100px, 100px);
		}

		100% {
			transform: translate(0px, 0px);
		}
	}

	.zhusheqi-push {
		animation: push 2.5s;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
		/*让动画停留在最后一帧 */
		-moz-animation-fill-mode: forwards;
		-webkit-animation-fill-mode: forwards;
		-o-animation-fill-mode: forwards;


	}

	@keyframes push {
		0% {

			transform: translate(0px, 0px);
		}

		100% {
			transform: translate(-100px, 100px);
		}
	}

	#huosai {
		transform: translate(-100px, 100px);
	}

	#pointer {
		animation: spin 1s linear infinite;
		transform-origin:center;
	}

	@keyframes spin {
		from {
			transform: rotateZ(0deg);
		}

		to {
			transform: rotateZ(360deg);
		}
	}
</style>
