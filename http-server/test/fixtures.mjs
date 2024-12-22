import * as childProc from "node:child_process";

let proc;

export function mochaGlobalSetup() {
  proc = childProc.exec("./app");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, 100);
  })
}

export function mochaGlobalTeardown() {
  proc.kill();
}
