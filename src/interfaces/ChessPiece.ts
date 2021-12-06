interface ChessPiece {
    type: string;
    taken: boolean;
    points: number;
    colour?: string;
    position?: string;
    svg?: string
}

export default ChessPiece;