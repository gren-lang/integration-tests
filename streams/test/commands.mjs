import * as path from "node:path";
import { runner } from "clet";

const baseDir = path.resolve("bin");

describe("Streams", () => {
  it("Hello, world", async () => {
    await runner()
      .cwd(baseDir)
      .fork("app", ["hello world"], {})
      .stdout("Hello, world!");
  });
  
  it("input and output", async () => {
    await runner()
      .cwd(baseDir)
      .fork("app", ["greet"], {})
      .stdin(/name:/, "gren fanboy")
      .stdout("Hello gren fanboy\n")
  });
});
