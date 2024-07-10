var fractylNested = {
  load:function(){
    new Thing("fart",["nitrogen","oxygen","carbon","hydrogen","methane","sulfur"]);
    Things["village"].contains.push("cemetery,5%");
    Things["living-room"].contains.push("fart,5%");
    Things["wooden frame"].contains.push("nails,80%");
  }
};
console.log("FractylNested accessed.");
if (typeof fractylNested.Activated == "undefined") {
  fractylNested.Activated = true;
  console.log("FractylNested activated.")
  fractylNested.load();
} else {
  console.log("FractylNested already loaded.")
};
