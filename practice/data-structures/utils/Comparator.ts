export class Comparator<T>{

    constructor(compare: (a:T, b:T) => number){

    }

    defaultCompareFunction(a: T, b:T){
        if(a > b){
            return 1
        }else if(a < b){
            return -1
        }else{
            return 0
        }
    }
    
    equal(a: T, b: T){
        return a === b
    }

    greaterThan(a: T, b: T){
        return  a > b
    }

    lessThan(a: T, b: T){
        return b > a
    }
}