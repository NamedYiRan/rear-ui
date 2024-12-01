import Message from "./methods";
import { withInstallFunction } from "@rear-ui/utils";

export const ErMessage = withInstallFunction(Message, "$message");

export * from "./types";
