var fs = require("fs");
var config = require("./config.json");

nome = "PRODUTO TESTE2";
quadro = 10;

// config.EPSList[nome] = {
//   produtoName: nome,
//   quadroCheio: quadro,
//   dataList: []
// };

let x = {
  data: "11/02/2020",
  quantidade: "35%"
};

if (!config.EPSList[nome]) {
  config.EPSList[nome] = {
    produtoName: nome,
    quadroCheio: quadro,
    dataList: []
  };
}

let isFounded = false;

config.EPSList[nome].dataList.forEach((element, index) => {
  if (element.data == x.data) {
    isFounded = true;
    config.EPSList[nome].dataList[index] = x;
  }
});

if (!isFounded) config.EPSList[nome].dataList.push(x);

fs.writeFileSync("config.json", JSON.stringify(config));

let keys = Object.keys(config.EPSList);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  config.EPSList[keys[i]].dataList.forEach((element, index) => {
    console.log(element);
    //Inserir elemento na Planilha keys[i] com valor element.quantidade na posição element.data
  });
  console.log("\n");
}
