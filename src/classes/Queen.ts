import ChessPiece from "@/interfaces/ChessPiece";

class Queen implements ChessPiece {
    type = 'Queen';
    taken = false;
    points = 9;
    colour = '';
    position = '';
    svg = '';
}

export default Queen;
