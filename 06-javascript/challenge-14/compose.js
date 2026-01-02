const addOne = (x) => (x+1);

const double = (x)=> (x*2);
   
const square = (x) => (x*x);

function compose(){
    const fns = arguments;

    return function(value){
        let result = value;

        for(let i=fns.length-1;i>=0;i--){
            result = fns[i](result);  //square(3)
        }
        return result;
    };
    
}

function pipe(){
    const fns = arguments;

    return function(value){
        let result = value;

        for(let i=0;i<fns.length;i++){
            result = fns[i](result);
        }
        return result;
    };
}

const composed = compose(addOne,double,square);
console.log(composed(4));

const piped = pipe(square,double,addOne);
console.log(piped(3));