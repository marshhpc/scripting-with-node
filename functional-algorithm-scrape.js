const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFileFunctional = String(
   fs.readFileSync("./html-pages/functional-algorithm.html")
);
const componentsFunctional = getComponents(sourceFileFunctional);

const componentObjs = componentsFunctional.map((component, orderedIndex) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "Functional&Algorithm", // scraping the basic-functions.html
      typeNum: 300, //
      isFavorite: false, // boolean
      order: 300 + orderedIndex,
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

const targetFile = "./json-files/functional-algorithm.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedIndex));
