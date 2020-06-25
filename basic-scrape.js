const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFileBasic = String(
   fs.readFileSync("./html-pages/basic-functions.html")
);
const sourceFileIntermediate = String(
   fs.readFileSync("./html-pages/intermediate-functions.html")
);
const sourceFileFunctional = String(
   fs.readFileSync("./html-pages/functional-algorithm.html")
);

const componentsBasic = getComponents(sourceFileBasic);
const componentsIntermediate = getComponents(sourceFileIntermediate);
const componentsFunctional = getComponents(sourceFileFunctional);

const componentObjsBasic = componentsBasic.map((component, orderedIndex) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "basic", // scraping the basic-functions.html
      typeNum: 100, // designated for basic "100"
      isFavorite: false, // boolean
      order: 100 + orderedIndex,
   };
});

const componentsObjsIntermediate = componentsIntermediate.map(
   (component, orderedIndex) => {
      return {
         name: getName(component)[0],
         desc: trim(getDesc(component)[0]),
         inputs: getInputs(component).length,
         type: "Intermediate", // scraping the basic-functions.html
         typeNum: 100, // designated for basic "100"
         isFavorite: false, // boolean
         order: 200 + orderedIndex,
      };
   }
);

const componentsObjsFunctional = componentsFunctional.map(
   (component, orderedIndex) => {
      return {
         name: getName(component)[0],
         desc: trim(getDesc(component)[0]),
         inputs: getInputs(component).length,
         type: "Functional&Algorithm", // scraping the basic-functions.html
         typeNum: 100, // designated for basic "100"
         isFavorite: false, // boolean
         order: 300 + orderedIndex,
      };
   }
);

// const reversedObjs = componentObjs.reverse();
//i would use if i ordered the opposite way on html

const orderedIndex = [];
for (let i = 0; i < componentObjs.length; i++) {
   //reverseObjs would be placed here instead of componentObjs
   const obj = componentObjs[i];
   obj.order = obj.typeNum + i;
   orderedIndex.push(obj);
}
let orderedObjs = componentObjsBasic.concat(
   componentsObjsIntermediate,
   componentsObjsFunctional
);

console.log(orderedObjs);

const targetFile = "./json-files/basic.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
