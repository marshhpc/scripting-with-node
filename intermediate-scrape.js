const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFileIntermediate = String(
   fs.readFileSync("./html-pages/intermediate-functions.html")
);

const componentsIntermediate = getComponents(sourceFileIntermediate);

const componentObjs = componentsIntermediate.map((component, orderedIndex) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "basic", // scraping the basic-functions.html
      typeNum: 200, // designated for intermediate "200"
      isFavorite: false, // boolean
      order: 200 + orderedIndex,
   };
});

// const reversedObjs = componentObjs.reverse();
//i would use if i ordered the opposite way on html

const orderedIndex = [];
for (let i = 0; i < componentObjs.length; i++) {
   //reverseObjs would be placed here instead of componentObjs
   const obj = componentObjs[i];
   obj.order = obj.typeNum + i;
   orderedIndex.push(obj);
}

console.log(orderedIndex);

const targetFile = "./json-files/intermediate.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedIndex));
