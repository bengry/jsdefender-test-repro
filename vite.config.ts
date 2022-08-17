import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import JSDefenderPluginModule from "@preemptive/jsdefender-rollup-plugin";

// Minor hack to get the plugin to plan nice with the default Vite configuration, doesn't matter later on where it's being used.
const JSDefenderPlugin: typeof JSDefenderPluginModule = (
  JSDefenderPluginModule as any
).default;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: "hidden",
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    JSDefenderPlugin({
      email: process.env.JSDEFENDER_EMAIL,
      license: process.env.JSDEFENDER_LICENSE,
      excludeChunks: ["vendor"],
      sourceMaps: true,
      protectUserModulesOnly: true,
      settings: {
        stringLiterals: true,
        // booleanLiterals: true,
        // integerLiterals: true,
        // controlFlow: true,
        // globalObjectHiding: true,
        // localDeclarations: true,
      },
    }),
  ],
});
