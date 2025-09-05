

export function whatsMyType<T>( argument: T):T{

    return argument;

}

const amIString = whatsMyType<string>('Hola Mundo es time');
const amINumber = whatsMyType<number>(102);
const amIArray = whatsMyType<number[]>([1,2,3,4,5,6]);


console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('^'))