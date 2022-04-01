export function assert(value: any): void {
  if (!value) {
    throw new Error(
      [
        //
        "I fail to assert truthy",
        `  value: ${JSON.stringify(value)}`,
      ].join("\n")
    )
  }
}
