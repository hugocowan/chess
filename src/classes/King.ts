import ChessPiece from "@/interfaces/ChessPiece";

class King implements ChessPiece {
    type = 'king';
    taken = false;
    points = 9001;
}

export default King;