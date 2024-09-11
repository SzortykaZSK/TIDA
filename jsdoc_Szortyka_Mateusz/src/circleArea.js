/**
 * function to calculate circle area
 * @param {number} radius - radius (must be greater than zero)
 * @returns {number} - circle area
 * @throws {Error} - when radius is not greater than zero
 * @author Mateusz Szortyka 5D
 */

const calculateArea = (radius) =>{
    if(radius>0){
        return Math.PI*radius*radius
    }
    else{
        throw new Error('radius mast be greater than zero!')
    }
}