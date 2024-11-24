import * as path from "node:path";
import { runner } from "clet";

const baseDir = path.resolve("bin");

describe("Requests", () => {
  it("Hello, world", async () => {
    await runner()
      .cwd(baseDir)
      .fork("app", ["hello world"], {})
      .stdout("Hello, world!");
  });
});
