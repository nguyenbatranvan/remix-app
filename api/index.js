var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/highlight.js/styles/github-dark-dimmed.css
var require_github_dark_dimmed = __commonJS({
  "node_modules/highlight.js/styles/github-dark-dimmed.css"(exports, module2) {
    module2.exports = "/build/_assets/github-dark-dimmed-NVKMPVQH.css";
  }
});

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
var import_framer_motion2 = require("framer-motion"), import_react15 = require("react"), import_react16 = require("@emotion/react"), import_react17 = require("@chakra-ui/react"), import_react18 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/components/dog.tsx
var import_react6 = require("react"), THREE = __toESM(require("three"));

// app/components/dog-loader.tsx
var import_react4 = require("react"), import_react5 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DogSpinner = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Spinner, {
  size: "xl",
  position: "absolute",
  left: "50%",
  top: "50%",
  ml: "calc(0px - var(--spinner-size) / 2)",
  mt: "calc(0px - var(--spinner-size))"
}, void 0, !1, {
  fileName: "app/components/dog-loader.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), DogContainer = (0, import_react4.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Box, {
  ref,
  className: "voxel-dog",
  m: "auto",
  mt: ["-20px", "-60px", "-120px"],
  mb: ["-40px", "-140px", "-200px"],
  w: [280, 480, 640],
  h: [280, 480, 640],
  position: "relative",
  children: props.children
}, void 0, !1, {
  fileName: "app/components/dog-loader.tsx",
  lineNumber: 18,
  columnNumber: 5
}, this));

