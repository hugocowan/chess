import ChessPiece from "@/interfaces/ChessPiece";

class Knight implements ChessPiece {
    type = 'Knight';
    taken = false;
    points = 3;
    colour = '';
    position = '';
    svg = '';
}

export default Knight;
