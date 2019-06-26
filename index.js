const bots = {
  input: require("./bots/inputbot"),
  textbot: require("./bots/textbot"),
  audiobot: require("./bots/audiobot"),
  imagebot: require("./bots/imagebot")
};

//

async function main() {
  bots.input();

  //
}

main();
