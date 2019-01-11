const checkAnagram = (str1,str2,callback) => {
    let flag = true;
    if (str1.length != str2.length){
        flag = false;
    } else {
        for (var i =0; i<str1.length ; i++){
            if(!str1.includes(str2[i])){
                flag = false;
            }
        }
    }
    callback(flag);
}

module.exports = {
    checkAnagram
}