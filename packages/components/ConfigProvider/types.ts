import type { Language, TranslatePair } from "@rear-ui/locale";

export interface ConfigProviderProps {
  locale?: Language;
  extendsI18nMsg?: TranslatePair;
}
