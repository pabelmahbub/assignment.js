function feetToMile(feet){
    // 1 mile = 5280 feet
    var mile = feet / 5280;
    return mile;
}
var mile = feetToMile(0.000005);
console.log(mile);


//least name

var tinyFriends =["abir","Barack","John","Bol"];
var min = tinyFriends[0].length;
for(var i=0;i < min; i++){
    if (tinyFriends[0] < min){
        min =tinyFriends;
    }
}
console.log(tinyFriends);

