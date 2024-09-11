/**
 * divide function
 * @param {number} a - licznik
 * @param {number} b - mianownik
 * @returns {number} - wynik dzielenia
 * @throws {Error} - przy dzieleniu przez zero
 * @example
 * const a = 10
 * const b = 2
 * 
 * const result = divide(a, b)
 * console.log(result)
 * //Logs: 5
 * @author Mateusz Szortyka 5D
 */

const divide = (a, b) =>{
    if(b!=0){
        return a/b
    }
    else{
        throw new Error("can't divide by zero")
    }
    
}