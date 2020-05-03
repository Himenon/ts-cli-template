import commander from "commander";

export interface CLIArguments {
  message: string;
  flag: boolean;
}

const getArguments = (version: string): CLIArguments => {
  commander
    .version(version)
    .option("--message [message]", "input text")
    .option("--flag", "boolean flag")
    .parse(process.argv);
  return {
    message: commander["message"] || "",
    flag: !!commander["flag"],
  }
}

export const main = (version: string) => {
  const params = getArguments(version);
  console.log(params);
}
