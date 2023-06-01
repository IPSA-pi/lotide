const printItems = (array) => {
  array.map( e => !Array.isArray(e) ? console.log(e) : printItems(e));
};

// printItems(["A", ["B", "C"], "D", "E"]);
printItems(["A", [["B", ["C"]], [[["D"]], "E"]]]);