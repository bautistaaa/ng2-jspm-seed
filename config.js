System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "app": {
      "main": "./boot",
      "format": "register",
      "defaultExtension": "js"
    }
  },

  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.3",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.3",
    "@angular/core": "npm:@angular/core@2.0.0-rc.3",
    "@angular/http": "npm:@angular/http@2.0.0-rc.3",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.3",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.3",
    "@angular/router": "npm:@angular/router@3.0.0-alpha.8",
    "@angular/router-deprecated": "npm:@angular/router-deprecated@2.0.0-rc.2",
    "es6-promise": "npm:es6-promise@3.2.1",
    "es6-shim": "github:es-shims/es6-shim@0.35.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "typescript": "npm:typescript@1.8.10",
    "zone.js": "npm:zone.js@0.6.12",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@angular/common@2.0.0-rc.3": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/compiler@2.0.0-rc.3": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/core@2.0.0-rc.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6",
      "zone.js": "npm:zone.js@0.6.12"
    },
    "npm:@angular/http@2.0.0-rc.3": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.3",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.3",
      "rxjs": "npm:rxjs@5.0.0-beta.6"
    },
    "npm:@angular/platform-browser-dynamic@2.0.0-rc.3": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.3",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.3",
      "@angular/core": "npm:@angular/core@2.0.0-rc.3",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/platform-browser@2.0.0-rc.3": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.3",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.3",
      "@angular/core": "npm:@angular/core@2.0.0-rc.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/router-deprecated@2.0.0-rc.2": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.3",
      "@angular/core": "npm:@angular/core@2.0.0-rc.3",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.3"
    },
    "npm:@angular/router@3.0.0-alpha.8": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.3",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.3",
      "@angular/core": "npm:@angular/core@2.0.0-rc.3",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.3",
      "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-promise@3.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.6.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
