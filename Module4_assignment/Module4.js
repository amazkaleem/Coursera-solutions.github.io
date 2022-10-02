const name = ["Yaakov","Jen","John","jason","paul","frank","larry","paula","laura", "jim"];
//var name = new Array();
//name[0] = "Yaakov";
//name[1] = "Jen";
//name[2] = "John";
//name[3] = "jason";
//name[4] = "paul";
//name[5] = "frank";
//name[6] = "larry";
//name[7] = "paula";
//name[8] = "laura";
//name[9] = "jim";
console.log(name[i])
for (var i = 0; i < name.length; i ++) {
  if (name[i].charAt(0) === "J" || name[i].charAt(0) === "j") {
    console.log("Goodbye " + name[i])
  }
  else {
    console.log("Hello " + name[i])
  }
}
