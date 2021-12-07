import ChessPiece from "@/interfaces/ChessPiece";

class Pawn implements ChessPiece {
    type = 'Pawn';
    taken = false;
    points = 1;
    colour = '';
    position = '';
    svg = '';
}

export default Pawn;