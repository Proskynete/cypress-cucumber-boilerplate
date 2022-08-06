import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const dotenvPlugin = require("cypress-dotenv");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) {
  await addCucumberPreprocessorPlugin(on, config);

  const _config = dotenvPlugin(config);
  _config.env = {};

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: _config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return _config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    chromeWebSecurity: false,
    setupNodeEvents,
  },
});
