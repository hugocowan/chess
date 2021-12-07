import ChessPiece from "@/interfaces/ChessPiece";

class Rook implements ChessPiece {
    type = 'Rook';
    taken = false;
    points = 5;
    colour = '';
    position = '';
    svg = '';
}

export default Rook;
