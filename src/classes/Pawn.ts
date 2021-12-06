import ChessPiece from "@/interfaces/ChessPiece";

class Pawn implements ChessPiece {
    type = 'pawn';
    taken = false;
}

export default Pawn;