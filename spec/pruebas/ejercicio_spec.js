const arrayExercise = require('../../src/ejercicio');

describe('Información del tamaño del Array: ', () => {
    
    it('Se valida el tamaño del mismo', () => {
        let value = arrayExercise.size([2,3,4],['d',5,'Holaaa']);
        expect(value).toBe(true);
    });

    it('Promedio del Array 1', () => {
        let value = arrayExercise.averageArr1([12,34,40,12]);
        expect(value).toBeGreaterThan(5);
    });
    
    it('Promedio del Array 2', () => {
        let value = arrayExercise.averageArr2([10,10,10]);
        expect(value).toBeGreaterThan(5);
    });
    
    it('Suma de los Array', () => {
        let value = arrayExercise.sumArrs([10,2,4],[2,3,5]);
        expect(value).toEqual([12,5,9]);
    });
    
});
