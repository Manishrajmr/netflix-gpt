export const checkValidateData = (email,password,name) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);


    // if(!isEmailValid && !isPasswordValid) return "email & password are not valid"
    // if(!isEmailValid) return "Email ID is not valid";
    // if(!isPasswordValid) return "Password is not valid";

    // if(!isNameValid){
    //     return "incorrect name"
    // }

    if(!isEmailValid && !isPasswordValid ){
        return "email & password are not valid";
    }
    else if(!isEmailValid){
        return "Email ID is not valid";
    }
    else if(!isPasswordValid){
        return "Password is not valid";
    }

    return null;

};