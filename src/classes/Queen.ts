import ChessPiece from "@/interfaces/ChessPiece";

class Queen implements ChessPiece {
    type = 'queen';
    taken = false;
}

export default Queen;
