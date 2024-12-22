import * as path from "node:path";
import * as childProc from "node:child_process";

let proc;

export function mochaGlobalSetup() {
  const appPath = path.resolve(import.meta.dirname, "../app");
  proc = childProc.exec(appPath);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, 1000);
  })
}

export function mochaGlobalTeardown() {
  proc.kill();
}