// app/utils/gltf-loader.ts
var import_three = require("three"), GltfLoader = class extends import_three.Loader {
  constructor(manager) {
    super(manager), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(parser) {
      return new GLTFMaterialsClearcoatExtension(parser);
    }), this.register(function(parser) {
      return new GLTFTextureBasisUExtension(parser);
    }), this.register(function(parser) {
      return new GLTFTextureWebPExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMaterialsSheenExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMaterialsTransmissionExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMaterialsVolumeExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMaterialsIorExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMaterialsEmissiveStrengthExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMaterialsSpecularExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMaterialsIridescenceExtension(parser);
    }), this.register(function(parser) {
      return new GLTFLightsExtension(parser);
    }), this.register(function(parser) {
      return new GLTFMeshoptCompression(parser);
    });
  }
  load(url, onLoad, onProgress, onError) {
    let scope = this, resourcePath;
    this.resourcePath !== "" ? resourcePath = this.resourcePath : this.path !== "" ? resourcePath = this.path : resourcePath = import_three.LoaderUtils.extractUrlBase(url), this.manager.itemStart(url);
    let _onError = function(e) {
      onError ? onError(e) : console.error(e), scope.manager.itemError(url), scope.manager.itemEnd(url);
    }, loader5 = new import_three.FileLoader(this.manager);
    loader5.setPath(this.path), loader5.setResponseType("arraybuffer"), loader5.setRequestHeader(this.requestHeader), loader5.setWithCredentials(this.withCredentials), loader5.load(url, function(data) {
      try {
        scope.parse(data, resourcePath, function(gltf) {
          onLoad(gltf), scope.manager.itemEnd(url);
        }, _onError);
      } catch (e) {
        _onError(e);
      }
    }, onProgress, _onError);
  }
  setDRACOLoader(dracoLoader) {
    return this.dracoLoader = dracoLoader, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GltfLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(ktx2Loader) {
    return this.ktx2Loader = ktx2Loader, this;
  }
  setMeshoptDecoder(meshoptDecoder) {
    return this.meshoptDecoder = meshoptDecoder, this;
  }
  register(callback) {
    return this.pluginCallbacks.indexOf(callback) === -1 && this.pluginCallbacks.push(callback), this;
  }
  unregister(callback) {
    return this.pluginCallbacks.indexOf(callback) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1), this;
  }
  parse(data, path, onLoad, onError) {
    let content, extensions = {}, plugins = {};
    if (typeof data == "string")
      content = data;
    else if (import_three.LoaderUtils.decodeText(new Uint8Array(data, 0, 4)) === BINARY_EXTENSION_HEADER_MAGIC) {
      try {
        extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
      } catch (error) {
        onError && onError(error);
        return;
      }
      content = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
    } else
      content = import_three.LoaderUtils.decodeText(new Uint8Array(data));
    let json4 = JSON.parse(content);
    if (json4.asset === void 0 || json4.asset.version[0] < 2) {
      onError && onError(new Error("THREE.GltfLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    let parser = new GLTFParser(json4, {
      path: path || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    parser.fileLoader.setRequestHeader(this.requestHeader);
    for (let i = 0; i < this.pluginCallbacks.length; i++) {
      let plugin = this.pluginCallbacks[i](parser);
      plugins[plugin.name] = plugin, extensions[plugin.name] = !0;
    }
    if (json4.extensionsUsed)
      for (let i = 0; i < json4.extensionsUsed.length; ++i) {
        let extensionName = json4.extensionsUsed[i], extensionsRequired = json4.extensionsRequired || [];
        switch (extensionName) {
          case EXTENSIONS.KHR_MATERIALS_UNLIT:
            extensions[extensionName] = new GLTFMaterialsUnlitExtension();
            break;
          case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            extensions[extensionName] = new GLTFMaterialsPbrSpecularGlossinessExtension();
            break;
          case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
            extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json4, this.dracoLoader);
            break;
          case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
            extensions[extensionName] = new GLTFTextureTransformExtension();
            break;
          case EXTENSIONS.KHR_MESH_QUANTIZATION:
            extensions[extensionName] = new GLTFMeshQuantizationExtension();
            break;
          default:
            extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0 && console.warn('THREE.GltfLoader: Unknown extension "' + extensionName + '".');
        }
      }
    parser.setExtensions(extensions), parser.setPlugins(plugins), parser.parse(onLoad, onError);
  }
  parseAsync(data, path) {
    let scope = this;
    return new Promise(function(resolve, reject) {
      scope.parse(data, path, resolve, reject);
    });
  }
};
function GLTFRegistry() {
  let objects = {};
  return {
    get: function(key) {
      return objects[key];
    },
    add: function(key, object) {
      objects[key] = object;
    },
    remove: function(key) {
      delete objects[key];
    },
    removeAll: function() {
      objects = {};
    }
  };
}
var EXTENSIONS = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
}, GLTFLightsExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    let parser = this.parser, nodeDefs = this.parser.json.nodes || [];
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      let nodeDef = nodeDefs[nodeIndex];
      nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0 && parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
    }
  }
  _loadLight(lightIndex) {
    let parser = this.parser, cacheKey = "light:" + lightIndex, dependency = parser.cache.get(cacheKey);
    if (dependency)
      return dependency;
    let json4 = parser.json, lightDef = ((json4.extensions && json4.extensions[this.name] || {}).lights || [])[lightIndex], lightNode, color = new import_three.Color(16777215);
    lightDef.color !== void 0 && color.fromArray(lightDef.color);
    let range = lightDef.range !== void 0 ? lightDef.range : 0;
    switch (lightDef.type) {
      case "directional":
        lightNode = new import_three.DirectionalLight(color), lightNode.target.position.set(0, 0, -1), lightNode.add(lightNode.target);
        break;
      case "point":
        lightNode = new import_three.PointLight(color), lightNode.distance = range;
        break;
      case "spot":
        lightNode = new import_three.SpotLight(color), lightNode.distance = range, lightDef.spot = lightDef.spot || {}, lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0, lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4, lightNode.angle = lightDef.spot.outerConeAngle, lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle, lightNode.target.position.set(0, 0, -1), lightNode.add(lightNode.target);
        break;
      default:
        throw new Error("THREE.GltfLoader: Unexpected light type: " + lightDef.type);
    }
    return lightNode.position.set(0, 0, 0), lightNode.decay = 2, lightDef.intensity !== void 0 && (lightNode.intensity = lightDef.intensity), lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex), dependency = Promise.resolve(lightNode), parser.cache.add(cacheKey, dependency), dependency;
  }
  createNodeAttachment(nodeIndex) {
    let self2 = this, parser = this.parser, nodeDef = parser.json.nodes[nodeIndex], lightIndex = (nodeDef.extensions && nodeDef.extensions[this.name] || {}).light;
    return lightIndex === void 0 ? null : this._loadLight(lightIndex).then(function(light) {
      return parser._getNodeRef(self2.cache, lightIndex, light);
    });
  }
}, GLTFMaterialsUnlitExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return import_three.MeshBasicMaterial;
  }
  extendParams(materialParams, materialDef, parser) {
    let pending = [];
    materialParams.color = new import_three.Color(1, 1, 1), materialParams.opacity = 1;
    let metallicRoughness = materialDef.pbrMetallicRoughness;
    if (metallicRoughness) {
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        let array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array), materialParams.opacity = array[3];
      }
      metallicRoughness.baseColorTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, import_three.sRGBEncoding));
    }
    return Promise.all(pending);
  }
}, GLTFMaterialsEmissiveStrengthExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let materialDef = this.parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
    return emissiveStrength !== void 0 && (materialParams.emissiveIntensity = emissiveStrength), Promise.resolve();
  }
}, GLTFMaterialsClearcoatExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(materialIndex) {
    let materialDef = this.parser.json.materials[materialIndex];
    return !materialDef.extensions || !materialDef.extensions[this.name] ? null : import_three.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let parser = this.parser, materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let pending = [], extension = materialDef.extensions[this.name];
    if (extension.clearcoatFactor !== void 0 && (materialParams.clearcoat = extension.clearcoatFactor), extension.clearcoatTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture)), extension.clearcoatRoughnessFactor !== void 0 && (materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor), extension.clearcoatRoughnessTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture)), extension.clearcoatNormalTexture !== void 0 && (pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture)), extension.clearcoatNormalTexture.scale !== void 0)) {
      let scale = extension.clearcoatNormalTexture.scale;
      materialParams.clearcoatNormalScale = new import_three.Vector2(scale, scale);
    }
    return Promise.all(pending);
  }
}, GLTFMaterialsIridescenceExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(materialIndex) {
    let materialDef = this.parser.json.materials[materialIndex];
    return !materialDef.extensions || !materialDef.extensions[this.name] ? null : import_three.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let parser = this.parser, materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let pending = [], extension = materialDef.extensions[this.name];
    return extension.iridescenceFactor !== void 0 && (materialParams.iridescence = extension.iridescenceFactor), extension.iridescenceTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture)), extension.iridescenceIor !== void 0 && (materialParams.iridescenceIOR = extension.iridescenceIor), materialParams.iridescenceThicknessRange === void 0 && (materialParams.iridescenceThicknessRange = [100, 400]), extension.iridescenceThicknessMinimum !== void 0 && (materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum), extension.iridescenceThicknessMaximum !== void 0 && (materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum), extension.iridescenceThicknessTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture)), Promise.all(pending);
  }
}, GLTFMaterialsSheenExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(materialIndex) {
    let materialDef = this.parser.json.materials[materialIndex];
    return !materialDef.extensions || !materialDef.extensions[this.name] ? null : import_three.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let parser = this.parser, materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let pending = [];
    materialParams.sheenColor = new import_three.Color(0, 0, 0), materialParams.sheenRoughness = 0, materialParams.sheen = 1;
    let extension = materialDef.extensions[this.name];
    return extension.sheenColorFactor !== void 0 && materialParams.sheenColor.fromArray(extension.sheenColorFactor), extension.sheenRoughnessFactor !== void 0 && (materialParams.sheenRoughness = extension.sheenRoughnessFactor), extension.sheenColorTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, import_three.sRGBEncoding)), extension.sheenRoughnessTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture)), Promise.all(pending);
  }
}, GLTFMaterialsTransmissionExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(materialIndex) {
    let materialDef = this.parser.json.materials[materialIndex];
    return !materialDef.extensions || !materialDef.extensions[this.name] ? null : import_three.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let parser = this.parser, materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let pending = [], extension = materialDef.extensions[this.name];
    return extension.transmissionFactor !== void 0 && (materialParams.transmission = extension.transmissionFactor), extension.transmissionTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture)), Promise.all(pending);
  }
}, GLTFMaterialsVolumeExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(materialIndex) {
    let materialDef = this.parser.json.materials[materialIndex];
    return !materialDef.extensions || !materialDef.extensions[this.name] ? null : import_three.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let parser = this.parser, materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let pending = [], extension = materialDef.extensions[this.name];
    materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0, extension.thicknessTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture)), materialParams.attenuationDistance = extension.attenuationDistance || 0;
    let colorArray = extension.attenuationColor || [1, 1, 1];
    return materialParams.attenuationColor = new import_three.Color(colorArray[0], colorArray[1], colorArray[2]), Promise.all(pending);
  }
}, GLTFMaterialsIorExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_IOR;
  }
  getMaterialType(materialIndex) {
    let materialDef = this.parser.json.materials[materialIndex];
    return !materialDef.extensions || !materialDef.extensions[this.name] ? null : import_three.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let materialDef = this.parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let extension = materialDef.extensions[this.name];
    return materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5, Promise.resolve();
  }
}, GLTFMaterialsSpecularExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(materialIndex) {
    let materialDef = this.parser.json.materials[materialIndex];
    return !materialDef.extensions || !materialDef.extensions[this.name] ? null : import_three.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    let parser = this.parser, materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return Promise.resolve();
    let pending = [], extension = materialDef.extensions[this.name];
    materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1, extension.specularTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
    let colorArray = extension.specularColorFactor || [1, 1, 1];
    return materialParams.specularColor = new import_three.Color(colorArray[0], colorArray[1], colorArray[2]), extension.specularColorTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, import_three.sRGBEncoding)), Promise.all(pending);
  }
}, GLTFTextureBasisUExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
  }
  loadTexture(textureIndex) {
    let parser = this.parser, json4 = parser.json, textureDef = json4.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[this.name])
      return null;
    let extension = textureDef.extensions[this.name], loader5 = parser.options.ktx2Loader;
    if (!loader5) {
      if (json4.extensionsRequired && json4.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GltfLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return parser.loadTextureImage(textureIndex, extension.source, loader5);
  }
}, GLTFTextureWebPExtension = class {
  constructor(parser) {
    this.parser = parser, this.name = EXTENSIONS.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(textureIndex) {
    let name = this.name, parser = this.parser, json4 = parser.json, textureDef = json4.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[name])
      return null;
    let extension = textureDef.extensions[name], source = json4.images[extension.source], loader5 = parser.textureLoader;
    if (source.uri) {
      let handler = parser.options.manager.getHandler(source.uri);
      handler !== null && (loader5 = handler);
    }
    return this.detectSupport().then(function(isSupported) {
      if (isSupported)
        return parser.loadTextureImage(textureIndex, extension.source, loader5);
      if (json4.extensionsRequired && json4.extensionsRequired.indexOf(name) >= 0)
        throw new Error("THREE.GltfLoader: WebP required by asset but unsupported.");
      return parser.loadTexture(textureIndex);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(resolve) {
      let image = new Image();
      image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", image.onload = image.onerror = function() {
        resolve(image.height === 1);
      };
    })), this.isSupported;
  }
}, GLTFMeshoptCompression = class {
  constructor(parser) {
    this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION, this.parser = parser;
  }
  loadBufferView(index) {
    let json4 = this.parser.json, bufferView = json4.bufferViews[index];
    if (bufferView.extensions && bufferView.extensions[this.name]) {
      let extensionDef = bufferView.extensions[this.name], buffer = this.parser.getDependency("buffer", extensionDef.buffer), decoder = this.parser.options.meshoptDecoder;
      if (!decoder || !decoder.supported) {
        if (json4.extensionsRequired && json4.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GltfLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return buffer.then(function(res) {
        let byteOffset = extensionDef.byteOffset || 0, byteLength = extensionDef.byteLength || 0, count = extensionDef.count, stride = extensionDef.byteStride, source = new Uint8Array(res, byteOffset, byteLength);
        return decoder.decodeGltfBufferAsync ? decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res2) {
          return res2.buffer;
        }) : decoder.ready.then(function() {
          let result = new ArrayBuffer(count * stride);
          return decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter), result;
        });
      });
    } else
      return null;
  }
}, BINARY_EXTENSION_HEADER_MAGIC = "glTF", BINARY_EXTENSION_HEADER_LENGTH = 12, BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 }, GLTFBinaryExtension = class {
  constructor(data) {
    this.name = EXTENSIONS.KHR_BINARY_GLTF, this.content = null, this.body = null;
    let headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
    if (this.header = {
      magic: import_three.LoaderUtils.decodeText(new Uint8Array(data.slice(0, 4))),
      version: headerView.getUint32(4, !0),
      length: headerView.getUint32(8, !0)
    }, this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC)
      throw new Error("THREE.GltfLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GltfLoader: Legacy binary file detected.");
    let chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH, chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH), chunkIndex = 0;
    for (; chunkIndex < chunkContentsLength; ) {
      let chunkLength = chunkView.getUint32(chunkIndex, !0);
      chunkIndex += 4;
      let chunkType = chunkView.getUint32(chunkIndex, !0);
      if (chunkIndex += 4, chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
        let contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
        this.content = import_three.LoaderUtils.decodeText(contentArray);
      } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
        let byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
        this.body = data.slice(byteOffset, byteOffset + chunkLength);
      }
      chunkIndex += chunkLength;
    }
    if (this.content === null)
      throw new Error("THREE.GltfLoader: JSON content not found.");
  }
}, GLTFDracoMeshCompressionExtension = class {
  constructor(json4, dracoLoader) {
    if (!dracoLoader)
      throw new Error("THREE.GltfLoader: No DRACOLoader instance provided.");
    this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION, this.json = json4, this.dracoLoader = dracoLoader, this.dracoLoader.preload();
  }
  decodePrimitive(primitive, parser) {
    let json4 = this.json, dracoLoader = this.dracoLoader, bufferViewIndex = primitive.extensions[this.name].bufferView, gltfAttributeMap = primitive.extensions[this.name].attributes, threeAttributeMap = {}, attributeNormalizedMap = {}, attributeTypeMap = {};
    for (let attributeName in gltfAttributeMap) {
      let threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
    }
    for (let attributeName in primitive.attributes) {
      let threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      if (gltfAttributeMap[attributeName] !== void 0) {
        let accessorDef = json4.accessors[primitive.attributes[attributeName]], componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        attributeTypeMap[threeAttributeName] = componentType.name, attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === !0;
      }
    }
    return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
      return new Promise(function(resolve) {
        dracoLoader.decodeDracoFile(bufferView, function(geometry) {
          for (let attributeName in geometry.attributes) {
            let attribute = geometry.attributes[attributeName], normalized = attributeNormalizedMap[attributeName];
            normalized !== void 0 && (attribute.normalized = normalized);
          }
          resolve(geometry);
        }, threeAttributeMap, attributeTypeMap);
      });
    });
  }
}, GLTFTextureTransformExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(texture, transform) {
    return transform.texCoord !== void 0 && console.warn('THREE.GltfLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0 || (texture = texture.clone(), transform.offset !== void 0 && texture.offset.fromArray(transform.offset), transform.rotation !== void 0 && (texture.rotation = transform.rotation), transform.scale !== void 0 && texture.repeat.fromArray(transform.scale), texture.needsUpdate = !0), texture;
  }
}, GLTFMeshStandardSGMaterial = class extends import_three.MeshStandardMaterial {
  constructor(params) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    let specularMapParsFragmentChunk = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), glossinessMapParsFragmentChunk = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), specularMapFragmentChunk = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), glossinessMapFragmentChunk = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), lightPhysicalFragmentChunk = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), uniforms = {
      specular: { value: new import_three.Color().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = uniforms, this.onBeforeCompile = function(shader) {
      for (let uniformName in uniforms)
        shader.uniforms[uniformName] = uniforms[uniformName];
      shader.fragmentShader = shader.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", specularMapParsFragmentChunk).replace("#include <metalnessmap_pars_fragment>", glossinessMapParsFragmentChunk).replace("#include <roughnessmap_fragment>", specularMapFragmentChunk).replace("#include <metalnessmap_fragment>", glossinessMapFragmentChunk).replace("#include <lights_physical_fragment>", lightPhysicalFragmentChunk);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return uniforms.specular.value;
        },
        set: function(v) {
          uniforms.specular.value = v;
        }
      },
      specularMap: {
        get: function() {
          return uniforms.specularMap.value;
        },
        set: function(v) {
          uniforms.specularMap.value = v, v ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return uniforms.glossiness.value;
        },
        set: function(v) {
          uniforms.glossiness.value = v;
        }
      },
      glossinessMap: {
        get: function() {
          return uniforms.glossinessMap.value;
        },
        set: function(v) {
          uniforms.glossinessMap.value = v, v ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(params);
  }
  copy(source) {
    return super.copy(source), this.specularMap = source.specularMap, this.specular.copy(source.specular), this.glossinessMap = source.glossinessMap, this.glossiness = source.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}, GLTFMaterialsPbrSpecularGlossinessExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return GLTFMeshStandardSGMaterial;
  }
  extendParams(materialParams, materialDef, parser) {
    let pbrSpecularGlossiness = materialDef.extensions[this.name];
    materialParams.color = new import_three.Color(1, 1, 1), materialParams.opacity = 1;
    let pending = [];
    if (Array.isArray(pbrSpecularGlossiness.diffuseFactor)) {
      let array = pbrSpecularGlossiness.diffuseFactor;
      materialParams.color.fromArray(array), materialParams.opacity = array[3];
    }
    if (pbrSpecularGlossiness.diffuseTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "map", pbrSpecularGlossiness.diffuseTexture, import_three.sRGBEncoding)), materialParams.emissive = new import_three.Color(0, 0, 0), materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== void 0 ? pbrSpecularGlossiness.glossinessFactor : 1, materialParams.specular = new import_three.Color(1, 1, 1), Array.isArray(pbrSpecularGlossiness.specularFactor) && materialParams.specular.fromArray(pbrSpecularGlossiness.specularFactor), pbrSpecularGlossiness.specularGlossinessTexture !== void 0) {
      let specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
      pending.push(parser.assignTexture(materialParams, "glossinessMap", specGlossMapDef)), pending.push(parser.assignTexture(materialParams, "specularMap", specGlossMapDef, import_three.sRGBEncoding));
    }
    return Promise.all(pending);
  }
  createMaterial(materialParams) {
    let material = new GLTFMeshStandardSGMaterial(materialParams);
    return material.fog = !0, material.color = materialParams.color, material.map = materialParams.map === void 0 ? null : materialParams.map, material.lightMap = null, material.lightMapIntensity = 1, material.aoMap = materialParams.aoMap === void 0 ? null : materialParams.aoMap, material.aoMapIntensity = 1, material.emissive = materialParams.emissive, material.emissiveIntensity = materialParams.emissiveIntensity === void 0 ? 1 : materialParams.emissiveIntensity, material.emissiveMap = materialParams.emissiveMap === void 0 ? null : materialParams.emissiveMap, material.bumpMap = materialParams.bumpMap === void 0 ? null : materialParams.bumpMap, material.bumpScale = 1, material.normalMap = materialParams.normalMap === void 0 ? null : materialParams.normalMap, material.normalMapType = import_three.TangentSpaceNormalMap, materialParams.normalScale && (material.normalScale = materialParams.normalScale), material.displacementMap = null, material.displacementScale = 1, material.displacementBias = 0, material.specularMap = materialParams.specularMap === void 0 ? null : materialParams.specularMap, material.specular = materialParams.specular, material.glossinessMap = materialParams.glossinessMap === void 0 ? null : materialParams.glossinessMap, material.glossiness = materialParams.glossiness, material.alphaMap = null, material.envMap = materialParams.envMap === void 0 ? null : materialParams.envMap, material.envMapIntensity = 1, material;
  }
}, GLTFMeshQuantizationExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
  }
}, GLTFCubicSplineInterpolant = class extends import_three.Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  copySampleValue_(index) {
    let result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
    for (let i = 0; i !== valueSize; i++)
      result[i] = values[offset + i];
    return result;
  }
  interpolate_(i1, t0, t, t1) {
    let result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, stride2 = stride * 2, stride3 = stride * 3, td = t1 - t0, p = (t - t0) / td, pp = p * p, ppp = pp * p, offset1 = i1 * stride3, offset0 = offset1 - stride3, s2 = -2 * ppp + 3 * pp, s3 = ppp - pp, s0 = 1 - s2, s1 = s3 - pp + p;
    for (let i = 0; i !== stride; i++) {
      let p0 = values[offset0 + i + stride], m0 = values[offset0 + i + stride2] * td, p1 = values[offset1 + i + stride], m1 = values[offset1 + i] * td;
      result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
    }
    return result;
  }
}, _q = new import_three.Quaternion(), GLTFCubicSplineQuaternionInterpolant = class extends GLTFCubicSplineInterpolant {
  interpolate_(i1, t0, t, t1) {
    let result = super.interpolate_(i1, t0, t, t1);
    return _q.fromArray(result).normalize().toArray(result), result;
  }
}, WEBGL_CONSTANTS = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, WEBGL_COMPONENT_TYPES = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, WEBGL_FILTERS = {
  9728: import_three.NearestFilter,
  9729: import_three.LinearFilter,
  9984: import_three.NearestMipmapNearestFilter,
  9985: import_three.LinearMipmapNearestFilter,
  9986: import_three.NearestMipmapLinearFilter,
  9987: import_three.LinearMipmapLinearFilter
}, WEBGL_WRAPPINGS = {
  33071: import_three.ClampToEdgeWrapping,
  33648: import_three.MirroredRepeatWrapping,
  10497: import_three.RepeatWrapping
}, WEBGL_TYPE_SIZES = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ATTRIBUTES = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, PATH_PROPERTIES = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, INTERPOLATION = {
  CUBICSPLINE: void 0,
  LINEAR: import_three.InterpolateLinear,
  STEP: import_three.InterpolateDiscrete
}, ALPHA_MODES = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function createDefaultMaterial(cache) {
  return cache.DefaultMaterial === void 0 && (cache.DefaultMaterial = new import_three.MeshStandardMaterial({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: import_three.FrontSide
  })), cache.DefaultMaterial;
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
  for (let name in objectDef.extensions)
    knownExtensions[name] === void 0 && (object.userData.gltfExtensions = object.userData.gltfExtensions || {}, object.userData.gltfExtensions[name] = objectDef.extensions[name]);
}
function assignExtrasToUserData(object, gltfDef) {
  gltfDef.extras !== void 0 && (typeof gltfDef.extras == "object" ? Object.assign(object.userData, gltfDef.extras) : console.warn("THREE.GltfLoader: Ignoring primitive type .extras, " + gltfDef.extras));
}
function addMorphTargets(geometry, targets, parser) {
  let hasMorphPosition = !1, hasMorphNormal = !1, hasMorphColor = !1;
  for (let i = 0, il = targets.length; i < il; i++) {
    let target = targets[i];
    if (target.POSITION !== void 0 && (hasMorphPosition = !0), target.NORMAL !== void 0 && (hasMorphNormal = !0), target.COLOR_0 !== void 0 && (hasMorphColor = !0), hasMorphPosition && hasMorphNormal && hasMorphColor)
      break;
  }
  if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor)
    return Promise.resolve(geometry);
  let pendingPositionAccessors = [], pendingNormalAccessors = [], pendingColorAccessors = [];
  for (let i = 0, il = targets.length; i < il; i++) {
    let target = targets[i];
    if (hasMorphPosition) {
      let pendingAccessor = target.POSITION !== void 0 ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
      pendingPositionAccessors.push(pendingAccessor);
    }
    if (hasMorphNormal) {
      let pendingAccessor = target.NORMAL !== void 0 ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
      pendingNormalAccessors.push(pendingAccessor);
    }
    if (hasMorphColor) {
      let pendingAccessor = target.COLOR_0 !== void 0 ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
      pendingColorAccessors.push(pendingAccessor);
    }
  }
  return Promise.all([
    Promise.all(pendingPositionAccessors),
    Promise.all(pendingNormalAccessors),
    Promise.all(pendingColorAccessors)
  ]).then(function(accessors) {
    let morphPositions = accessors[0], morphNormals = accessors[1], morphColors = accessors[2];
    return hasMorphPosition && (geometry.morphAttributes.position = morphPositions), hasMorphNormal && (geometry.morphAttributes.normal = morphNormals), hasMorphColor && (geometry.morphAttributes.color = morphColors), geometry.morphTargetsRelative = !0, geometry;
  });
}
function updateMorphTargets(mesh, meshDef) {
  if (mesh.updateMorphTargets(), meshDef.weights !== void 0)
    for (let i = 0, il = meshDef.weights.length; i < il; i++)
      mesh.morphTargetInfluences[i] = meshDef.weights[i];
  if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
    let targetNames = meshDef.extras.targetNames;
    if (mesh.morphTargetInfluences.length === targetNames.length) {
      mesh.morphTargetDictionary = {};
      for (let i = 0, il = targetNames.length; i < il; i++)
        mesh.morphTargetDictionary[targetNames[i]] = i;
    } else
      console.warn("THREE.GltfLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function createPrimitiveKey(primitiveDef) {
  let dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION], geometryKey;
  return dracoExtension ? geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes) : geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode, geometryKey;
}
function createAttributesKey(attributes2) {
  let attributesKey = "", keys = Object.keys(attributes2).sort();
  for (let i = 0, il = keys.length; i < il; i++)
    attributesKey += keys[i] + ":" + attributes2[keys[i]] + ";";
  return attributesKey;
}
function getNormalizedComponentScale(constructor) {
  switch (constructor) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GltfLoader: Unsupported normalized accessor component type.");
  }
}
function getImageURIMimeType(uri) {
  return uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
var GLTFParser = class {
  constructor(json4 = {}, options = {}) {
    this.json = json4, this.extensions = {}, this.plugins = {}, this.options = options, this.cache = new GLTFRegistry(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, isFirefox = navigator.userAgent.indexOf("Firefox") > -1, firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || isSafari || isFirefox && firefoxVersion < 98 ? this.textureLoader = new import_three.TextureLoader(this.options.manager) : this.textureLoader = new import_three.ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new import_three.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(extensions) {
    this.extensions = extensions;
  }
  setPlugins(plugins) {
    this.plugins = plugins;
  }
  parse(onLoad, onError) {
    let parser = this, json4 = this.json, extensions = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(ext) {
      return ext._markDefs && ext._markDefs();
    }), Promise.all(this._invokeAll(function(ext) {
      return ext.beforeRoot && ext.beforeRoot();
    })).then(function() {
      return Promise.all([
        parser.getDependencies("scene"),
        parser.getDependencies("animation"),
        parser.getDependencies("camera")
      ]);
    }).then(function(dependencies) {
      let result = {
        scene: dependencies[0][json4.scene || 0],
        scenes: dependencies[0],
        animations: dependencies[1],
        cameras: dependencies[2],
        asset: json4.asset,
        parser,
        userData: {}
      };
      addUnknownExtensionsToUserData(extensions, result, json4), assignExtrasToUserData(result, json4), Promise.all(parser._invokeAll(function(ext) {
        return ext.afterRoot && ext.afterRoot(result);
      })).then(function() {
        onLoad(result);
      });
    }).catch(onError);
  }
  _markDefs() {
    let nodeDefs = this.json.nodes || [], skinDefs = this.json.skins || [], meshDefs = this.json.meshes || [];
    for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
      let joints = skinDefs[skinIndex].joints;
      for (let i = 0, il = joints.length; i < il; i++)
        nodeDefs[joints[i]].isBone = !0;
    }
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      let nodeDef = nodeDefs[nodeIndex];
      nodeDef.mesh !== void 0 && (this._addNodeRef(this.meshCache, nodeDef.mesh), nodeDef.skin !== void 0 && (meshDefs[nodeDef.mesh].isSkinnedMesh = !0)), nodeDef.camera !== void 0 && this._addNodeRef(this.cameraCache, nodeDef.camera);
    }
  }
  _addNodeRef(cache, index) {
    index !== void 0 && (cache.refs[index] === void 0 && (cache.refs[index] = cache.uses[index] = 0), cache.refs[index]++);
  }
  _getNodeRef(cache, index, object) {
    if (cache.refs[index] <= 1)
      return object;
    let ref = object.clone(), updateMappings = (original, clone) => {
      let mappings = this.associations.get(original);
      mappings != null && this.associations.set(clone, mappings);
      for (let [i, child] of original.children.entries())
        updateMappings(child, clone.children[i]);
    };
    return updateMappings(object, ref), ref.name += "_instance_" + cache.uses[index]++, ref;
  }
  _invokeOne(func) {
    let extensions = Object.values(this.plugins);
    extensions.push(this);
    for (let i = 0; i < extensions.length; i++) {
      let result = func(extensions[i]);
      if (result)
        return result;
    }
    return null;
  }
  _invokeAll(func) {
    let extensions = Object.values(this.plugins);
    extensions.unshift(this);
    let pending = [];
    for (let i = 0; i < extensions.length; i++) {
      let result = func(extensions[i]);
      result && pending.push(result);
    }
    return pending;
  }
  getDependency(type, index) {
    let cacheKey = type + ":" + index, dependency = this.cache.get(cacheKey);
    if (!dependency) {
      switch (type) {
        case "scene":
          dependency = this.loadScene(index);
          break;
        case "node":
          dependency = this.loadNode(index);
          break;
        case "mesh":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMesh && ext.loadMesh(index);
          });
          break;
        case "accessor":
          dependency = this.loadAccessor(index);
          break;
        case "bufferView":
          dependency = this._invokeOne(function(ext) {
            return ext.loadBufferView && ext.loadBufferView(index);
          });
          break;
        case "buffer":
          dependency = this.loadBuffer(index);
          break;
        case "material":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMaterial && ext.loadMaterial(index);
          });
          break;
        case "texture":
          dependency = this._invokeOne(function(ext) {
            return ext.loadTexture && ext.loadTexture(index);
          });
          break;
        case "skin":
          dependency = this.loadSkin(index);
          break;
        case "animation":
          dependency = this._invokeOne(function(ext) {
            return ext.loadAnimation && ext.loadAnimation(index);
          });
          break;
        case "camera":
          dependency = this.loadCamera(index);
          break;
        default:
          throw new Error("Unknown type: " + type);
      }
      this.cache.add(cacheKey, dependency);
    }
    return dependency;
  }
  getDependencies(type) {
    let dependencies = this.cache.get(type);
    if (!dependencies) {
      let parser = this, defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
      dependencies = Promise.all(defs.map(function(def, index) {
        return parser.getDependency(type, index);
      })), this.cache.add(type, dependencies);
    }
    return dependencies;
  }
  loadBuffer(bufferIndex) {
    let bufferDef = this.json.buffers[bufferIndex], loader5 = this.fileLoader;
    if (bufferDef.type && bufferDef.type !== "arraybuffer")
      throw new Error("THREE.GltfLoader: " + bufferDef.type + " buffer type is not supported.");
    if (bufferDef.uri === void 0 && bufferIndex === 0)
      return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
    let options = this.options;
    return new Promise(function(resolve, reject) {
      loader5.load(import_three.LoaderUtils.resolveURL(bufferDef.uri, options.path), resolve, void 0, function() {
        reject(new Error('THREE.GltfLoader: Failed to load buffer "' + bufferDef.uri + '".'));
      });
    });
  }
  loadBufferView(bufferViewIndex) {
    let bufferViewDef = this.json.bufferViews[bufferViewIndex];
    return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
      let byteLength = bufferViewDef.byteLength || 0, byteOffset = bufferViewDef.byteOffset || 0;
      return buffer.slice(byteOffset, byteOffset + byteLength);
    });
  }
  loadAccessor(accessorIndex) {
    let parser = this, json4 = this.json, accessorDef = this.json.accessors[accessorIndex];
    if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0)
      return Promise.resolve(null);
    let pendingBufferViews = [];
    return accessorDef.bufferView !== void 0 ? pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView)) : pendingBufferViews.push(null), accessorDef.sparse !== void 0 && (pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView)), pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView))), Promise.all(pendingBufferViews).then(function(bufferViews) {
      let bufferView = bufferViews[0], itemSize = WEBGL_TYPE_SIZES[accessorDef.type], TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType], elementBytes = TypedArray.BYTES_PER_ELEMENT, itemBytes = elementBytes * itemSize, byteOffset = accessorDef.byteOffset || 0, byteStride = accessorDef.bufferView !== void 0 ? json4.bufferViews[accessorDef.bufferView].byteStride : void 0, normalized = accessorDef.normalized === !0, array, bufferAttribute;
      if (byteStride && byteStride !== itemBytes) {
        let ibSlice = Math.floor(byteOffset / byteStride), ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count, ib = parser.cache.get(ibCacheKey);
        ib || (array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes), ib = new import_three.InterleavedBuffer(array, byteStride / elementBytes), parser.cache.add(ibCacheKey, ib)), bufferAttribute = new import_three.InterleavedBufferAttribute(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
      } else
        bufferView === null ? array = new TypedArray(accessorDef.count * itemSize) : array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize), bufferAttribute = new import_three.BufferAttribute(array, itemSize, normalized);
      if (accessorDef.sparse !== void 0) {
        let itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR, TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType], byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0, byteOffsetValues = accessorDef.sparse.values.byteOffset || 0, sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices), sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
        bufferView !== null && (bufferAttribute = new import_three.BufferAttribute(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized));
        for (let i = 0, il = sparseIndices.length; i < il; i++) {
          let index = sparseIndices[i];
          if (bufferAttribute.setX(index, sparseValues[i * itemSize]), itemSize >= 2 && bufferAttribute.setY(index, sparseValues[i * itemSize + 1]), itemSize >= 3 && bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]), itemSize >= 4 && bufferAttribute.setW(index, sparseValues[i * itemSize + 3]), itemSize >= 5)
            throw new Error("THREE.GltfLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return bufferAttribute;
    });
  }
  loadTexture(textureIndex) {
    let json4 = this.json, options = this.options, sourceIndex = json4.textures[textureIndex].source, sourceDef = json4.images[sourceIndex], loader5 = this.textureLoader;
    if (sourceDef.uri) {
      let handler = options.manager.getHandler(sourceDef.uri);
      handler !== null && (loader5 = handler);
    }
    return this.loadTextureImage(textureIndex, sourceIndex, loader5);
  }
  loadTextureImage(textureIndex, sourceIndex, loader5) {
    let parser = this, json4 = this.json, textureDef = json4.textures[textureIndex], sourceDef = json4.images[sourceIndex], cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
    if (this.textureCache[cacheKey])
      return this.textureCache[cacheKey];
    let promise = this.loadImageSource(sourceIndex, loader5).then(function(texture) {
      texture.flipY = !1, textureDef.name && (texture.name = textureDef.name);
      let sampler = (json4.samplers || {})[textureDef.sampler] || {};
      return texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || import_three.LinearFilter, texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || import_three.LinearMipmapLinearFilter, texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || import_three.RepeatWrapping, texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || import_three.RepeatWrapping, parser.associations.set(texture, { textures: textureIndex }), texture;
    }).catch(function() {
      return null;
    });
    return this.textureCache[cacheKey] = promise, promise;
  }
  loadImageSource(sourceIndex, loader5) {
    let parser = this, json4 = this.json, options = this.options;
    if (this.sourceCache[sourceIndex] !== void 0)
      return this.sourceCache[sourceIndex].then((texture) => texture.clone());
    let sourceDef = json4.images[sourceIndex], URL2 = self.URL || self.webkitURL, sourceURI = sourceDef.uri || "", isObjectURL = !1;
    if (sourceDef.bufferView !== void 0)
      sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
        isObjectURL = !0;
        let blob = new Blob([bufferView], { type: sourceDef.mimeType });
        return sourceURI = URL2.createObjectURL(blob), sourceURI;
      });
    else if (sourceDef.uri === void 0)
      throw new Error("THREE.GltfLoader: Image " + sourceIndex + " is missing URI and bufferView");
    let promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
      return new Promise(function(resolve, reject) {
        let onLoad = resolve;
        loader5.isImageBitmapLoader === !0 && (onLoad = function(imageBitmap) {
          let texture = new import_three.Texture(imageBitmap);
          texture.needsUpdate = !0, resolve(texture);
        }), loader5.load(import_three.LoaderUtils.resolveURL(sourceURI2, options.path), onLoad, void 0, reject);
      });
    }).then(function(texture) {
      return isObjectURL === !0 && URL2.revokeObjectURL(sourceURI), texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri), texture;
    }).catch(function(error) {
      throw console.error("THREE.GltfLoader: Couldn't load texture", sourceURI), error;
    });
    return this.sourceCache[sourceIndex] = promise, promise;
  }
  assignTexture(materialParams, mapName, mapDef, encoding) {
    let parser = this;
    return this.getDependency("texture", mapDef.index).then(function(texture) {
      if (mapDef.texCoord !== void 0 && mapDef.texCoord != 0 && !(mapName === "aoMap" && mapDef.texCoord == 1) && console.warn("THREE.GltfLoader: Custom UV set " + mapDef.texCoord + " for texture " + mapName + " not yet supported."), parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
        let transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
        if (transform) {
          let gltfReference = parser.associations.get(texture);
          texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform), parser.associations.set(texture, gltfReference);
        }
      }
      return encoding !== void 0 && (texture.encoding = encoding), materialParams[mapName] = texture, texture;
    });
  }
  assignFinalMaterial(mesh) {
    let geometry = mesh.geometry, material = mesh.material, useDerivativeTangents = geometry.attributes.tangent === void 0, useVertexColors = geometry.attributes.color !== void 0, useFlatShading = geometry.attributes.normal === void 0;
    if (mesh.isPoints) {
      let cacheKey = "PointsMaterial:" + material.uuid, pointsMaterial = this.cache.get(cacheKey);
      pointsMaterial || (pointsMaterial = new import_three.PointsMaterial(), import_three.Material.prototype.copy.call(pointsMaterial, material), pointsMaterial.color.copy(material.color), pointsMaterial.map = material.map, pointsMaterial.sizeAttenuation = !1, this.cache.add(cacheKey, pointsMaterial)), material = pointsMaterial;
    } else if (mesh.isLine) {
      let cacheKey = "LineBasicMaterial:" + material.uuid, lineMaterial = this.cache.get(cacheKey);
      lineMaterial || (lineMaterial = new import_three.LineBasicMaterial(), import_three.Material.prototype.copy.call(lineMaterial, material), lineMaterial.color.copy(material.color), this.cache.add(cacheKey, lineMaterial)), material = lineMaterial;
    }
    if (useDerivativeTangents || useVertexColors || useFlatShading) {
      let cacheKey = "ClonedMaterial:" + material.uuid + ":";
      material.isGLTFSpecularGlossinessMaterial && (cacheKey += "specular-glossiness:"), useDerivativeTangents && (cacheKey += "derivative-tangents:"), useVertexColors && (cacheKey += "vertex-colors:"), useFlatShading && (cacheKey += "flat-shading:");
      let cachedMaterial = this.cache.get(cacheKey);
      cachedMaterial || (cachedMaterial = material.clone(), useVertexColors && (cachedMaterial.vertexColors = !0), useFlatShading && (cachedMaterial.flatShading = !0), useDerivativeTangents && (cachedMaterial.normalScale && (cachedMaterial.normalScale.y *= -1), cachedMaterial.clearcoatNormalScale && (cachedMaterial.clearcoatNormalScale.y *= -1)), this.cache.add(cacheKey, cachedMaterial), this.associations.set(cachedMaterial, this.associations.get(material))), material = cachedMaterial;
    }
    material.aoMap && geometry.attributes.uv2 === void 0 && geometry.attributes.uv !== void 0 && geometry.setAttribute("uv2", geometry.attributes.uv), mesh.material = material;
  }
  getMaterialType() {
    return import_three.MeshStandardMaterial;
  }
  loadMaterial(materialIndex) {
    let parser = this, json4 = this.json, extensions = this.extensions, materialDef = json4.materials[materialIndex], materialType, materialParams = {}, materialExtensions = materialDef.extensions || {}, pending = [];
    if (materialExtensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      let sgExtension = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      materialType = sgExtension.getMaterialType(), pending.push(sgExtension.extendParams(materialParams, materialDef, parser));
    } else if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
      let kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
      materialType = kmuExtension.getMaterialType(), pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
    } else {
      let metallicRoughness = materialDef.pbrMetallicRoughness || {};
      if (materialParams.color = new import_three.Color(1, 1, 1), materialParams.opacity = 1, Array.isArray(metallicRoughness.baseColorFactor)) {
        let array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array), materialParams.opacity = array[3];
      }
      metallicRoughness.baseColorTexture !== void 0 && pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, import_three.sRGBEncoding)), materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1, materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1, metallicRoughness.metallicRoughnessTexture !== void 0 && (pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture)), pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture))), materialType = this._invokeOne(function(ext) {
        return ext.getMaterialType && ext.getMaterialType(materialIndex);
      }), pending.push(Promise.all(this._invokeAll(function(ext) {
        return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
      })));
    }
    materialDef.doubleSided === !0 && (materialParams.side = import_three.DoubleSide);
    let alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
    if (alphaMode === ALPHA_MODES.BLEND ? (materialParams.transparent = !0, materialParams.depthWrite = !1) : (materialParams.transparent = !1, alphaMode === ALPHA_MODES.MASK && (materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : 0.5)), materialDef.normalTexture !== void 0 && materialType !== import_three.MeshBasicMaterial && (pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture)), materialParams.normalScale = new import_three.Vector2(1, 1), materialDef.normalTexture.scale !== void 0)) {
      let scale = materialDef.normalTexture.scale;
      materialParams.normalScale.set(scale, scale);
    }
    return materialDef.occlusionTexture !== void 0 && materialType !== import_three.MeshBasicMaterial && (pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture)), materialDef.occlusionTexture.strength !== void 0 && (materialParams.aoMapIntensity = materialDef.occlusionTexture.strength)), materialDef.emissiveFactor !== void 0 && materialType !== import_three.MeshBasicMaterial && (materialParams.emissive = new import_three.Color().fromArray(materialDef.emissiveFactor)), materialDef.emissiveTexture !== void 0 && materialType !== import_three.MeshBasicMaterial && pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, import_three.sRGBEncoding)), Promise.all(pending).then(function() {
      let material;
      return materialType === GLTFMeshStandardSGMaterial ? material = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(materialParams) : material = new materialType(materialParams), materialDef.name && (material.name = materialDef.name), assignExtrasToUserData(material, materialDef), parser.associations.set(material, { materials: materialIndex }), materialDef.extensions && addUnknownExtensionsToUserData(extensions, material, materialDef), material;
    });
  }
  createUniqueName(originalName) {
    let sanitizedName = import_three.PropertyBinding.sanitizeNodeName(originalName || ""), name = sanitizedName;
    for (let i = 1; this.nodeNamesUsed[name]; ++i)
      name = sanitizedName + "_" + i;
    return this.nodeNamesUsed[name] = !0, name;
  }
  loadGeometries(primitives) {
    let parser = this, extensions = this.extensions, cache = this.primitiveCache;
    function createDracoPrimitive(primitive) {
      return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
        return addPrimitiveAttributes(geometry, primitive, parser);
      });
    }
    let pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      let primitive = primitives[i], cacheKey = createPrimitiveKey(primitive), cached = cache[cacheKey];
      if (cached)
        pending.push(cached.promise);
      else {
        let geometryPromise;
        primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION] ? geometryPromise = createDracoPrimitive(primitive) : geometryPromise = addPrimitiveAttributes(new import_three.BufferGeometry(), primitive, parser), cache[cacheKey] = { primitive, promise: geometryPromise }, pending.push(geometryPromise);
      }
    }
    return Promise.all(pending);
  }
  loadMesh(meshIndex) {
    let parser = this, json4 = this.json, extensions = this.extensions, meshDef = json4.meshes[meshIndex], primitives = meshDef.primitives, pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      let material = primitives[i].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
      pending.push(material);
    }
    return pending.push(parser.loadGeometries(primitives)), Promise.all(pending).then(function(results) {
      let materials = results.slice(0, results.length - 1), geometries = results[results.length - 1], meshes = [];
      for (let i = 0, il = geometries.length; i < il; i++) {
        let geometry = geometries[i], primitive = primitives[i], mesh, material = materials[i];
        if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === void 0)
          mesh = meshDef.isSkinnedMesh === !0 ? new import_three.SkinnedMesh(geometry, material) : new import_three.Mesh(geometry, material), mesh.isSkinnedMesh === !0 && !mesh.geometry.attributes.skinWeight.normalized && mesh.normalizeSkinWeights(), primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ? mesh.geometry = toTrianglesDrawMode(mesh.geometry, import_three.TriangleStripDrawMode) : primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN && (mesh.geometry = toTrianglesDrawMode(mesh.geometry, import_three.TriangleFanDrawMode));
        else if (primitive.mode === WEBGL_CONSTANTS.LINES)
          mesh = new import_three.LineSegments(geometry, material);
        else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP)
          mesh = new import_three.Line(geometry, material);
        else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP)
          mesh = new import_three.LineLoop(geometry, material);
        else if (primitive.mode === WEBGL_CONSTANTS.POINTS)
          mesh = new import_three.Points(geometry, material);
        else
          throw new Error("THREE.GltfLoader: Primitive mode unsupported: " + primitive.mode);
        Object.keys(mesh.geometry.morphAttributes).length > 0 && updateMorphTargets(mesh, meshDef), mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex), assignExtrasToUserData(mesh, meshDef), primitive.extensions && addUnknownExtensionsToUserData(extensions, mesh, primitive), parser.assignFinalMaterial(mesh), meshes.push(mesh);
      }
      for (let i = 0, il = meshes.length; i < il; i++)
        parser.associations.set(meshes[i], {
          meshes: meshIndex,
          primitives: i
        });
      if (meshes.length === 1)
        return meshes[0];
      let group = new import_three.Group();
      parser.associations.set(group, { meshes: meshIndex });
      for (let i = 0, il = meshes.length; i < il; i++)
        group.add(meshes[i]);
      return group;
    });
  }
  loadCamera(cameraIndex) {
    let camera, cameraDef = this.json.cameras[cameraIndex], params = cameraDef[cameraDef.type];
    if (!params) {
      console.warn("THREE.GltfLoader: Missing camera parameters.");
      return;
    }
    return cameraDef.type === "perspective" ? camera = new import_three.PerspectiveCamera(import_three.MathUtils.radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6) : cameraDef.type === "orthographic" && (camera = new import_three.OrthographicCamera(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar)), cameraDef.name && (camera.name = this.createUniqueName(cameraDef.name)), assignExtrasToUserData(camera, cameraDef), Promise.resolve(camera);
  }
  loadSkin(skinIndex) {
    let skinDef = this.json.skins[skinIndex], skinEntry = { joints: skinDef.joints };
    return skinDef.inverseBindMatrices === void 0 ? Promise.resolve(skinEntry) : this.getDependency("accessor", skinDef.inverseBindMatrices).then(function(accessor) {
      return skinEntry.inverseBindMatrices = accessor, skinEntry;
    });
  }
  loadAnimation(animationIndex) {
    let animationDef = this.json.animations[animationIndex], pendingNodes = [], pendingInputAccessors = [], pendingOutputAccessors = [], pendingSamplers = [], pendingTargets = [];
    for (let i = 0, il = animationDef.channels.length; i < il; i++) {
      let channel = animationDef.channels[i], sampler = animationDef.samplers[channel.sampler], target = channel.target, name = target.node, input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input, output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
      pendingNodes.push(this.getDependency("node", name)), pendingInputAccessors.push(this.getDependency("accessor", input)), pendingOutputAccessors.push(this.getDependency("accessor", output)), pendingSamplers.push(sampler), pendingTargets.push(target);
    }
    return Promise.all([
      Promise.all(pendingNodes),
      Promise.all(pendingInputAccessors),
      Promise.all(pendingOutputAccessors),
      Promise.all(pendingSamplers),
      Promise.all(pendingTargets)
    ]).then(function(dependencies) {
      let nodes = dependencies[0], inputAccessors = dependencies[1], outputAccessors = dependencies[2], samplers = dependencies[3], targets = dependencies[4], tracks = [];
      for (let i = 0, il = nodes.length; i < il; i++) {
        let node = nodes[i], inputAccessor = inputAccessors[i], outputAccessor = outputAccessors[i], sampler = samplers[i], target = targets[i];
        if (node === void 0)
          continue;
        node.updateMatrix();
        let TypedKeyframeTrack;
        switch (PATH_PROPERTIES[target.path]) {
          case PATH_PROPERTIES.weights:
            TypedKeyframeTrack = import_three.NumberKeyframeTrack;
            break;
          case PATH_PROPERTIES.rotation:
            TypedKeyframeTrack = import_three.QuaternionKeyframeTrack;
            break;
          case PATH_PROPERTIES.position:
          case PATH_PROPERTIES.scale:
          default:
            TypedKeyframeTrack = import_three.VectorKeyframeTrack;
            break;
        }
        let targetName = node.name ? node.name : node.uuid, interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : import_three.InterpolateLinear, targetNames = [];
        PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights ? node.traverse(function(object) {
          object.morphTargetInfluences && targetNames.push(object.name ? object.name : object.uuid);
        }) : targetNames.push(targetName);
        let outputArray = outputAccessor.array;
        if (outputAccessor.normalized) {
          let scale = getNormalizedComponentScale(outputArray.constructor), scaled = new Float32Array(outputArray.length);
          for (let j = 0, jl = outputArray.length; j < jl; j++)
            scaled[j] = outputArray[j] * scale;
          outputArray = scaled;
        }
        for (let j = 0, jl = targetNames.length; j < jl; j++) {
          let track = new TypedKeyframeTrack(
            targetNames[j] + "." + PATH_PROPERTIES[target.path],
            inputAccessor.array,
            outputArray,
            interpolation
          );
          sampler.interpolation === "CUBICSPLINE" && (track.createInterpolant = function(result) {
            let interpolantType = this instanceof import_three.QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
            return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
          }, track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), tracks.push(track);
        }
      }
      let name = animationDef.name ? animationDef.name : "animation_" + animationIndex;
      return new import_three.AnimationClip(name, void 0, tracks);
    });
  }
  createNodeMesh(nodeIndex) {
    let json4 = this.json, parser = this, nodeDef = json4.nodes[nodeIndex];
    return nodeDef.mesh === void 0 ? null : parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
      let node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
      return nodeDef.weights !== void 0 && node.traverse(function(o) {
        if (!!o.isMesh)
          for (let i = 0, il = nodeDef.weights.length; i < il; i++)
            o.morphTargetInfluences[i] = nodeDef.weights[i];
      }), node;
    });
  }
  loadNode(nodeIndex) {
    let json4 = this.json, extensions = this.extensions, parser = this, nodeDef = json4.nodes[nodeIndex], nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
    return function() {
      let pending = [], meshPromise = parser._invokeOne(function(ext) {
        return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
      });
      return meshPromise && pending.push(meshPromise), nodeDef.camera !== void 0 && pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
        return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
      })), parser._invokeAll(function(ext) {
        return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
      }).forEach(function(promise) {
        pending.push(promise);
      }), Promise.all(pending);
    }().then(function(objects) {
      let node;
      if (nodeDef.isBone === !0 ? node = new import_three.Bone() : objects.length > 1 ? node = new import_three.Group() : objects.length === 1 ? node = objects[0] : node = new import_three.Object3D(), node !== objects[0])
        for (let i = 0, il = objects.length; i < il; i++)
          node.add(objects[i]);
      if (nodeDef.name && (node.userData.name = nodeDef.name, node.name = nodeName), assignExtrasToUserData(node, nodeDef), nodeDef.extensions && addUnknownExtensionsToUserData(extensions, node, nodeDef), nodeDef.matrix !== void 0) {
        let matrix = new import_three.Matrix4();
        matrix.fromArray(nodeDef.matrix), node.applyMatrix4(matrix);
      } else
        nodeDef.translation !== void 0 && node.position.fromArray(nodeDef.translation), nodeDef.rotation !== void 0 && node.quaternion.fromArray(nodeDef.rotation), nodeDef.scale !== void 0 && node.scale.fromArray(nodeDef.scale);
      return parser.associations.has(node) || parser.associations.set(node, {}), parser.associations.get(node).nodes = nodeIndex, node;
    });
  }
  loadScene(sceneIndex) {
    let json4 = this.json, extensions = this.extensions, sceneDef = this.json.scenes[sceneIndex], parser = this, scene = new import_three.Group();
    sceneDef.name && (scene.name = parser.createUniqueName(sceneDef.name)), assignExtrasToUserData(scene, sceneDef), sceneDef.extensions && addUnknownExtensionsToUserData(extensions, scene, sceneDef);
    let nodeIds = sceneDef.nodes || [], pending = [];
    for (let i = 0, il = nodeIds.length; i < il; i++)
      pending.push(buildNodeHierarchy(nodeIds[i], scene, json4, parser));
    return Promise.all(pending).then(function() {
      let reduceAssociations = (node) => {
        let reducedAssociations = /* @__PURE__ */ new Map();
        for (let [key, value] of parser.associations)
          (key instanceof import_three.Material || key instanceof import_three.Texture) && reducedAssociations.set(key, value);
        return node.traverse((node2) => {
          let mappings = parser.associations.get(node2);
          mappings != null && reducedAssociations.set(node2, mappings);
        }), reducedAssociations;
      };
      return parser.associations = reduceAssociations(scene), scene;
    });
  }
};
function buildNodeHierarchy(nodeId, parentObject, json4, parser) {
  let nodeDef = json4.nodes[nodeId];
  return parser.getDependency("node", nodeId).then(function(node) {
    if (nodeDef.skin === void 0)
      return node;
    let skinEntry;
    return parser.getDependency("skin", nodeDef.skin).then(function(skin) {
      skinEntry = skin;
      let pendingJoints = [];
      for (let i = 0, il = skinEntry.joints.length; i < il; i++)
        pendingJoints.push(parser.getDependency("node", skinEntry.joints[i]));
      return Promise.all(pendingJoints);
    }).then(function(jointNodes) {
      return node.traverse(function(mesh) {
        if (!mesh.isMesh)
          return;
        let bones = [], boneInverses = [];
        for (let j = 0, jl = jointNodes.length; j < jl; j++) {
          let jointNode = jointNodes[j];
          if (jointNode) {
            bones.push(jointNode);
            let mat = new import_three.Matrix4();
            skinEntry.inverseBindMatrices !== void 0 && mat.fromArray(skinEntry.inverseBindMatrices.array, j * 16), boneInverses.push(mat);
          } else
            console.warn('THREE.GltfLoader: Joint "%s" could not be found.', skinEntry.joints[j]);
        }
        mesh.bind(new import_three.Skeleton(bones, boneInverses), mesh.matrixWorld);
      }), node;
    });
  }).then(function(node) {
    parentObject.add(node);
    let pending = [];
    if (nodeDef.children) {
      let children = nodeDef.children;
      for (let i = 0, il = children.length; i < il; i++) {
        let child = children[i];
        pending.push(buildNodeHierarchy(child, node, json4, parser));
      }
    }
    return Promise.all(pending);
  });
}
function computeBounds(geometry, primitiveDef, parser) {
  let attributes2 = primitiveDef.attributes, box = new import_three.Box3();
  if (attributes2.POSITION !== void 0) {
    let accessor = parser.json.accessors[attributes2.POSITION], min = accessor.min, max = accessor.max;
    if (min !== void 0 && max !== void 0) {
      if (box.set(
        new import_three.Vector3(min[0], min[1], min[2]),
        new import_three.Vector3(max[0], max[1], max[2])
      ), accessor.normalized) {
        let boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
        box.min.multiplyScalar(boxScale), box.max.multiplyScalar(boxScale);
      }
    } else {
      console.warn("THREE.GltfLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  let targets = primitiveDef.targets;
  if (targets !== void 0) {
    let maxDisplacement = new import_three.Vector3(), vector = new import_three.Vector3();
    for (let i = 0, il = targets.length; i < il; i++) {
      let target = targets[i];
      if (target.POSITION !== void 0) {
        let accessor = parser.json.accessors[target.POSITION], min = accessor.min, max = accessor.max;
        if (min !== void 0 && max !== void 0) {
          if (vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0]))), vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1]))), vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2]))), accessor.normalized) {
            let boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
            vector.multiplyScalar(boxScale);
          }
          maxDisplacement.max(vector);
        } else
          console.warn("THREE.GltfLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    box.expandByVector(maxDisplacement);
  }
  geometry.boundingBox = box;
  let sphere = new import_three.Sphere();
  box.getCenter(sphere.center), sphere.radius = box.min.distanceTo(box.max) / 2, geometry.boundingSphere = sphere;
}
function addPrimitiveAttributes(geometry, primitiveDef, parser) {
  let attributes2 = primitiveDef.attributes, pending = [];
  function assignAttributeAccessor(accessorIndex, attributeName) {
    return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
      geometry.setAttribute(attributeName, accessor);
    });
  }
  for (let gltfAttributeName in attributes2) {
    let threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
    threeAttributeName in geometry.attributes || pending.push(assignAttributeAccessor(attributes2[gltfAttributeName], threeAttributeName));
  }
  if (primitiveDef.indices !== void 0 && !geometry.index) {
    let accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
      geometry.setIndex(accessor2);
    });
    pending.push(accessor);
  }
  return assignExtrasToUserData(geometry, primitiveDef), computeBounds(geometry, primitiveDef, parser), Promise.all(pending).then(function() {
    return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
  });
}
function toTrianglesDrawMode(geometry, drawMode) {
  let index = geometry.getIndex();
  if (index === null) {
    let indices = [], position = geometry.getAttribute("position");
    if (position !== void 0) {
      for (let i = 0; i < position.count; i++)
        indices.push(i);
      geometry.setIndex(indices), index = geometry.getIndex();
    } else
      return console.error("THREE.GltfLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), geometry;
  }
  let numberOfTriangles = index.count - 2, newIndices = [];
  if (drawMode === import_three.TriangleFanDrawMode)
    for (let i = 1; i <= numberOfTriangles; i++)
      newIndices.push(index.getX(0)), newIndices.push(index.getX(i)), newIndices.push(index.getX(i + 1));
  else
    for (let i = 0; i < numberOfTriangles; i++)
      i % 2 === 0 ? (newIndices.push(index.getX(i)), newIndices.push(index.getX(i + 1)), newIndices.push(index.getX(i + 2))) : (newIndices.push(index.getX(i + 2)), newIndices.push(index.getX(i + 1)), newIndices.push(index.getX(i)));
  newIndices.length / 3 !== numberOfTriangles && console.error("THREE.GltfLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  let newGeometry = geometry.clone();
  return newGeometry.setIndex(newIndices), newGeometry;
}
var gltf_loader_default = GltfLoader;

// app/utils/load-gltf-model.ts
function loadGLTFModel(scene, glbPath, options = { receiveShadow: !0, castShadow: !0 }) {
  let { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    new gltf_loader_default().load(
      glbPath,
      (gltf) => {
        let obj = gltf.scene;
        obj.name = "dog", obj.position.y = 0, obj.position.x = 0, obj.receiveShadow = receiveShadow, obj.castShadow = castShadow, scene.add(obj), obj.traverse(function(child) {
          child.isMesh && (child.castShadow = castShadow, child.receiveShadow = receiveShadow);
        }), resolve(obj);
      },
      void 0,
      function(error) {
        reject(error);
      }
    );
  });
}

// app/utils/orbit-control.ts
var import_three2 = require("three"), _changeEvent = { type: "change" }, _startEvent = { type: "start" }, _endEvent = { type: "end" }, OrbitControls = class extends import_three2.EventDispatcher {
  constructor(object, domElement) {
    super(), this.object = object, this.domElement = domElement, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new import_three2.Vector3(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: import_three2.MOUSE.ROTATE, MIDDLE: import_three2.MOUSE.DOLLY, RIGHT: import_three2.MOUSE.PAN }, this.touches = { ONE: import_three2.TOUCH.ROTATE, TWO: import_three2.TOUCH.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return spherical.phi;
    }, this.getAzimuthalAngle = function() {
      return spherical.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(domElement2) {
      domElement2.addEventListener("keydown", onKeyDown), this._domElementKeyEvents = domElement2;
    }, this.saveState = function() {
      scope.target0.copy(scope.target), scope.position0.copy(scope.object.position), scope.zoom0 = scope.object.zoom;
    }, this.reset = function() {
      scope.target.copy(scope.target0), scope.object.position.copy(scope.position0), scope.object.zoom = scope.zoom0, scope.object.updateProjectionMatrix(), scope.dispatchEvent(_changeEvent), scope.update(), state = STATE.NONE;
    }, this.update = function() {
      let offset = new import_three2.Vector3(), quat = new import_three2.Quaternion().setFromUnitVectors(object.up, new import_three2.Vector3(0, 1, 0)), quatInverse = quat.clone().invert(), lastPosition = new import_three2.Vector3(), lastQuaternion = new import_three2.Quaternion(), twoPI = 2 * Math.PI;
      return function() {
        let position = scope.object.position;
        offset.copy(position).sub(scope.target), offset.applyQuaternion(quat), spherical.setFromVector3(offset), scope.autoRotate && state === STATE.NONE && rotateLeft(getAutoRotationAngle()), scope.enableDamping ? (spherical.theta += sphericalDelta.theta * scope.dampingFactor, spherical.phi += sphericalDelta.phi * scope.dampingFactor) : (spherical.theta += sphericalDelta.theta, spherical.phi += sphericalDelta.phi);
        let min = scope.minAzimuthAngle, max = scope.maxAzimuthAngle;
        return isFinite(min) && isFinite(max) && (min < -Math.PI ? min += twoPI : min > Math.PI && (min -= twoPI), max < -Math.PI ? max += twoPI : max > Math.PI && (max -= twoPI), min <= max ? spherical.theta = Math.max(min, Math.min(max, spherical.theta)) : spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta)), spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi)), spherical.makeSafe(), spherical.radius *= scale, spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)), scope.enableDamping === !0 ? scope.target.addScaledVector(panOffset, scope.dampingFactor) : scope.target.add(panOffset), offset.setFromSpherical(spherical), offset.applyQuaternion(quatInverse), position.copy(scope.target).add(offset), scope.object.lookAt(scope.target), scope.enableDamping === !0 ? (sphericalDelta.theta *= 1 - scope.dampingFactor, sphericalDelta.phi *= 1 - scope.dampingFactor, panOffset.multiplyScalar(1 - scope.dampingFactor)) : (sphericalDelta.set(0, 0, 0), panOffset.set(0, 0, 0)), scale = 1, zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS ? (scope.dispatchEvent(_changeEvent), lastPosition.copy(scope.object.position), lastQuaternion.copy(scope.object.quaternion), zoomChanged = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      scope.domElement.removeEventListener("contextmenu", onContextMenu), scope.domElement.removeEventListener("pointerdown", onPointerDown), scope.domElement.removeEventListener("pointercancel", onPointerCancel), scope.domElement.removeEventListener("wheel", onMouseWheel), scope.domElement.removeEventListener("pointermove", onPointerMove), scope.domElement.removeEventListener("pointerup", onPointerUp), scope._domElementKeyEvents !== null && scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
    };
    let scope = this, STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    }, state = STATE.NONE, EPS = 1e-6, spherical = new import_three2.Spherical(), sphericalDelta = new import_three2.Spherical(), scale = 1, panOffset = new import_three2.Vector3(), zoomChanged = !1, rotateStart = new import_three2.Vector2(), rotateEnd = new import_three2.Vector2(), rotateDelta = new import_three2.Vector2(), panStart = new import_three2.Vector2(), panEnd = new import_three2.Vector2(), panDelta = new import_three2.Vector2(), dollyStart = new import_three2.Vector2(), dollyEnd = new import_three2.Vector2(), dollyDelta = new import_three2.Vector2(), pointers = [], pointerPositions = {};
    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }
    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }
    function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    }
    function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    }
    let panLeft = function() {
      let v = new import_three2.Vector3();
      return function(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0), v.multiplyScalar(-distance), panOffset.add(v);
      };
    }(), panUp = function() {
      let v = new import_three2.Vector3();
      return function(distance, objectMatrix) {
        scope.screenSpacePanning === !0 ? v.setFromMatrixColumn(objectMatrix, 1) : (v.setFromMatrixColumn(objectMatrix, 0), v.crossVectors(scope.object.up, v)), v.multiplyScalar(distance), panOffset.add(v);
      };
    }(), pan = function() {
      let offset = new import_three2.Vector3();
      return function(deltaX, deltaY) {
        let element = scope.domElement;
        if (scope.object.isPerspectiveCamera) {
          let position = scope.object.position;
          offset.copy(position).sub(scope.target);
          let targetDistance = offset.length();
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180), panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix), panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else
          scope.object.isOrthographicCamera ? (panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix), panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), scope.enablePan = !1);
      };
    }();
    function dollyOut(dollyScale) {
      scope.object.isPerspectiveCamera ? scale /= dollyScale : scope.object.isOrthographicCamera ? (scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale)), scope.object.updateProjectionMatrix(), zoomChanged = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), scope.enableZoom = !1);
    }
    function dollyIn(dollyScale) {
      scope.object.isPerspectiveCamera ? scale *= dollyScale : scope.object.isOrthographicCamera ? (scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale)), scope.object.updateProjectionMatrix(), zoomChanged = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), scope.enableZoom = !1);
    }
    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY), rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      let element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight), rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight), rotateStart.copy(rotateEnd), scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY), dollyDelta.subVectors(dollyEnd, dollyStart), dollyDelta.y > 0 ? dollyOut(getZoomScale()) : dollyDelta.y < 0 && dollyIn(getZoomScale()), dollyStart.copy(dollyEnd), scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY), panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed), pan(panDelta.x, panDelta.y), panStart.copy(panEnd), scope.update();
    }
    function handleMouseWheel(event) {
      event.deltaY < 0 ? dollyIn(getZoomScale()) : event.deltaY > 0 && dollyOut(getZoomScale()), scope.update();
    }
    function handleKeyDown(event) {
      let needsUpdate = !1;
      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed), needsUpdate = !0;
          break;
        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed), needsUpdate = !0;
          break;
        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0), needsUpdate = !0;
          break;
        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0), needsUpdate = !0;
          break;
      }
      needsUpdate && (event.preventDefault(), scope.update());
    }
    function handleTouchStartRotate() {
      if (pointers.length === 1)
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      else {
        let x = 0.5 * (pointers[0].pageX + pointers[1].pageX), y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x, y);
      }
    }
    function handleTouchStartPan() {
      if (pointers.length === 1)
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      else {
        let x = 0.5 * (pointers[0].pageX + pointers[1].pageX), y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x, y);
      }
    }
    function handleTouchStartDolly() {
      let dx = pointers[0].pageX - pointers[1].pageX, dy = pointers[0].pageY - pointers[1].pageY, distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan() {
      scope.enableZoom && handleTouchStartDolly(), scope.enablePan && handleTouchStartPan();
    }
    function handleTouchStartDollyRotate() {
      scope.enableZoom && handleTouchStartDolly(), scope.enableRotate && handleTouchStartRotate();
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1)
        rotateEnd.set(event.pageX, event.pageY);
      else {
        let position = getSecondPointerPosition(event), x = 0.5 * (event.pageX + position.x), y = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x, y);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      let element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight), rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight), rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length === 1)
        panEnd.set(event.pageX, event.pageY);
      else {
        let position = getSecondPointerPosition(event), x = 0.5 * (event.pageX + position.x), y = 0.5 * (event.pageY + position.y);
        panEnd.set(x, y);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed), pan(panDelta.x, panDelta.y), panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      let position = getSecondPointerPosition(event), dx = event.pageX - position.x, dy = event.pageY - position.y, distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance), dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed)), dollyOut(dollyDelta.y), dollyStart.copy(dollyEnd);
    }
    function handleTouchMoveDollyPan(event) {
      scope.enableZoom && handleTouchMoveDolly(event), scope.enablePan && handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      scope.enableZoom && handleTouchMoveDolly(event), scope.enableRotate && handleTouchMoveRotate(event);
    }
    function onPointerDown(event) {
      scope.enabled !== !1 && (pointers.length === 0 && (scope.domElement.setPointerCapture(event.pointerId), scope.domElement.addEventListener("pointermove", onPointerMove), scope.domElement.addEventListener("pointerup", onPointerUp)), addPointer(event), event.pointerType === "touch" ? onTouchStart(event) : onMouseDown(event));
    }
    function onPointerMove(event) {
      scope.enabled !== !1 && (event.pointerType === "touch" ? onTouchMove(event) : onMouseMove(event));
    }
    function onPointerUp(event) {
      removePointer(event), pointers.length === 0 && (scope.domElement.releasePointerCapture(event.pointerId), scope.domElement.removeEventListener("pointermove", onPointerMove), scope.domElement.removeEventListener("pointerup", onPointerUp)), scope.dispatchEvent(_endEvent), state = STATE.NONE;
    }
    function onPointerCancel(event) {
      removePointer(event);
    }
    function onMouseDown(event) {
      let mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case import_three2.MOUSE.DOLLY:
          if (scope.enableZoom === !1)
            return;
          handleMouseDownDolly(event), state = STATE.DOLLY;
          break;
        case import_three2.MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === !1)
              return;
            handleMouseDownPan(event), state = STATE.PAN;
          } else {
            if (scope.enableRotate === !1)
              return;
            handleMouseDownRotate(event), state = STATE.ROTATE;
          }
          break;
        case import_three2.MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === !1)
              return;
            handleMouseDownRotate(event), state = STATE.ROTATE;
          } else {
            if (scope.enablePan === !1)
              return;
            handleMouseDownPan(event), state = STATE.PAN;
          }
          break;
        default:
          state = STATE.NONE;
      }
      state !== STATE.NONE && scope.dispatchEvent(_startEvent);
    }
    function onMouseMove(event) {
      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === !1)
            return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === !1)
            return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === !1)
            return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      scope.enabled === !1 || scope.enableZoom === !1 || state !== STATE.NONE || (event.preventDefault(), scope.dispatchEvent(_startEvent), handleMouseWheel(event), scope.dispatchEvent(_endEvent));
    }
    function onKeyDown(event) {
      scope.enabled === !1 || scope.enablePan === !1 || handleKeyDown(event);
    }
    function onTouchStart(event) {
      switch (trackPointer(event), pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case import_three2.TOUCH.ROTATE:
              if (scope.enableRotate === !1)
                return;
              handleTouchStartRotate(), state = STATE.TOUCH_ROTATE;
              break;
            case import_three2.TOUCH.PAN:
              if (scope.enablePan === !1)
                return;
              handleTouchStartPan(), state = STATE.TOUCH_PAN;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case import_three2.TOUCH.DOLLY_PAN:
              if (scope.enableZoom === !1 && scope.enablePan === !1)
                return;
              handleTouchStartDollyPan(), state = STATE.TOUCH_DOLLY_PAN;
              break;
            case import_three2.TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === !1 && scope.enableRotate === !1)
                return;
              handleTouchStartDollyRotate(), state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        default:
          state = STATE.NONE;
      }
      state !== STATE.NONE && scope.dispatchEvent(_startEvent);
    }
    function onTouchMove(event) {
      switch (trackPointer(event), state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === !1)
            return;
          handleTouchMoveRotate(event), scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === !1)
            return;
          handleTouchMovePan(event), scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === !1 && scope.enablePan === !1)
            return;
          handleTouchMoveDollyPan(event), scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === !1 && scope.enableRotate === !1)
            return;
          handleTouchMoveDollyRotate(event), scope.update();
          break;
        default:
          state = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      scope.enabled !== !1 && event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (let i = 0; i < pointers.length; i++)
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
    }
    function trackPointer(event) {
      let position = pointerPositions[event.pointerId];
      position === void 0 && (position = new import_three2.Vector2(), pointerPositions[event.pointerId] = position), position.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      let pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    }
    scope.domElement.addEventListener("contextmenu", onContextMenu), scope.domElement.addEventListener("pointerdown", onPointerDown), scope.domElement.addEventListener("pointercancel", onPointerCancel), scope.domElement.addEventListener("wheel", onMouseWheel, { passive: !1 }), this.update();
  }
};
var orbit_control_default = OrbitControls;

