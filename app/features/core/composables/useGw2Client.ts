import {
  GW2Api,
  ApiLanguage,
  setLogLevel,
  LogLevel,
  enableLogColors,
} from "guildwars2-ts";

export default () => {
  const api: GW2Api = new GW2Api({
    // Some endpoints require authentication
    token: "YOUR-TOKEN-HERE",
    language: ApiLanguage.Spanish,
    // Optional, but recommended
    rateLimitRetry: true,
    // When using guildwars2-ts in a browser, setting this is required to avoid CORS errors. Can be omitted otherwise
    inBrowser: true,
  });

  // Set to error by default, so you can set it to info for extra verbosity
  setLogLevel(LogLevel.info);
  // Set to true by default, but recommended to be turned off, if your log does not render correctly
  enableLogColors(false);

  return { Gw2Client: api };
};
