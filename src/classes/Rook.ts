import ChessPiece from "@/interfaces/ChessPiece";

class Rook implements ChessPiece {
    type = 'rook';
    taken = false;
    points = 5;
}

export default Rook;
