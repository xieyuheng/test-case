import { Command, CommandRunner } from "@xieyuheng/command-line"
import { ty } from "@xieyuheng/ty"
import { runTestCase } from "../run-test-case"

type Args = { file: string }
type Opts = {}

export class RunCommand extends Command<Args, Opts> {
  name = "run"

  description = "Run a file which contains a TestCase subclass."

  args = { file: ty.string() }
  opts = {}

  // prettier-ignore
  help(runner: CommandRunner): string {
    const { blue } = this.colors

    return [
      `The ${blue(this.name)} command run a file of TestCase.`,
      ``,
      blue(`  ${runner.name} ${this.name} lib/examples/number.case.js`),
      ``,
    ].join("\n")
  }

  async execute(argv: Args & Opts, runner: CommandRunner): Promise<void> {
    await runTestCase(argv.file)
  }
}
