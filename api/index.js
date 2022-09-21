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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
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
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let transition = (0, import_react2.useTransition)(), fetcher = (0, import_react2.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/product.tsx
var product_exports = {};
__export(product_exports, {
  default: () => Product,
  loader: () => loader,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), loader = async (dataa) => {
  console.log("data", dataa);
  let data = await (await fetch("https://dummyjson.com/products")).json();
  return (0, import_node2.json)(data);
};
function Product() {
  let { products } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        children: "This is product"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        onClick: async () => {
          let data = await (await fetch("https://dummyjson.com/products")).json();
        },
        children: "Load product"
      }),
      products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: product.title
      }, product.id))
    ]
  });
}
var meta2 = ({ data, parentsData }) => {
  let description = data.products.map((product) => product.title);
  return console.log("par", parentsData), {
    title: "Product app",
    description: `page is seo product ${description.join(",")}`
  };
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta3
});
var import_react4 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function Index() {
  let navigate = (0, import_react4.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        children: "Welcome to Remix"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        onClick: () => {
          console.log("111"), navigate("/product");
        },
        type: "button",
        children: "Products"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/blog",
              rel: "noreferrer",
              children: "15m Quickstart Blog Tutorial"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/jokes",
              rel: "noreferrer",
              children: "Deep Dive Jokes App Tutorial"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              target: "_blank",
              href: "https://remix.run/docs",
              rel: "noreferrer",
              children: "Remix Docs"
            })
          })
        ]
      })
    ]
  });
}
var meta3 = () => ({
  title: "Product app",
  description: "page is seo product"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4a99f42f", entry: { module: "/build/entry.client-JYC6SY7W.js", imports: ["/build/_shared/chunk-UMV72TLU.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2N5HSS6K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-MBN7OVXY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/product": { id: "routes/product", parentId: "root", path: "product", index: void 0, caseSensitive: void 0, module: "/build/routes/product-HVJ7DTJN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-4A99F42F.js" };

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
