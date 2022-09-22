var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), fetcherJSON = (url, config) => fetch(url, config).then((res) => res.json()), loader = async ({ request }) => {
  let location = new URL(request.url), config = await fetcherJSON(location.origin + "/config.json");
  return (0, import_node2.json)(config);
};
function App() {
  let data = (0, import_react2.useLoaderData)(), transition = (0, import_react2.useTransition)(), fetcher = (0, import_react2.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 30,
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
var import_node3 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async (dataa) => {
  console.log("data", dataa);
  let data = await (await fetch("https://dummyjson.com/products")).json();
  return (0, import_node3.json)(data);
};
function Product() {
  let { products } = (0, import_react3.useLoaderData)();
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
var import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async () => (0, import_node4.json)(json_blog_default);
function Blogs() {
  let { posts } = (0, import_react4.useLoaderData)();
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
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  let navigate = (0, import_react5.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Welcome to Remix"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: () => {
          navigate("/product");
        },
        type: "button",
        children: "Products"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: () => {
          navigate("/blogs");
        },
        type: "button",
        children: "Blogs"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 19,
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
              lineNumber: 22,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 21,
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
              lineNumber: 31,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 30,
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
              lineNumber: 40,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}
var meta4 = () => ({
  title: "Product app",
  description: "page is seo product"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f2b0efc9", entry: { module: "/build/entry.client-YJNFEO5W.js", imports: ["/build/_shared/chunk-A5UUV5FO.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IGOFK2XS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs": { id: "routes/blogs", parentId: "root", path: "blogs", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs-OE4MK2O5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OR56RFCP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/product": { id: "routes/product", parentId: "root", path: "product", index: void 0, caseSensitive: void 0, module: "/build/routes/product-QHZYL6ZC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F2B0EFC9.js" };

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
