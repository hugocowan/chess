import ChessPiece from "@/interfaces/ChessPiece";

class Pawn implements ChessPiece {
    type = 'pawn';
    taken = false;
    points = 1;
}

export default Pawn;