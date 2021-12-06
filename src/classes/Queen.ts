import ChessPiece from "@/interfaces/ChessPiece";

class Queen implements ChessPiece {
    type = 'queen';
    taken = false;
    points = 9;
}

export default Queen;
