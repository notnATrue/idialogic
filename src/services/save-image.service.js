import fs from "fs";

export class SaveImageService {

  static async SaveImage(name, path) {
    const parsedName = await parsedName(name);
    // const incomingImage = await fs.readFile(path);
    // const data = new Uint8Array(Buffer.from('Hello Node.js'));
    const readStream = fs.createReadStream(path);
    console.log(readStream);
    // await fs.writeFile("")
  }

  static async parseName(name) {
    const prepareName = name.split(".")[0];
    const parsedName = prepareName + ".jpg";
    return parsedName;
  }

}