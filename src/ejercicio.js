let arrayExercise={}

function size(arr1,arr2) {
    if ((arr1.length>=3 && arr1.length<=8) && (arr2.length>=3&& arr2.length<=8)) {
        return true;
    }else{
        return false;
    }
}

function averageArr1(arr1) {
    let sum=0;

    for (let i = 0; i < arr1.length; i++) {
        sum+=arr1[i];
    }

    let prom=sum/arr1.length;

    return prom;
    // if (prom>=5) {
    //     return true;
    // }else{
    //     return false;
    // }
}

function averageArr2(arr2) {
    let sum=0;
    
    for (let i = 0; i < arr2.length; i++) {
        sum+=arr2[i];
    }
    let prom=sum/arr2.length;
    return prom;
    // if (prom>=5) {
    //     return true;
    // }else{
    //     return false;
    // }
}

function sumArrs(arr1,arr2) {
    let sum=[];
    let aux=0;

    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            sum[aux]=arr1[i]+arr2[i];
            aux++;
        }
    }else{
        return 'Error no se puede sumar'
    }

    return sum;
}

arrayExercise.size=size;
arrayExercise.averageArr1=averageArr1;
arrayExercise.averageArr2=averageArr2;
arrayExercise.sumArrs=sumArrs;


module.exports = arrayExercise;