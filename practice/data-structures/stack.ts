export class Stack<T>{

    items: T[];
    count: number;

    constructor(){
        this.items = [];
        this.count = 0
    }

    push(item: T){
        this.items.push(item);
        console.log(`Added ${item} at ${this.count}`)
        this.count ++;
    }

    pop(){
        
    }

}

const stack = new Stack<string>();

stack.push('test')