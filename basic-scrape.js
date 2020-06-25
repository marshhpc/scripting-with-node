const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFileBasic = String(fs.readFileSync("html-pages/basic-functions.html")
);


const components = getComponents(sourceFileBasic);
const 

const componentObjs = components.map((component) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "basic", // scraping the basic-functions.html
      typeNum: 100, // designated for basic "100"
      isFavorite: false, // boolean
   };
});

// const reversedObjs = componentObjs.reverse();
//i would use if i ordered the opposite way on html

const orderedObjs = [];
for (let i = 0; i < componentObjs.length; i++) {
   //reverseObjs would be placed here instead of componentObjs
   const obj = componentObjs[i];
   obj.order = obj.typeNum + i;
   orderedObjs.push(obj);
}

console.log(orderedObjs);

const targetFile = "./json-files/basic.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
