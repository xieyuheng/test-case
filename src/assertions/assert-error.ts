class SuccessIsError {
  constructor(public message: string) {}
}

export function assertError(f: () => void): Error {
  try {
    f()
    throw new SuccessIsError(
      [
        "I fail to assert error, the function runs without error.",
        `  f: ${f.toString()}`,
      ].join("\n")
    )
  } catch (error) {
    if (error instanceof Error) return error
    if (error instanceof SuccessIsError) throw new Error(error.message)
    throw new Error(
      [
        "I fail to assert error,",
        "the thrown value is not an instance of Error.",
        `  thrown value: ${JSON.stringify(error)}`,
      ].join("\n")
    )
  }
}

export async function assertErrorAsync(f: () => Promise<void>): Promise<Error> {
  try {
    await f()
    throw new SuccessIsError(
      [
        "I fail to assert error, the function runs without error.",
        `  f: ${f.toString()}`,
      ].join("\n")
    )
  } catch (error) {
    if (error instanceof Error) return error
    if (error instanceof SuccessIsError) throw new Error(error.message)
    throw new Error(
      [
        "I fail to assert error,",
        "the thrown value is not an instance of Error.",
        `  thrown value: ${JSON.stringify(error)}`,
      ].join("\n")
    )
  }
}
