<template>
	<div class="chessboard">
		<div
			v-for="square in boardSquares" 
			v-bind:key="square.index" 
			:class="`square ${square.colour} ${square.code}${square.index}`"
		>
			<div 
				v-for="piece in chessPieces.filter(piece => piece.position === `${square.code}${square.index}`)"
				v-bind:key="piece.position"
				:class="`chessPiece ${piece.colour} ${piece.position} ${piece.type}`"
			>
				<!-- <img :src="BlackRook"> -->
				<!-- <img :src="piece.svg"> -->
				{{ piece.colour }} {{ piece.type }}
			</div>

			<span v-if="square.index === 1 || square.code === 'A'" >
				{{ (square.code === 'A' && square.index === 1) ? `${square.code}${square.index}` : (square.code === 'A') ? square.index : square.code }}
			</span>
		</div>

		
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from '@/store';
// import BlackRook from '@/assets/blackRook.svg';

if (store.state.pieces.length === 0) store.commit('createStartingPosition');
store.commit('changeBlackScore', 2);

console.log('state:', store.state);
console.log(store.state.pieces);


@Options({
	props: {
		msg: String,
	},
	methods: {
		hi() {
			console.log("hey", this.msg);
		},
	},
	components: {
		// BlackRook
	}
})
export default class ChessBoard extends Vue {

	// Make an array of squares including their colour and code.
	private getSquares = (): { colour: string; index: number; code: string }[] => {
		let boardSquares = [],
			colourA = "white",
			colourB = "black",
			oldcolourA = null,
			columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
			currentColumn = 'A',
			currentIndex = 8;

		for (let i = 0; i < 64; i++) {
			if (i > 0 && i % 8 === 0) {
				(oldcolourA = colourA), (colourA = colourB), (colourB = oldcolourA);
				currentIndex = currentIndex === 1 ?  8 : --currentIndex;
			}

			boardSquares[i] = {
				colour: i % 2 === 0 ? colourA : colourB,
				index: currentIndex,
				code: `${currentColumn}`
			};

			currentColumn = columns[columns.indexOf(currentColumn) + 1] ?? 'A';
		}

		return boardSquares;
	};

	private boardSquares = this.getSquares();
	private chessPieces = store.state.pieces;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
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

			span, .chessPiece {
				color: rgb(117, 60, 13);
			}
		}

		&.black {
			background: rgb(117, 60, 13);

			span, .chessPiece {
				color: rgb(233, 200, 138);
			}
		}

		span {
			position: relative;
			top: 75%;
			right: 35%;
			font-size: 11px;
			padding-right: 5px;
			user-select: none;
		}

		.chessPiece {
			height: 100%;
			width: 100%;

			img {
				height: 100%;
				width: 100%;
			}
		}
	}

	
}
</style>
