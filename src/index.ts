import commander from "commander";

export interface CLIArguments {
  message: string;
  flag: boolean;
}

const getArguments = (): CLIArguments => {
  commander
    .version("1.0.0")
    .option("--message [message]", "input text")
    .option("--flag", "boolean flag")
    .parse(process.argv);
  return {
    message: commander["message"] || "",
    flag: !!commander["flag"],
  }
}

const main = () => {
  const params = getArguments();
  console.log(params);
}

main();
