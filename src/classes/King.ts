import ChessPiece from "@/interfaces/ChessPiece";

class King implements ChessPiece {
    type = 'King';
    taken = false;
    points = 0;
    colour = '';
    position = '';
    svg = '';
}

export default King;