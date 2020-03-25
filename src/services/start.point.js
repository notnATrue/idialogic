import fs from "fs";
import regeneratorRuntime from "regenerator-runtime";

export class StartPoint {
  static async start() {
    const paths = fs.readdir(".././static/images/incomig", async (data) => {
      return data;
    });
    console.log(paths);
    return paths;
  }
}

StartPoint.start();
// module.exports = {
//   StartPoint,
// }
