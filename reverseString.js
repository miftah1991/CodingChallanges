const reverse = (input)=>{
    var reverseString ="";
    for(var i = input.length-1; i >=0; i--){
        reverseString +=input[i];
    }
    return reverseString;
}
module.exports =reverse;
