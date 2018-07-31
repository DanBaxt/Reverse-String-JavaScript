function reverseString(str) {
    var newString = "";
    //The code will read only read so far as the string is going
    //i must be greater than 0, so it will start with the first letter
    //i-- means it will start from the end
    //+= will make it start from i, the end point, and go backwards to create our new string
    for(var i = str.length; i >=0; i--) {
        newString += str[i];
    }
    return newString;

}


console.log(reverseString("hello"));