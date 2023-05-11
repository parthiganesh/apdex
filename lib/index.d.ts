declare class Apdex {
    constructor(T: number, limit?: number);
    eval(value: number, error?: boolean): number;
    add(value: number, error?: boolean): number;
    flush(): void;
    readonly apdex: number;
}

export default Apdex;
export { Apdex };