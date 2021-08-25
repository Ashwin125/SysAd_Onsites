const checkPassword = (password) => {
    if(password.length < 4) 
        return false;

    password = password.trim();
    
    let lower = 0;
    let upper = 0;
    let number = 0;
    let special = 0;

    for(let i = 0; i < password.length; ++i) {
        if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
            ++lower;
        } else if (password.charCodeAt(i) >= 64 && password.charCodeAt(i) <= 90) {
            ++upper;
        } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
            ++number;
        } else {

            let temp = password[i];

            if(temp.trim() !== '')
                ++special;
            else
                return false;
        }
    }

    if(lower < 1 || upper < 1 || number < 1 || special < 1) 
        return false;
    return true;

}


const checkRollno = rollno => {
    
    rollno = Math.floor(rollno);
    
    if(rollno.toString().length != 9) 
        return false;
 
    if(rollno % 1000 > 200)
        return false;
    
    return true;

}

module.exports = {
    checkRollno: checkRollno,
    checkPassword: checkPassword,
}