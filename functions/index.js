"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// These are important and needed before anything else
require("zone.js/dist/zone-node");
require("reflect-metadata");
const functions = require("firebase-functions");
const platform_server_1 = require("@angular/platform-server");
const core_1 = require("@angular/core");
const express = require("express");
const path_1 = require("path");
const fs_1 = require("fs");
global.WebSocket = require('ws');
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Faster server renders w/ Prod mode (dev mode never needed)
core_1.enableProdMode();
// Express server
const app = express();
const DIST_FOLDER = path_1.join(process.cwd(), 'dist');
// Our index.html we'll use as our template
const template = fs_1.readFileSync(path_1.join(DIST_FOLDER, 'browser', 'index.html')).toString();
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory } = require('./dist/server/main.bundle');
app.get('html', (req, res) => {
    const url = req.path;
    platform_server_1.renderModuleFactory(AppServerModuleNgFactory, { document: template, url })
        .then(html => {
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    });
});
exports.seoapp = functions.https.onRequest(app);
