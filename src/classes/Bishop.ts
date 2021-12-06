import ChessPiece from "@/interfaces/ChessPiece";

class Bishop implements ChessPiece {
    type = 'bishop';
    taken = false;
    points = 3;
}

export default Bishop;