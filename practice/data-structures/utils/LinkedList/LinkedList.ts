import { LinkedListNode } from './LinkedListNode';

export class LinkedList<T>{

    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;

    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value: T): LinkedList<T>{

        const newNode = new LinkedListNode<T>(value, this.head);
        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }

        return this;
    }

    append(value: T): LinkedList<T>{
        const newNode = new LinkedListNode<T>(value, null);

        if(!this.head || !this.tail){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

}