// app/components/dog.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}
var VoxelDog = () => {
  let refContainer = (0, import_react6.useRef)(), [loading, setLoading] = (0, import_react6.useState)(!0), [renderer, setRenderer] = (0, import_react6.useState)(), [_camera, setCamera] = (0, import_react6.useState)(), [target] = (0, import_react6.useState)(new THREE.Vector3(-0.5, 1.2, 0)), [initialCameraPosition] = (0, import_react6.useState)(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  ), [scene] = (0, import_react6.useState)(new THREE.Scene()), [_controls, setControls] = (0, import_react6.useState)(), handleWindowResize = (0, import_react6.useCallback)(() => {
    let { current: container } = refContainer;
    if (container && renderer) {
      let scW = container.clientWidth, scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, [renderer]);
  return (0, import_react6.useEffect)(() => {
    let { current: container } = refContainer;
    if (container && !renderer) {
      let scW = container.clientWidth, scH = container.clientHeight, renderer2 = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
      });
      renderer2.setPixelRatio(window.devicePixelRatio), renderer2.setSize(scW, scH), renderer2.outputEncoding = THREE.sRGBEncoding, container.appendChild(renderer2.domElement), setRenderer(renderer2);
      let scale = scH * 5e-3 + 4.8, camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        5e4
      );
      camera.position.copy(initialCameraPosition), camera.lookAt(target), setCamera(camera);
      let ambientLight = new THREE.AmbientLight(13421772, 1);
      scene.add(ambientLight);
      let controls = new orbit_control_default(camera, renderer2.domElement);
      controls.autoRotate = !0, controls.target = target, setControls(controls), loadGLTFModel(scene, "/dog.glb", {
        receiveShadow: !1,
        castShadow: !1
      }).then(() => {
        animate(), setLoading(!1);
      });
      let req, frame = 0, animate = () => {
        if (req = requestAnimationFrame(animate), frame = frame <= 100 ? frame + 1 : frame, frame <= 100) {
          let p = initialCameraPosition, rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
          camera.position.y = 10, camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed), camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed), camera.lookAt(target);
        } else
          controls.update();
        renderer2.render(scene, camera);
      };
      return () => {
        cancelAnimationFrame(req), renderer2.dispose();
      };
    }
  }, []), (0, import_react6.useEffect)(() => (window.addEventListener("resize", handleWindowResize, !1), () => {
    window.removeEventListener("resize", handleWindowResize, !1);
  }), [renderer, handleWindowResize]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DogContainer, {
    ref: refContainer,
    children: loading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DogSpinner, {}, void 0, !1, {
      fileName: "app/components/dog.tsx",
      lineNumber: 124,
      columnNumber: 54
    }, this)
  }, void 0, !1, {
    fileName: "app/components/dog.tsx",
    lineNumber: 124,
    columnNumber: 9
  }, this);
}, dog_default = VoxelDog;

