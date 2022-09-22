/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  ignoredRouteFiles: ["**/.*"],
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  publicPath: "/build/",
};