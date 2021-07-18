let Math ={}

function suma(a,b) {

    if (typeof a==='string' || typeof b==='string') {
        return 'Error';
    }else{
        return a+b;
    }
}

function resta(a,b) {
    return a-b;
}

function multiplicar(a,b) {
    return a*b;
}

function dividir(a,b) {
    
    if (b!==0) {
        return a/b;
    }else{
        return "Error";
    }
    
}

Math.suma=suma;
Math.resta=resta;
Math.multiplicar=multiplicar;
Math.dividir=dividir;

module.exports = Math;