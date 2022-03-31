import { Command } from "@enchanterjs/enchanter/lib/command"
import { CommandRunner } from "@enchanterjs/enchanter/lib/command-runner"
import { CommonHelpCommand } from "@enchanterjs/enchanter/lib/commands"
import ty from "@xieyuheng/ty"

type Args = { file?: string }
type Opts = {}

export class RunCommand extends Command<Args, Opts> {
  name = "run"

  description = "Run a file which contains a TestCase subclass."

  args = { file: ty.optional(ty.string()) }
  opts = {}

  // prettier-ignore
  help(runner: CommandRunner): string {
    const { blue } = this.colors

    return [
      `The ${blue(this.name)} command run a file of TestCase.`,
      ``,
      blue(`  ${runner.name} ${this.name} lib/parser/parser.test.js`),
      ``,
      `It is the default command, thus you can drop the command name.`,
      ``,
      blue(`  ${runner.name} lib/parser/parser.test.js`),
      ``,
    ].join("\n")
  }

  async execute(argv: Args & Opts, runner: CommandRunner): Promise<void> {
    if (!argv.file) {
      new CommonHelpCommand().execute(argv as any, runner)
      return
    }

    console.log(argv)
  }
}
