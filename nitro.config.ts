import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  srcDir: "./src",
  serverAssets: [
    {
      baseName: "templates",
      dir: "./templates",
    },
  ],
});
