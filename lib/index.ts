class Apdex {
    private T: number;
    private weights: number[];
    private length: number;
    private limit: number;
    private score: number;

    constructor(T: number, limit: number = Infinity) {
        if (limit <= 0) {
            throw new Error('Limit must be greater than zero.');
        }

        this.T = T;
        this.weights = [];
        this.length = 0;
        this.limit = limit;
        this.score = 0;
    }

    private eval(value: number, error?: boolean): number {
        /*
            user is satisfied if value < T
            user is tolerating if T < value <= 4T
            user is frustrated if value > 4T or on error
        */
        if (error) {
            return 0;
        }
        if (value < this.T) {
            return 1;
        }
        if (value <= 4 * this.T) {
            return 0.5;
        }
        return 0;
    }

    public add(value: number, error?: boolean): number {
        const s = this.eval(value, error);
        if (this.length >= this.limit) {
            this.weights.shift();
        } else {
            this.length++;
        }
        this.weights.push(s);
        this.score = this.weights.reduce((a, b) => a + b, 0) / this.length;
        return s;
    }

    public flush(): void {
        this.weights.length = 0;
    }

    public get apdex(): number {
        return this.score;
    }
}

export default Apdex;
export { Apdex };
