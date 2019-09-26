require("webassembly")
  .load("program.wasm")
  .then(module => {
    console.log("1 + 2 = " + module.exports.add(1, 2));
  });