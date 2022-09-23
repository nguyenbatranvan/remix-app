module.exports = {
    serverBuildTarget: "vercel",
    ignoredRouteFiles: ["**/.*"],
    server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
    publicPath: "/build/",
    mdx: async filename => {
        const [rehypeHighlight] = await Promise.all([
            import("rehype-highlight").then(mod => mod.default)
        ])
        return {
            rehypePlugins: [rehypeHighlight]
        }
    }
};