// app/layout/index.tsx
var import_react13 = require("@chakra-ui/react");

// app/layout/footer.tsx
var import_react7 = require("@chakra-ui/react"), import_styled = __toESM(require("@emotion/styled")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), BoxFooter = (0, import_styled.default)(import_react7.Box)`
  position: absolute;
    left: 50%;
    bottom:0;
    margin-right: -50%;
    transform: translate(-50%, 0) 
`;
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Box, {
    align: "center",
    opacity: 0.4,
    marginY: 4,
    fontSize: "sm",
    children: [
      "\xA9 ",
      new Date().getFullYear(),
      " Nguyen Ba Tran Van. All Rights Reserved."
    ]
  }, void 0, !0, {
    fileName: "app/layout/footer.tsx",
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

// app/layout/navbar.tsx
var import_icons2 = require("@chakra-ui/icons"), import_react11 = require("@chakra-ui/react"), import_react12 = require("@remix-run/react"), import_io5 = require("react-icons/io5");

// app/components/logo.tsx
var import_react8 = require("@chakra-ui/react"), import_styled2 = __toESM(require("@emotion/styled")), import_react9 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LogoBox = import_styled2.default.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;
function Logo() {
  let footPrintImg = `/images/footprint${(0, import_react8.useColorModeValue)("", "-dark")}.png`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.NavLink, {
    to: "/",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoBox, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Box, {
        display: "flex",
        alignItems: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Image, {
            src: footPrintImg,
            width: "20px",
            height: "20px",
            alt: "logo"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Text, {
            color: (0, import_react8.useColorModeValue)("gray.800", "whiteAlpha.900"),
            fontWeight: "bold",
            ml: 3,
            children: "Van Nguyen"
          }, void 0, !1, {
            fileName: "app/components/logo.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/logo.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/components/logo.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/logo.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this);
}

// app/components/theme-toggle-button.tsx
var import_framer_motion = require("framer-motion"), import_react10 = require("@chakra-ui/react"), import_icons = require("@chakra-ui/icons"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ThemeToggleButton = () => {
  let { toggleColorMode } = (0, import_react10.useColorMode)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: !0,
    initial: !1,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion.motion.div, {
      style: { display: "inline-block" },
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
      transition: { duration: 0.2 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.IconButton, {
        "aria-label": "Toggle theme",
        colorScheme: (0, import_react10.useColorModeValue)("purple", "orange"),
        icon: (0, import_react10.useColorModeValue)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons.MoonIcon, {}, void 0, !1, {
          fileName: "app/components/theme-toggle-button.tsx",
          lineNumber: 21,
          columnNumber: 45
        }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons.SunIcon, {}, void 0, !1, {
          fileName: "app/components/theme-toggle-button.tsx",
          lineNumber: 21,
          columnNumber: 59
        }, this)),
        onClick: toggleColorMode
      }, void 0, !1, {
        fileName: "app/components/theme-toggle-button.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, (0, import_react10.useColorModeValue)("light", "dark"), !1, {
      fileName: "app/components/theme-toggle-button.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/theme-toggle-button.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}, theme_toggle_button_default = ThemeToggleButton;

// app/layout/navbar.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LinkItem = ({ path, children, ...props }) => {
  let inactiveColor = (0, import_react11.useColorModeValue)("gray200", "whiteAlpha.900");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
    p: 2,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
      to: path,
      style: ({ isActive }) => isActive ? {
        padding: "0.5rem",
        color: isActive ? "#202023" : inactiveColor,
        backgroundColor: isActive ? "#88ccca" : void 0
      } : { padding: "0.5rem" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
        display: "inline-flex",
        alignItems: "center",
        style: { gap: 4 },
        pl: 2,
        children
      }, void 0, !1, {
        fileName: "app/layout/navbar.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/layout/navbar.tsx",
      lineNumber: 21,
      columnNumber: 24
    }, this)
  }, void 0, !1, {
    fileName: "app/layout/navbar.tsx",
    lineNumber: 21,
    columnNumber: 13
  }, this);
};
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
    position: "fixed",
    bg: (0, import_react11.useColorModeValue)("#ffffff40", "#20202380"),
    zIndex: 2,
    top: 0,
    w: "100%",
    as: "nav",
    css: { backdropFilter: "blur(10px)" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Container, {
      display: "flex",
      p: 2,
      maxW: "container.md",
      wrap: "wrap",
      align: "center",
      justify: "space-between",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Flex, {
          align: "center",
          mr: 5,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Heading, {
            as: "h1",
            size: "lg",
            letterSpacing: "tighter",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, !1, {
              fileName: "app/layout/navbar.tsx",
              lineNumber: 58,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/layout/navbar.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this)
        }, void 0, !1, {
          fileName: "app/layout/navbar.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Stack, {
          direction: { base: "column", md: "row" },
          display: { base: "none", md: "flex" },
          width: { base: "full", md: "auto" },
          alignItems: "center",
          flexGrow: 1,
          mt: { base: 4, md: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
              path: "/blogs",
              children: "Blogs"
            }, void 0, !1, {
              fileName: "app/layout/navbar.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, {
              path: "/product",
              children: "Product"
            }, void 0, !1, {
              fileName: "app/layout/navbar.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
              target: "_blank",
              href: "https://github.com/nguyenbatranvan/remix-app",
              display: "flex",
              alignItems: "center",
              style: { gap: 4 },
              pl: 2,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_io5.IoLogoGithub, {}, void 0, !1, {
                  fileName: "app/layout/navbar.tsx",
                  lineNumber: 82,
                  columnNumber: 21
                }, this),
                "Source"
              ]
            }, void 0, !0, {
              fileName: "app/layout/navbar.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/layout/navbar.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
          flex: 1,
          align: "right",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(theme_toggle_button_default, {}, void 0, !1, {
              fileName: "app/layout/navbar.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
              ml: 2,
              display: { base: "inline-block", md: "none" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Menu, {
                isLazy: !0,
                id: "navbar-menu",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.MenuButton, {
                    as: import_react11.IconButton,
                    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons2.HamburgerIcon, {}, void 0, !1, {
                      fileName: "app/layout/navbar.tsx",
                      lineNumber: 92,
                      columnNumber: 35
                    }, this),
                    variant: "outline",
                    "aria-label": "Options"
                  }, void 0, !1, {
                    fileName: "app/layout/navbar.tsx",
                    lineNumber: 90,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.MenuList, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                        to: "/",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.MenuItem, {
                          as: import_react11.Link,
                          children: "About"
                        }, void 0, !1, {
                          fileName: "app/layout/navbar.tsx",
                          lineNumber: 98,
                          columnNumber: 33
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/layout/navbar.tsx",
                        lineNumber: 97,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                        to: "/blogs",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.MenuItem, {
                          as: import_react11.Link,
                          children: "Blogs"
                        }, void 0, !1, {
                          fileName: "app/layout/navbar.tsx",
                          lineNumber: 101,
                          columnNumber: 33
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/layout/navbar.tsx",
                        lineNumber: 100,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                        to: "/product",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.MenuItem, {
                          as: import_react11.Link,
                          children: "Product"
                        }, void 0, !1, {
                          fileName: "app/layout/navbar.tsx",
                          lineNumber: 104,
                          columnNumber: 33
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/layout/navbar.tsx",
                        lineNumber: 103,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.MenuItem, {
                        as: import_react11.Link,
                        href: "https://github.com/nguyenbatranvan/remix-app",
                        children: "View Source"
                      }, void 0, !1, {
                        fileName: "app/layout/navbar.tsx",
                        lineNumber: 106,
                        columnNumber: 29
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/layout/navbar.tsx",
                    lineNumber: 96,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/layout/navbar.tsx",
                lineNumber: 89,
                columnNumber: 21
              }, this)
            }, void 0, !1, {
              fileName: "app/layout/navbar.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/layout/navbar.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/layout/navbar.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/layout/navbar.tsx",
    lineNumber: 42,
    columnNumber: 12
  }, this);
}

// app/layout/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Box, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, !1, {
        fileName: "app/layout/index.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/layout/index.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/layout/index.tsx",
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

// app/theme/theme.ts
var import_react14 = require("@chakra-ui/react"), import_theme_tools = require("@chakra-ui/theme-tools"), config = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, customTheme = (0, import_react14.extendTheme)({
  components: {
    Link: {
      baseStyle: (props) => ({
        color: (0, import_theme_tools.mode)("#3d7aed", "#ff63c3")(props),
        textUnderlineOffset: 3
      })
    },
    Heading: {
      defaultProps: {},
      variants: {
        title: {
          fontSize: "4xl"
        },
        "title-under-line": (props) => ({
          textDecoration: "underline",
          fontSize: 20,
          textUnderlineOffset: 6,
          textDecorationColor: "#525252",
          textDecorationThickness: 4,
          marginTop: 3,
          marginBottom: 4
        })
      },
      baseStyle: (props) => ({
        lineHeight: 1.2,
        color: (0, import_theme_tools.mode)("blackAlpha.900", "#fff")(props),
        fontWeight: 700
      })
    }
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif"
  },
  config,
  styles: {
    global: (props) => ({
      " .grid-item-thumbnail": {
        "border-radius": "12px"
      },
      "html,body": {
        bg: (0, import_theme_tools.mode)("#f0e7db", "#202023")(props),
        fontFamily: "Montserrat, sans-serif"
      },
      h1: {
        fontSize: "3xl",
        fontWeight: "500"
      }
    })
  }
});

// app/utils/fetch-json.ts
var fetcherJSON = (url, config2) => fetch(url, config2).then((res) => res.json());

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
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
  }
], loader = async ({ request }) => {
  let location = new URL(request.url), config2 = await fetcherJSON(location.origin + "/config.json");
  return (0, import_node.json)(config2);
}, Document = (0, import_react16.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverStyleData = (0, import_react15.useContext)(ServerStyleContext), clientStyleData = (0, import_react15.useContext)(ClientStyleContext);
    return (0, import_react15.useEffect)(() => {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 76,
              columnNumber: 17
            }, this),
            serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, !1, {
              fileName: "app/root.tsx",
              lineNumber: 78,
              columnNumber: 21
            }, this))
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.ChakraProvider, {
      theme: customTheme,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion2.AnimatePresence, {
        exitBeforeEnter: !0,
        initial: !0,
        onExitComplete: () => {
          typeof window < "u" && window.scrollTo({ top: 0 });
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Box, {
              marginTop: "40px",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(dog_default, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 109,
                columnNumber: 29
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 108,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Container, {
              paddingBottom: 10,
              position: "relative",
              transform: "none",
              opacity: 1,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 112,
                columnNumber: 29
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 111,
              columnNumber: 25
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 107,
          columnNumber: 21
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this);
}

// mdx:routes/blogs/axios-first-blog.mdx
var axios_first_blog_exports = {};
__export(axios_first_blog_exports, {
  ComponentUsingData: () => ComponentUsingData,
  attributes: () => attributes,
  default: () => axios_first_blog_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta2
});
var import_react19 = __toESM(require("react")), import_react20 = require("@remix-run/react"), import_react21 = require("@chakra-ui/react"), import_github_dark_dimmed = __toESM(require_github_dark_dimmed()), attributes = {
  meta: {
    title: "Axios with reactjs, axios call request",
    description: "Promise based HTTP client for the browser and node.js, how to write axios with react most useful",
    image: "/images/blogs/axios-first-blog.png",
    "og:image": "/images/blogs/axios-first-blog.png"
  },
  headers: null,
  "Cache-Control": "no-cache"
}, loader2 = async () => ({
  mamboNumber: 5
}), links2 = () => [{
  rel: "stylesheet",
  href: import_github_dark_dimmed.default
}];
function ComponentUsingData() {
  let { mamboNumber } = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement("div", {
    id: "loader"
  }, "Mambo Number: ", mamboNumber), /* @__PURE__ */ import_react19.default.createElement(import_react21.Button, null, "KKK"));
}
function MDXContent(props = {}) {
  let _components = Object.assign({
    p: "p",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(import_react21.Heading, {
    marginBottom: 4
  }, "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt axios m\u1ED9t c\xE1ch ti\u1EC7n \xEDch v\u1EDBi reactjs"), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, `N\u1EBFu l\xE0m vi\u1EC7c v\u1EDBi t\u01B0 c\xE1ch l\xE0 1 front-end developer th\xEC s\u1EF1 t\u01B0\u01A1ng t\xE1c gi\u1EEFa client v\u1EDBi server \u0111\u1EC3 l\u1EA5y data v\xE0 x\u1EED l\xFD l\xE0
chuy\u1EC7n kh\xF4ng c\xF2n xa l\u1EA1 v\u1EDBi c\xE1c b\u1EA1n. V\xE0 m\u1ED9t th\u01B0 vi\u1EC7n m\u1EA1nh m\u1EBD v\xE0 ph\u1ED5 bi\u1EBFn \u0111\u1EC3 l\xE0m \u0111i\u1EC1u n\xE0y l\xE0`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Link, {
    href: "https://www.npmjs.com/package/axios"
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green",
    mr: 2
  }, "Axios"), `
Axios npm packages`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Heading, {
    variant: "title-under-line"
  }, "1. C\xE1ch s\u1EED d\u1EE5ng"), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "\u0110\u1EA7u ti\xEAn b\u1EA1n s\u1EBD t\u1EA1o ra m\u1ED9t instance c\u1EE7a axios")), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.pre, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " axios ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"axios"'), `;
`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " instance = axios.", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "create"), `({
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "headers"), `: {
        `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'content-type'"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'application/json; charset=UTF-8'"), `
    },
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "timeout"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-number"
  }, "300000"), `,
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "timeoutErrorMessage"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "`Connection is timeout exceeded`"), `
});
`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 2
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Ti\u1EBFp theo s\u1EBD d\xF9ng instance n\xE0y \u0111\u1EC3 g\u1ECDi request")), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.pre, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, {
    className: "hljs language-js"
  }, "instance.", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "get"), "(", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'link request....'"), `)
  .`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "then"), "(", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " (", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-params"
  }, "response"), `) {
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// handle success"), `
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-variable language_"
  }, "console"), ".", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "log"), `(response);
  })
  .`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "catch"), "(", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " (", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-params"
  }, "error"), `) {
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// handle error"), `
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-variable language_"
  }, "console"), ".", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "log"), `(error);
  })
  .`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "then"), "(", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "function"), " (", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-params"
  }), `) {
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// always executed"), `
  });
