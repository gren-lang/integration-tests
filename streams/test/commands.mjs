import * as path from "node:path";
import * as fs from "node:fs";
import { runner } from "clet";

const baseDir = path.resolve("bin");

describe("Streams", () => {
  after(() => {
    fs.rmSync(path.resolve("bin/compressed.txt"))
  })
  
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
  
  it("fromArray", async () => {
    await runner()
      .cwd(baseDir)
      .fork("app", ["fromArray"], {})
      .stdout("onetwofour")
      .stdout("CLOSED");
  });
  
  it("errorHandling", async () => {
    await runner()
      .cwd(baseDir)
      .fork("app", ["errorHandling"], {})
      .stdout("CANCELLED: foo")
  });
  
  it("compression", async () => {
    await runner()
      .cwd(baseDir)
      .fork("app", ["compression"], {})
      .stdin(/input:/, "this is a very\n long compression test\n")
      .stdout("Done")
  });
  
  it("decompression", async () => {
    await runner()
      .cwd(baseDir)
      .fork("app", ["decompression"], {})
      .stdout("this is a very\n long compression test")
  });
});
