import ChessPiece from "@/interfaces/ChessPiece";

class Bishop implements ChessPiece {
    type = 'Bishop';
    taken = false;
    points = 3;
    colour = '';
    position = '';
    svg = '';
}

export default Bishop;