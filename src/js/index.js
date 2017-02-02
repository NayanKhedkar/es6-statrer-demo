class Counter {
    constructor(start = 0, end = 10) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let current = this.start;
        let max = this.end;

        return {
            next() {
                let result = {value: current, done: current > max};
                current++;
                return result;
            }
        };
    }
}

let counter = new Counter(1);
for (let i of counter) {
    console.log(i);
}

console.log([...counter]); // [1,2,3,4,5,6,7,8,9,10]
