export function sudoku() {


  // var bigArrays =[5, 3, "", "", 7, "", "", "", "", 6, "", "", 1, 9, 5, "", "", "", "", 9, 8, "", "", "", "", 6, "", 8, "", "", "", 6, "", "", "", 3, 4, "", "", 8, "", 3, "", "", 1, 7, "", "", "", 2, "", "", "", 6, "", 6, "", "", "", "", 2, 8, "", "", "", "", 4, 1, 9, "", "", 5, "", "", "", "", 8, "", "", 7, 9];

  var bigArrays =[5,2,3];

  var numCheck = bigArrays.map(function(bigArray) {
    if (bigArray < 1 ) {
      return;
    } else if (bigArray > 9) {
      return;
    } else if (bigArray === "") {
      return;
    } else {
      console.log("Pass: ",bigArray);
    }
    return "Hello";
  });



}
