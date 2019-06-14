function palindrome(message){
    // wirte your code here
    if (typeof message !== 'string') {
        return false
    } 
    return message.split('').reverse().join('') === message
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true
