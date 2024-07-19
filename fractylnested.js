if (typeof fractylNested == "undefined"){var fractylNested = {load:function(){
  new Thing("fart",["nitrogen","oxygen","carbon","hydrogen","methane","sulfur"]);
  new Thing("dwarf planet",["rock","ice,50%","planet core","moon,5%"]);
  Things["village"].contains.push("cemetery,5%");
  Things["living-room"].contains.push("fart,5%");
  Things["wooden frame"].contains.push("nails,80%");
  Things["multiverse"].namegen.push("fractylverse");
  Things["star system"].contains.splice(20,0,"dwarf planet,0-5");
}};};
console.log("FractylNested accessed.");
if (typeof fractylNested.Activated == "undefined") {
  fractylNested.Activated = true;
  console.log("FractylNested activated.")
  fractylNested.load();
} else {
  console.log("FractylNested already loaded.")
};
