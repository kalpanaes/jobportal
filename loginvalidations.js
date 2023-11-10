
function loginvalidations(values) {
    let errors = {};
    const email_pattern = /\S+@\S+\.\S+/

    if(values.email === ""){
        errors.email = "Email should not be empty"
    }else if(!email_pattern.test(values.email)){
        errors.email = "Invalid email"
    }else{
        errors.email = ""
    }

    if(values.password === ""){
        errors.password = "Password should not be empty"
    }else if(values.password.length < 6){
        errors.password = "Password should be at least 6 characters"
    }else{
        errors.password = ""
    }

    return errors;

}

export default loginvalidations