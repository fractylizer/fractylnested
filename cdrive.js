if (typeof cdriveMod == "undefined"){var cdriveMod = {load:function(){
  Things = [];
  new Thing("universe",["documents","downloads","pictures","videos","music,50%"]);
  new Thing("documents");
}};};
console.log("C:/ accessed.");
if (typeof cdriveMod.Activated == "undefined") {
  cdriveMod.Activated = true;
  console.log("C:/ activated.")
  cdriveMod.load();
} else {
  console.log("C:/ already loaded.")
};