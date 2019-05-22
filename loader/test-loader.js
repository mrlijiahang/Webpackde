
  
function reverse(string){
    return string.split('').reverse().join('')
}
module.exports = function(content){
    var result = reverse(content)
    return `module.exports = ${result}`;
}