import ChessPiece from "@/interfaces/ChessPiece";

class Knight implements ChessPiece {
    type = 'knight';
    taken = false;
    points = 3;
}

export default Knight;
