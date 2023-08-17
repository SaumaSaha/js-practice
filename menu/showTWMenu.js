function joinItems (item1, item2, item3, item4) {
  let menu="";

  if(item1) menu += item1;
  if(item2) menu += ", " + item2;
  if(item3) menu += ", " + item3;
  if(item4) menu += ", " + item4;

  return menu;
}
function showMenu (day) {
  const idli = "IDLI";
  const sambar = "SAMBAR";
  const chutney = "CHUTNEY";
  const dosa = "DOSA";
  const alooParatha = "ALOO PARATHA";
  const pongal = "PONGAL";
  const puri = "PURI";
  const alooSabzi = "ALOO SABZI";
  const dahi = "DAHI";
  const vada = "VADA";

  switch (day) {
    case "MONDAY" : return joinItems(idli, vada, sambar, chutney);
    case "TUESDAY" : return joinItems(alooParatha, dahi, chutney);
    case "WEDNESDAY" : return joinItems(dosa, alooSabzi, sambar, chutney);
    case "THURSDAY" : return joinItems(puri, alooSabzi, chutney);
    case "FRIDAY" : return joinItems(idli, vada, sambar, chutney);
    case "SATURDAY" : return joinItems(dosa, sambar, chutney);
    case "SUNDAY" : return "NO FOOD!!!"; 
  }
}

console.log(showMenu("MONDAY"));
console.log(showMenu("TUESDAY"));
console.log(showMenu("WEDNESDAY"));
console.log(showMenu("THURSDAY"));
console.log(showMenu("FRIDAY"));
console.log(showMenu("SATURDAY"));
console.log(showMenu("SUNDAY"));