`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "T\u1EDBi \u0111\xE2y b\u1EA1n c\xF3 th\u1EC3 \u0111\u1EB7t c\xE2u h\u1ECFi"), /* @__PURE__ */ import_react19.default.createElement(import_react21.UnorderedList, {
    my: 2
  }, /* @__PURE__ */ import_react19.default.createElement(import_react21.ListItem, null, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, `N\u1EBFu nh\u01B0 c\xF3 nhi\u1EC1u t\u01B0\u01A1ng t\xE1c gi\u1EEFa client v\xE0 server th\xEC b\u1EA1n s\u1EBD ph\u1EA3i vi\u1EBFt \u0111i vi\u1EBFt l\u1EA1i \u0111i\u1EC1u n\xE0y nhi\u1EC1u l\u1EA7n, trong
code th\xEC \u0111\xE2y b\u1EA1n \u0111\xE3 vi ph\u1EA1m m\u1ED9t l\u1ED7i \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 `, /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green"
  }, "DRY"), ` (Don\u2019t Repeat
Yourself)`)), /* @__PURE__ */ import_react19.default.createElement(import_react21.ListItem, null, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, `V\xE0 v\u1EDBi v\u1EA5n \u0111\u1EC1 code l\u1EB7p \u0111i l\u1EB7p l\u1EA1i nh\u01B0 v\u1EADy, khi c\xF3 1 s\u1EF1 thay \u0111\u1ED5i code th\xEC b\u1EA1n s\u1EBD ph\u1EA3i t\xECm v\xE0 s\u1EEF l\u1EA1i t\u1EEBng h\xE0m
tr\xEAn`))), /* @__PURE__ */ import_react19.default.createElement("p", null, "N\u1EBFu b\u1EA1n c\xF3 \u0111\u1EB7t c\xE2u h\u1ECFi nh\u01B0 v\u1EADy th\xEC ph\u1EA7n ti\u1EBFp theo s\u1EBD d\xE0nh cho b\u1EA1n.")), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Heading, {
    variant: "title-under-line"
  }, "2. Vi\u1EBFt axios \u0111\u1EC3 t\xE1i s\u1EED d\u1EE5ng"), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "\u0110\u1EA7u ti\xEAn b\u1EA1n s\u1EBD t\u1EA1o 1 th\u01B0 m\u1EE5c v\xED d\u1EE5 ", /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, null, "src/api/core.ts"), " v\xE0 c\u0169ng nh\u01B0 ph\u1EA7n 1 b\u1EA1n s\u1EBD t\u1EA1o instance c\u1EE7a axios")), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.pre, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, {
    className: "hljs language-js"
  }, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " axios ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"axios"'), `;
