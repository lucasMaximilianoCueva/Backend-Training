import fs from "fs";

class File {
  constructor() {
    this.filePath = "./files/products.txt";
  }

  async read() {
    try {
      const users = await fs.promises.readFile(this.filePath, "utf-8");
      return JSON.parse(users);
    } catch (err) {
      return [];
    }
  }

  async save(title, price, thumbnail) {
    try {
      const products = await this.read();
      const newProduct = {
        id: products.length + 1,
        title,
        price,
        thumbnail,
      };
      products.push(newProduct);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(products, null, 2)
      );
      return `Added ${title} to the product list`;
    } catch (err) {
      console.log("Something went wrong", err);
    }
  }

  async delete() {
    await fs.promises.unlink(this.filePath);
    console.log('Deleted')
  }
}

const main = async () => {
  const fileHandler = new File();
  console.log("Read: ", await fileHandler.read());
  console.log(
    await fileHandler.save(
      "Mercedes Benz C Class",
      48000,
      "https://i.blogs.es/4ba188/mercedes-benz-c-class-2019-1600-01/1366_2000.jpg"
    )
  );
  console.log(
    await fileHandler.save(
      "BMW Serie 3",
      45000,
      "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/9888/bmw-serie-3-2018-delantera.jpg?resize=980:*"
    )
  );
  console.log("Read: ", await fileHandler.read());
   setTimeout(async () => {
    await fileHandler.delete();
    console.log("Read: ", await fileHandler.read());
  }, 3000)
};

main();
