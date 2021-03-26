const words = async (sampleTxt, txtQuantity) => {
  const sampleText = sampleTxt.split(" ");
  let quantity = 0;
  for (const word of sampleText) {
    quantity++;
    console.log(
      await new Promise((res) => {
        setTimeout(() => {
          res(word);
        }, 1 * 300);
      })
    );
  }txtQuantity(quantity);
};

const sampleText1 =
  "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.";

const sampleText2 =
  "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.";

const sampleText3 =
  "With MongoDB Atlas, your self-healing clusters are made up of geographically distributed database instances to ensure no single point of failure. ";

const end = (quantity) => {
  console.log(`[ Complete Process. Quantity of Words: ${quantity} ]`);
};

(async function completeProcess() {
  await words(sampleText1, end);
  await words(sampleText2, end);
  await words(sampleText3, end);
})();
