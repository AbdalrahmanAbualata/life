

 var userName = prompt("Enter your Name Plz ? ");
console.log(userName);
alert(" hello (( "+ userName +" )) welcome to our Website ")

document.write("<p style='color:#fff5fd'> *** good bye ( " +userName+ " )*** </p>")

var FavoriteSport = prompt("choose number for  your favorite sport : 1-football , 2-basketball , 3-bowling  ? ");
console.log(FavoriteSport);


 while ( FavoriteSport   != "1" && FavoriteSport != "2" && FavoriteSport != "3") {

    FavoriteSport = prompt("please enter the number OF your FavoriteSport : 1-football , 2-basketball , 3-bowling");
  }

 if (FavoriteSport == 1) {
  alert("you are the best") 
  var x = prompt("how many times do you want to see a football image ?")

for (var i=0 ; i < x ; i++) {  document.write ("<img src='https://www.cricketsoccer.com/wp-content/uploads/2020/12/1c5b1aa3386eeb2c21d633f04e2ddfbe.jpg' width=250px height=250p />")
console.log(i)}}

  else if (FavoriteSport == 2) {
  alert(" no bad sport ;-)")
  var x = prompt("how many times do you want to see  a basketball image ?")

for (var i=0 ; i < x ; i++) {  document.write ("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuIoVG4ZHwDBUXjLocwNM3P5Pa2mdYpYHhQ&usqp=CAU' width=250px height=250p />")
console.log(i)}
} else {
  alert("hello ")
  var x = prompt("how many times do you want to see a bowling image ?")

var imgFun = function () {
  var output='';
  var i = 0;
  while (i < x) {
    
   output = output +  "<img src='https://img.freepik.com/free-vector/bowling-game_134830-689.jpg?size=626&ext=jpg' width=250px height=250p />"

   console.log(i,output)

    i++;
  }

  return output;

}
}








// end
// bye bye ;) 

