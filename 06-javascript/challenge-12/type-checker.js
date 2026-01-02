const typeOf = (value) =>{

    if (value === null){
        return "null";
    }

    if (value === undefined){
        return "undefined";
    }

    if (typeof value === "number" && isNaN(value)){
        return "nan";
    }

    if (Array.isArray(value)){
        return "array";
    }

    if (value instanceof Date){
        return "date";
    }

    if (value instanceof Map){
        return "map";
    }

    if (value instanceof Set){
        return "set";
    }

    if (value instanceof RegExp){
        return "regexp";
    }

    if (value instanceof Error) {
        return "error";
    }
    if (value instanceof Promise) {
        return "promise";
    }
    return typeof value;
};

console.log(typeOf(null));             
console.log(typeOf(undefined));        
console.log(typeOf(42));              
console.log(typeOf(NaN));              
console.log(typeOf("hello"));          
console.log(typeOf(true));             
console.log(typeOf(Symbol()));         
console.log(typeOf([]));               
console.log(typeOf({}));               
console.log(typeOf(() => {}));          
console.log(typeOf(new Date()));        
console.log(typeOf(new Map()));         
console.log(typeOf(new Set()));         
console.log(typeOf(/abc/));            
console.log(typeOf(new Error()));       
console.log(typeOf(Promise.resolve())); 
