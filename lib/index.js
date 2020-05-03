"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const getArguments = (version) => {
    commander_1.default
        .version(version)
        .option("--message [message]", "input text")
        .option("--flag", "boolean flag")
        .parse(process.argv);
    return {
        message: commander_1.default["message"] || "",
        flag: !!commander_1.default["flag"],
    };
};
exports.main = (version) => {
    const params = getArguments(version);
    console.log(params);
};
