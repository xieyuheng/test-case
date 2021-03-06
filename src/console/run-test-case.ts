import Path from "path"

export async function runTestCase(path: string): Promise<void> {
  const testModule = require(Path.resolve(path))

  if (!testModule.default?.instanceofTestCase) return

  const testCase = new testModule.default()

  const names = Object.getOwnPropertyNames(Object.getPrototypeOf(testCase))

  for (const name of names) {
    if (name.startsWith("test") || name.includes(" ")) {
      console.log({ path, name })
      const action = testCase[name].bind(testCase)
      action()
    }
  }
}
