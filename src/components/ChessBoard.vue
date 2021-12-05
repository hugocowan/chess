<template>
  <div class="chessboard">
    <div
		v-for="square in boardSquares" 
		v-bind:key="square.index" 
		:class="'square ' + square.colour"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		msg: String,
	},
	methods: {
		hi() {
			console.log("hey", this.msg);
		},
	},
})
export default class ChessBoard extends Vue {
	public getSquares = (): { boardSquares: { colour: string; index: number }[] } => {
		let boardSquares = [];
		let colourA = "white";
		let colourB = "black";
		let oldcolourA = null;

		for (let i = 0; i < 64; i++) {
			if (i > 0 && i % 8 === 0) {
				(oldcolourA = colourA), (colourA = colourB), (colourB = oldcolourA);
			}

			console.log(i, colourA, colourB);

			boardSquares[i] = {
				colour: i % 2 === 0 ? colourA : colourB,
				index: i,
			};
		}

		return {
			boardSquares,
		};
	};
	private boardSquares = this.getSquares()["boardSquares"];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

.chessboard {
	margin: 0 auto;
	display: flex;
	flex-flow: row wrap;
	height: 800px;
	width: 800px;

	.square {
		height: calc(100% / 8);
		width: calc(100% / 8);

		&.white {
			background: rgb(233, 200, 138);
		}

		&.black {
			background: rgb(117, 60, 13);
		}
	}
}
</style>
