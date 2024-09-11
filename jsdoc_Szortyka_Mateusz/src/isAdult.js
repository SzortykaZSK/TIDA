/**
 * is adult function
 * @param {number} age - age  
 * @returns {boolean} - if is adult
 * @throws {Error} - throws when age is not greater than zero
 * @author Mateusz Szortyka 5D
 */

const isAdult = (age) =>{
    if(age > 0){
        if(age>=18){
            return true
        }
        else{
            return false
        }
    }
    else{
        throw new Error('age must be greater than zero')
    }
    
}