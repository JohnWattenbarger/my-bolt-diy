// remix.config.js
import { createAdapter } from "@remix-run/adapter-static";

const { getConfig } = createAdapter({
    // Adjust these if needed
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    ignoredRouteFiles: ["**/.*"],

    // Where to export the static site to
    outputDirectory: "build",
});

export default getConfig();
