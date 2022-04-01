import { equal } from "../ut/equal"

export function assertEquals(x: any, y: any): void {
  if (!equal(x, y)) {
    throw new Error(
      [
        "I fail to assert equal, the following two values are not equal.",
        `  x: ${JSON.stringify(x)}`,
        `  y: ${JSON.stringify(y)}`,
      ].join("\n")
    )
  }
}

export function assertNotEquals(x: any, y: any): void {
  if (equal(x, y)) {
    throw new Error(
      [
        "I fail to assert not equal, the following two values are equal.",
        `  x: ${JSON.stringify(x)}`,
        `  y: ${JSON.stringify(y)}`,
      ].join("\n")
    )
  }
}
