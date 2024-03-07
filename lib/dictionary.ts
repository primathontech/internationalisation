import { Locale } from "../i18n.config";

const HeaderData = {
  en: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderData
    ),
  hi: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderDataHindi
    ),
  pa: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderDataPunjabi
    ),
  mr: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderDataMarathi
    ),
  ta: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderDataTamil
    ),
  te: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderDataTelugu
    ),
  gu: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderDataGujarati
    ),
  kn: () =>
    import("../utils/appConstants/HeaderData").then(
      (module) => module.HeaderDataKannada
    ),
};

export const getHeaderData = async (locale: Locale) => HeaderData[locale]();
