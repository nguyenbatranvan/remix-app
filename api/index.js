var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, {
      value: chunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@emotion/react"), import_react6 = require("@chakra-ui/react"), import_react7 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/utils/fetch-json.ts
var fetcherJSON = (url, config) => fetch(url, config).then((res) => res.json());

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], loader = async ({ request }) => {
  let location = new URL(request.url), config = await fetcherJSON(location.origin + "/config.json");
  return (0, import_node.json)(config);
}, Document = (0, import_react5.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react4.useContext)(ServerStyleContext), clientStyleData = (0, import_react4.useContext)(ClientStyleContext);
    return (0, import_react4.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, !1, {
              fileName: "app/root.tsx",
              lineNumber: 70,
              columnNumber: 21
            }, this))
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 80,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.ChakraProvider, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this);
}

// app/routes/product.tsx
var product_exports = {};
__export(product_exports, {
  default: () => Product,
  loader: () => loader2,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async (dataa) => {
  console.log("data", dataa);
  let data = await (await fetch("https://dummyjson.com/products")).json();
  return (0, import_node2.json)(data);
};
function Product() {
  let { products } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "This is product"
      }, void 0, !1, {
        fileName: "app/routes/product.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: async () => {
          let data = await (await fetch("https://dummyjson.com/products")).json();
        },
        children: "Load product"
      }, void 0, !1, {
        fileName: "app/routes/product.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: product.title
      }, product.id, !1, {
        fileName: "app/routes/product.tsx",
        lineNumber: 25,
        columnNumber: 34
      }, this))
    ]
  }, void 0, !0, {
    fileName: "app/routes/product.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this);
}
var meta2 = ({ data, parentsData }) => {
  let description = data.products.map((product) => product.title);
  return console.log("par", parentsData), {
    title: "Product app",
    description: `page is seo product ${description.join(",")}`
  };
};

// app/routes/blogs.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => Blogs,
  loader: () => loader3,
  meta: () => meta3
});
var import_node3 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/json/json-blog.json
var json_blog_default = {
  posts: [
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: [
        "history",
        "american",
        "crime"
      ],
      reactions: 2
    },
    {
      id: 2,
      title: "He was an expert but not in a discipline",
      body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      userId: 13,
      tags: [
        "french",
        "fiction",
        "english"
      ],
      reactions: 2
    },
    {
      id: 3,
      title: "Dave watched as the forest burned up on the hill.",
      body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      userId: 32,
      tags: [
        "magical",
        "history",
        "french"
      ],
      reactions: 5
    },
    {
      id: 4,
      title: "All he wanted was a candy bar.",
      body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
      userId: 12,
      tags: [
        "mystery",
        "english",
        "american"
      ],
      reactions: 1
    },
    {
      id: 5,
      title: "Hopes and dreams were dashed that day.",
      body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      userId: 41,
      tags: [
        "crime",
        "mystery",
        "love"
      ],
      reactions: 2
    },
    {
      id: 6,
      title: "Dave wasn't exactly sure how he had ended up",
      body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      userId: 47,
      tags: [
        "english",
        "classic",
        "american"
      ],
      reactions: 3
    }
  ]
};

// app/routes/blogs.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async () => (0, import_node3.json)(json_blog_default);
function Blogs() {
  let { posts } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: posts.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      children: item.title
    }, item.id, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 12,
      columnNumber: 28
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/blogs.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this);
}
var meta3 = ({ data }) => {
  let postTitles = data.posts.map((post) => post.title);
  return {
    title: "Blog page app",
    description: `${postTitles.join(",")}`
  };
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta4
});
var import_react10 = require("@chakra-ui/react"), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  let navigate = (0, import_react11.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Welcome to Remix"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Button, {
        colorScheme: "blue",
        onClick: () => {
          navigate("/product");
        },
        type: "button",
        children: "Products"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Button, {
        colorScheme: "blue",
        onClick: () => {
          navigate("/blogs");
        },
        type: "button",
        children: "Blogs"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/blog",
              rel: "noreferrer",
              children: "15m Quickstart Blog Tutorial"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 23,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/jokes",
              rel: "noreferrer",
              children: "Deep Dive Jokes App Tutorial"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 32,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/docs",
              rel: "noreferrer",
              children: "Remix Docs"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 41,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
var meta4 = () => ({
  title: "Product app",
  description: "page is seo product"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8086a9f9", entry: { module: "/build/entry.client-GATPSPCI.js", imports: ["/build/_shared/chunk-OOSWM6SG.js", "/build/_shared/chunk-ISABWLLA.js", "/build/_shared/chunk-YB5AC3TQ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PBJY4FDV.js", imports: ["/build/_shared/chunk-R27H7YRB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs": { id: "routes/blogs", parentId: "root", path: "blogs", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs-ZQGZ747G.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6ACF426T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/product": { id: "routes/product", parentId: "root", path: "product", index: void 0, caseSensitive: void 0, module: "/build/routes/product-XC7BX7LL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8086A9F9.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/product": {
    id: "routes/product",
    parentId: "root",
    path: "product",
    index: void 0,
    caseSensitive: void 0,
    module: product_exports
  },
  "routes/blogs": {
    id: "routes/blogs",
    parentId: "root",
    path: "blogs",
    index: void 0,
    caseSensitive: void 0,
    module: blogs_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
