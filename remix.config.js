module.exports = {
    serverBuildTarget: "vercel",
    ignoredRouteFiles: ["**/.*"],
    server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
    publicPath: "/build/",
    mdx: async filename => {
        const [rehypeHighlight, rehypePrismPlus] = await Promise.all([
            import("rehype-highlight").then(mod => mod.default),
            import("rehype-prism-plus").then(mode => mode.default)
        ])
        return {
            rehypePlugins: [rehypeHighlight, rehypePrismPlus]
        }
    }
};
