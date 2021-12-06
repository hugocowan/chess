interface Board {
    type: string;
    taken: boolean;
    colour?: string;
    position?: string;
    svg?: string
}

export default Board;