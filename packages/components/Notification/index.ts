import Notification from "./methods";
import { withInstallFunction } from "@rear-ui/utils";

export const ErNotification = withInstallFunction(
  Notification,
  "$notify"
);

export * from "./types";