`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " instance = axios.", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "create"), `({
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "headers"), `: {
        `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'content-type'"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'application/json; charset=UTF-8'"), `
    },
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "timeout"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-number"
  }, "300000"), `,
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "timeoutErrorMessage"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "`Connection is timeout exceeded`"), `
});
`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Theo \u0111\xF3 b\u1EA1n s\u1EBD t\u1EA1o 1 model \u0111\u1EC3 truy\u1EC1n params v\xE0o c\xE1c h\xE0m c\u1EE7a axios m\xE0 m\xECnh s\u1EBD h\u01B0\u1EDBng d\u1EABn s\u1EAFp t\u1EDBi"), /* @__PURE__ */ import_react19.default.createElement(import_react21.UnorderedList, {
    my: 2
  }, /* @__PURE__ */ import_react19.default.createElement(import_react21.ListItem, null, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green"
  }, "isLoading"), " - show loading khi call request")), /* @__PURE__ */ import_react19.default.createElement(import_react21.ListItem, null, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green"
  }, "payload, headers"), ` - \u0111\u1EC3 truy\u1EC1n xu\u1ED1ng khi call request (nh\u01B0
Authorization...)`)), /* @__PURE__ */ import_react19.default.createElement(import_react21.ListItem, null, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green"
  }, "url"), " - \u0111\u01B0\u1EDDng d\u1EABn t\u01B0\u01A1ng t\xE1c v\u1EDBi server")))), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.pre, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, {
    className: "hljs language-ts"
  }, "   ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "interface"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "IRequest"), "<T = ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "any"), `> {
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "isLoading"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "boolean"), `;
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "payload"), `: T;
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "headers"), `: {
        [`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "key"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), "]: ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), " | ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "number"), `;
    };
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "url"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), `;
}
`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Ok!! V\xE0 b\xE2y gi\u1EDD h\xE3y vi\u1EBFt nh\u1EEFng h\xE0m t\u01B0\u01A1ng t\xE1c v\u1EDBi server b\u1EB1ng axios n\xE0o")), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.pre, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, {
    className: "hljs language-ts"
  }, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " {", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "AxiosResponse"), "} ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"axios"'), `;
