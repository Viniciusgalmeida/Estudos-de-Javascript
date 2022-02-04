// Petro Sernivka - Codewars 
//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. 
//Your function accepts three arguments:
// - number of pillars (≥ 1);
// - distance between pillars (10 - 30 meters);
// - width of the pillar (10 - 50 centimeters).
//Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

let num_pill = 5;
let dist = 15;
let width = 30;


//function pillars(num_pill, dist, width) {
//  if (num_pill <= 1 || dist < 10 || dist > 30 || width < 10 || width > 50 )
//    return 0
//  else {
//  let dist_first_last = (width * (num_pill - 2)) + ((dist * 100) * (num_pill - 1));
//  return dist_first_last;
//  }
//}

//function pillars(num_pill, dist, width) {
//  return num_pill == 1  ? 0 : ((num_pill-2)*width) + ((100*dist)*(num_pill-1)) 
//}

function pillars(num_pill, dist, width) {
  if (num_pill = (width * (num_pill - 2)) + ((dist * 100) * (num_pill - 1)))
  return dist_first_last
  else dist_first_last = 0
  return dist_first_last
}




console.log(pillars(num_pill, dist, width) )
