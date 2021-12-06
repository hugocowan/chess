import ChessPiece from "@/interfaces/ChessPiece";

class King implements ChessPiece {
    type = 'king';
    taken = false;
}

export default King;