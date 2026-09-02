class AppError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode =statusCode;
        this.success = false;
    }
}

export default AppError

// A class is basically a blueprint for creatig objects
// and constructor() runs automatically when you create an object with new
// ex: class User{ 
//  constructor(parameter1,parameter2){
//     this.parameter1 = parameter1,
//     this.parameter2 = parameter2
//  }
// }

