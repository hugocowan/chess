import { createStore } from 'vuex';
import ChessPiece from '@/interfaces/ChessPiece';
import Pawn from '@/classes/Pawn';
import Knight from '@/classes/Knight';
import Bishop from '@/classes/Bishop';
import Rook from '@/classes/Rook';
import Queen from '@/classes/Queen';
import King from '@/classes/King';

export default createStore({
	state: {
		pieces: Array(), // eslint-disable-line @typescript-eslint/no-array-constructor
		blackScore: 0,
		whiteScore: 0
	},
	mutations: {
		changeBlackScore(state, n) {
			state.blackScore += n;
		},
		changeWhiteScore(state, n) {
			state.whiteScore += n;
		},
		createStartingPosition(state): void {

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const createPiece = (Piece: any, colour: string, position: string): ChessPiece => {
				const piece = new Piece();
	
				piece.colour = colour;
				piece.svg = `@/assets/${colour}${piece.type}.svg`;
				piece.position = position;
	
				state.pieces.push(piece);
	
				return piece;
			}

			const createPieces = (colour: string) => {
				const [  pieceIndex, pawnIndex ] = ('white' === colour) ? [ 1, 2 ] : [ 8, 7 ];
				createPiece(Rook, colour, `A${pieceIndex}`);
				createPiece(Knight, colour, `B${pieceIndex}`);
				createPiece(Bishop, colour, `C${pieceIndex}`);
				createPiece(Queen, colour, `D${pieceIndex}`);
				createPiece(King, colour, `E${pieceIndex}`);
				createPiece(Bishop, colour, `F${pieceIndex}`);
				createPiece(Knight, colour, `G${pieceIndex}`);
				createPiece(Rook, colour, `H${pieceIndex}`);

				createPiece(Pawn, colour, `A${pawnIndex}`);
				createPiece(Pawn, colour, `B${pawnIndex}`);
				createPiece(Pawn, colour, `C${pawnIndex}`);
				createPiece(Pawn, colour, `D${pawnIndex}`);
				createPiece(Pawn, colour, `E${pawnIndex}`);
				createPiece(Pawn, colour, `F${pawnIndex}`);
				createPiece(Pawn, colour, `G${pawnIndex}`);
				createPiece(Pawn, colour, `H${pawnIndex}`);
			}
			
			createPieces('white');
			createPieces('black');
		}
	},
	actions: {
	},
	modules: {
	}
})