`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "interface"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "PromiseState"), "<T = ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "unknown"), "> ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "extends"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "AxiosResponse"), `<T> {
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "totalItem"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "number"), `;
}

`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "BaseService"), ` = {
    get<T = `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "any"), `>({
                     url,
                     isLoading,
                     payload,
                     headers
                 }: `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "Partial"), "<", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "IRequest"), ">): ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "Promise"), "<", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "PromiseState"), `<T>> {
        `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), ` (isLoading)
           `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// todo show loading"), `
        `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " instance.", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-property"
  }, "get"), "<T, ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "PromiseState"), `<T>>(url, {
            `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "params"), `: payload,
            `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "baseURL"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'link base url'"), `,
            `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "headers"), `: headers || {}
        })
    }
}
`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "V\xE0 v\u1EDBi c\xE1c h\xE0n ", /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green"
  }, "put"), " ", /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green"
  }, "post"), " ", /* @__PURE__ */ import_react19.default.createElement(import_react21.Badge, {
    colorScheme: "green"
  }, "delete"), `
b\u1EA1n c\u0169ng c\xF3 th\u1EC3 tham kh\u1EA3o v\xE0 l\xE0m t\u01B0\u01A1ng t\u1EF1 nh\u01B0 v\xE2y`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Heading, {
    variant: "title-under-line"
  }, "3. S\u1EED d\u1EE5ng"), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, "M\xECnh s\u1EBD t\u1EA1o 1 model v\u1EC1 response"), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.pre, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, {
    className: "hljs language-ts"
  }, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "interface"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "ProductDetail"), `{
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "id"), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "number"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"title"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"description"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"price"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "number"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"discountPercentage"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "number"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"rating"'), ":", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "number"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"stock"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "number"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"brand"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"category"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"thumbnail"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), `;
  `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"images"'), ": ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "string"), `[];
}
`)), `
`, /* @__PURE__ */ import_react19.default.createElement(import_react21.Box, {
    marginY: 4
  }, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "B\xE2y gi\u1EDD \xE1p d\u1EE5ng nh\u1EEFng g\xEC \u0111\xE3 vi\u1EBFt t\u1EEB ph\u1EA7n 2 d\xF9ng \u0111\u1EC3 g\u1ECDi m\u1ED9t request chi ti\u1EBFt s\u1EA3n ph\u1EA9m")), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.pre, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, {
    className: "hljs language-ts"
  }, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " {useEffect} ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, '"react"'), `;
