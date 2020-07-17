function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var mile = feetToMile(0.000005);
console.log(mile);