`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "getDetailProduct"), "=", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "async"), " (", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-params"
  }), `)=>{
   `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " response= ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "await"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "BaseService"), ".", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-property"
  }, "get"), "<", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "ProductDetail"), `>({
        `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "url"), ":", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'https://dummyjson.com/products/1'"), `,
        `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "isLoading"), ":", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-literal"
  }, "true"), `
   })
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "// reponse.data s\u1EBD c\xF3 ki\u1EC3u l\xE0 ProductDetail"), `
    `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-variable language_"
  }, "console"), ".", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "log"), "(", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'data'"), ",response.", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-property"
  }, "data"), `);
}
`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "useEffect"), "(", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-function"
  }, "()=>"), `{
    (`, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "async"), ` ()=>{
        `, /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "await"), " ", /* @__PURE__ */ import_react19.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "getDetailProduct"), `();
    })()
},[])
`)), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(import_react21.Heading, {
    variant: "title-under-line"
  }, "4. L\u1EDDi k\u1EBFt"), `
Trong b\xE0i vi\u1EBFt n\xE0y m\xECnh ch\u1EC9 h\u01B0\u1EDBng d\u1EABn v\u1EC1 c\xE1ch vi\u1EBFt t\u01B0\u01A1ng t\xE1c gi\u1EEFa client v\xE0 server, trong c\xE1c ph\u1EA7n t\u1EDBi m\xECnh s\u1EBD ra th\xEAm v\u1EC1 cache, x\u1EED l\xFD l\u1ED7i, mapper d\u1EEF li\u1EC7u t\u1EEB reponse v\u1EDBi axios.`));
  return MDXLayout ? /* @__PURE__ */ import_react19.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var axios_first_blog_default = MDXContent, filename = "axios-first-blog.mdx", headers = typeof attributes < "u" && attributes.headers, meta2 = typeof attributes < "u" && attributes.meta;

// app/routes/blogs/index.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta3
});
var import_react24 = require("@chakra-ui/react"), import_node2 = require("@remix-run/node"), import_react25 = require("@remix-run/react");

// app/components/card.tsx
var import_react22 = require("@chakra-ui/react"), import_react23 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function CardThumbnail({ thumbnail, title, children, href }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Box, {
    w: "100%",
    textAlign: "center",
    cursor: "pointer",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.NavLink, {
      to: href,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Image, {
          src: thumbnail,
          alt: title,
          className: "grid-item-thumbnail",
          placeholder: "blur"
        }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 7,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.LinkOverlay, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Text, {
            mt: 2,
            fontSize: 20,
            children: title
          }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 14,
            columnNumber: 17
          }, this)
        }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Text, {
          fontSize: 14,
          children
        }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 5,
    columnNumber: 13
  }, this);
}
var card_default = CardThumbnail;

// app/utils/variants-motion.ts
var variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
};

// app/components/motion-router.tsx
var import_framer_motion3 = require("framer-motion"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function MotionRouter({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion3.motion.div, {
    initial: "hidden",
    animate: "enter",
    exit: "exit",
    variants,
    transition: { duration: 0.4, type: "easeInOut" },
    style: { position: "relative" },
    children
  }, void 0, !1, {
    fileName: "app/components/motion-router.tsx",
    lineNumber: 5,
    columnNumber: 13
  }, this);
}
var motion_router_default = MotionRouter;

// app/routes/blogs/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  };
}
var loader3 = async () => (0, import_node2.json)([
  postFromModule(axios_first_blog_exports)
]);
function Index() {
  let posts = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion_router_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.SimpleGrid, {
      columns: [1, 1, 2],
      gap: 6,
      children: posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, {
        href: post.slug,
        thumbnail: post.image,
        title: post.title,
        children: post.description
      }, `blog-${index}`, !1, {
        fileName: "app/routes/blogs/index.tsx",
        lineNumber: 26,
        columnNumber: 40
      }, this))
    }, void 0, !1, {
      fileName: "app/routes/blogs/index.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/blogs/index.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this);
}
var meta3 = ({ data }) => {
  let postTitles = data.map((post) => post.title);
  return {
    title: "Blog page portfolio of nguyen ba tran van",
    description: `List of blogs: ${postTitles.join(",")}`,
    "og:description": `List of blogs: ${postTitles.join(",")}`,
    image: `${data[0].image}`,
    "og:image": `${data[0].image}`
  };
};

// app/routes/product.tsx
var product_exports = {};
__export(product_exports, {
  default: () => Product,
  loader: () => loader4,
  meta: () => meta4
});
var import_react27 = require("@chakra-ui/react"), import_node3 = require("@remix-run/node"), import_react28 = require("@remix-run/react");

// app/components/product-card.tsx
var import_react26 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProductCard({ image }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Center, {
    py: 12,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Box, {
      role: "group",
      p: 6,
      maxW: "330px",
      w: "full",
      bg: (0, import_react26.useColorModeValue)("white", "gray.800"),
      boxShadow: "2xl",
      rounded: "lg",
      pos: "relative",
      zIndex: 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Box, {
          rounded: "lg",
          mt: -12,
          pos: "relative",
          height: "230px",
          _after: {
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1
          },
          _groupHover: {
            _after: {
              filter: "blur(20px)"
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Image, {
            rounded: "lg",
            height: 230,
            width: 282,
            objectFit: "cover",
            src: image
          }, void 0, !1, {
            fileName: "app/components/product-card.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this)
        }, void 0, !1, {
          fileName: "app/components/product-card.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Stack, {
          pt: 10,
          align: "center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Text, {
              color: "gray.500",
              fontSize: "sm",
              textTransform: "uppercase",
              children: "Brand"
            }, void 0, !1, {
              fileName: "app/components/product-card.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Heading, {
              fontSize: "2xl",
              fontFamily: "body",
              fontWeight: 500,
              children: "Nice Chair, pink"
            }, void 0, !1, {
              fileName: "app/components/product-card.tsx",
              lineNumber: 49,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Stack, {
              direction: "row",
              align: "center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Text, {
                  fontWeight: 700,
                  fontSize: "xl",
                  children: "$57"
                }, void 0, !1, {
                  fileName: "app/components/product-card.tsx",
                  lineNumber: 53,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Text, {
                  textDecoration: "line-through",
                  color: "gray.600",
                  children: "$199"
                }, void 0, !1, {
                  fileName: "app/components/product-card.tsx",
                  lineNumber: 56,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/product-card.tsx",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/product-card.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/product-card.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this);
}
var product_card_default = ProductCard;

// app/routes/product.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async () => {
  let data = await fetcherJSON("https://dummyjson.com/products");
  return (0, import_node3.json)(data);
};
function Product() {
  let { products } = (0, import_react28.useLoaderData)(), loadProduct = async () => {
    let data = await (await fetch("https://dummyjson.com/products")).json();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion_router_default, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Heading, {
        variant: "title-under-line",
        children: "Products"
      }, void 0, !1, {
        fileName: "app/routes/product.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.SimpleGrid, {
        columns: [1, 1, 2],
        gap: 6,
        children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(product_card_default, {
          image: product.thumbnail
        }, product.id, !1, {
          fileName: "app/routes/product.tsx",
          lineNumber: 28,
          columnNumber: 42
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/product.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/product.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this);
}
var meta4 = ({ data, parentsData }) => {
  let description = data.products.map((product) => product.title);
  return {
    title: "Product app",
    description: `page is seo product ${description.join(",")}`,
    "og:description": `page is seo product ${description.join(",")}`,
    "og:image": `${data.products[0].thumbnail}`
  };
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  BioSection: () => BioSection,
  BioYear: () => BioYear,
  default: () => Index2,
  meta: () => meta5
});
var import_react29 = require("@chakra-ui/react"), import_styled4 = __toESM(require("@emotion/styled")), import_react30 = require("@remix-run/react"), import_io52 = require("react-icons/io5");

// app/components/paragrapth.ts
var import_styled3 = __toESM(require("@emotion/styled")), Paragraph = import_styled3.default.p`
  text-align: justify;
  text-indent: 1em;
`, paragrapth_default = Paragraph;

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ProfileImage = (0, import_react29.chakra)(import_react29.Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}), BioSection = (0, import_styled4.default)(import_react29.Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`, BioYear = import_styled4.default.span`
  font-weight: bold;
  margin-right: 1em;
`;
function Index2() {
  let navigate = (0, import_react30.useNavigate)(), onProducts = () => {
    navigate("/product");
  }, onBlogs = () => {
    navigate("/blogs");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion_router_default, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
        borderRadius: "lg",
        mb: 6,
        p: 3,
        textAlign: "center",
        bg: (0, import_react29.useColorModeValue)("whiteAlpha.500", "whiteAlpha.200"),
        css: { backdropFilter: "blur(10px)" },
        children: "Hello, I'm an indie app developer based in Vietnam!"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
        display: { md: "flex" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
            flexGrow: 1,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Heading, {
                as: "h2",
                variant: "page-title",
                children: "Nguy\u1EC5n B\xE1 Tr\u1EA7n V\u0103n"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 58,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: "StageIT iCondo ( Front end developer )"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 61,
                columnNumber: 25
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
            flexShrink: 0,
            mt: { base: 4, md: 0 },
            ml: { md: 6 },
            textAlign: "center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
              borderColor: "whiteAlpha.800",
              borderWidth: 2,
              borderStyle: "solid",
              w: "100px",
              h: "100px",
              display: "inline-block",
              borderRadius: "full",
              overflow: "hidden",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileImage, {
                src: "/images/profile.png",
                alt: "Profile image",
                borderRadius: "full",
                objectFit: "cover",
                width: "100%",
                height: "100%"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 79,
                columnNumber: 29
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 69,
              columnNumber: 25
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 63,
            columnNumber: 21
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
        marginY: 4,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Heading, {
            variant: "title-under-line",
            children: "Work"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 91,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(paragrapth_default, {
            children: "I am a project person on websites for product or outsource companies. My existing background is mainly on javascript language and strong support libraries for it like Reactjs, Nextjs, Remix and some frameworks like angular."
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 94,
            columnNumber: 21
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
        marginY: 4,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Heading, {
            variant: "title-under-line",
            children: "Bio"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 101,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioSection, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioYear, {
                children: "1996"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 105,
                columnNumber: 25
              }, this),
              "Born in Binh Thuan, Vietnam."
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 104,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioSection, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioYear, {
                children: "2014"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 109,
                columnNumber: 25
              }, this),
              "Study at university of natural sciences, Ho Chi Minh city, Vietnam"
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioSection, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioYear, {
                children: "2017"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 113,
                columnNumber: 25
              }, this),
              "Got my first programming job at INet Solutions"
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 112,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioSection, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BioYear, {
                children: "2019"
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 117,
                columnNumber: 25
              }, this),
              "Working at StageIt company"
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 116,
            columnNumber: 21
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
        marginY: 4,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Heading, {
            variant: "title-under-line",
            children: "Contact Social"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 122,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.List, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.ListItem, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Link, {
                  href: "https://github.com/nguyenbatranvan",
                  target: "_blank",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Button, {
                    variant: "ghost",
                    colorScheme: "teal",
                    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_io52.IoLogoGithub, {}, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 131,
                      columnNumber: 47
                    }, this),
                    children: "@nguyenbatranvan"
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 128,
                    columnNumber: 33
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 127,
                  columnNumber: 29
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 126,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.ListItem, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Link, {
                  href: "https://twitter.com/VnBKinh1",
                  target: "_blank",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Button, {
                    variant: "ghost",
                    colorScheme: "teal",
                    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_io52.IoLogoTwitter, {}, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 142,
                      columnNumber: 47
                    }, this),
                    children: "@VnBKinh1"
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 139,
                    columnNumber: 33
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 138,
                  columnNumber: 29
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 137,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.ListItem, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Link, {
                  href: "https://instagram.com/nguyenbatran",
                  target: "_blank",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Button, {
                    variant: "ghost",
                    colorScheme: "teal",
                    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_io52.IoLogoInstagram, {}, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 154,
                      columnNumber: 47
                    }, this),
                    children: "@nguyenbatran"
                  }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 151,
                    columnNumber: 33
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 150,
                  columnNumber: 29
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 149,
                columnNumber: 25
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 125,
            columnNumber: 21
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 121,
        columnNumber: 17
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 44,
    columnNumber: 13
  }, this);
}
var meta5 = () => ({
  title: "Portfolio of nguyen ba tran van",
  description: "This page is detail work of nguyen ba tran van from 2014 to now",
  "og:description": "This page is detail work of nguyen ba tran van from 2014 to now",
  "og:image": "/images/profile.png"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "97224d74", entry: { module: "/build/entry.client-PRVYZ75S.js", imports: ["/build/_shared/chunk-DLTBJWIM.js", "/build/_shared/chunk-2KJVXWSX.js", "/build/_shared/chunk-OL2A2WX4.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IDROFQUM.js", imports: ["/build/_shared/chunk-TVFHIIFP.js", "/build/_shared/chunk-2ZUEBVN2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/axios-first-blog": { id: "routes/blogs/axios-first-blog", parentId: "root", path: "blogs/axios-first-blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs/axios-first-blog-A6UAPNGZ.js", imports: ["/build/_shared/chunk-7O75O6HR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/index": { id: "routes/blogs/index", parentId: "root", path: "blogs", index: !0, caseSensitive: void 0, module: "/build/routes/blogs/index-MCUGCVQR.js", imports: ["/build/_shared/chunk-7O75O6HR.js", "/build/_shared/chunk-KGZSAFRJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LG2RSXB5.js", imports: ["/build/_shared/chunk-KGZSAFRJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/product": { id: "routes/product", parentId: "root", path: "product", index: void 0, caseSensitive: void 0, module: "/build/routes/product-AZDM7GJI.js", imports: ["/build/_shared/chunk-KGZSAFRJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-97224D74.js" };

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
  "routes/blogs/axios-first-blog": {
    id: "routes/blogs/axios-first-blog",
    parentId: "root",
    path: "blogs/axios-first-blog",
    index: void 0,
    caseSensitive: void 0,
    module: axios_first_blog_exports
  },
  "routes/blogs/index": {
    id: "routes/blogs/index",
    parentId: "root",
    path: "blogs",
    index: !0,
    caseSensitive: void 0,
    module: blogs_exports
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
//# sourceMappingURL=index.js.map
