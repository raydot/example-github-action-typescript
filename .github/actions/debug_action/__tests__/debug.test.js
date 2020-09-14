"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const debug_1 = __importDefault(require("../debug"));
beforeEach(() => {
    jest.resetModules();
    process.env['INPUT_AMAZING-CREATURE'] = 'person';
});
afterEach(() => {
    delete process.env['INPUT_AMAZING-CREATURE'];
});
describe('debug action debug messages', () => {
    it('outputs a debug message', async () => {
        const debugMock = jest.spyOn(core, 'debug');
        await debug_1.default();
        expect(debugMock).toHaveBeenCalledWith('👋 Hello! You are an amazing person! 🙌');
    });
});
// import * as core from '@actions/core'
// import run from '../debug'
// import fs from 'fs'
// import yaml from 'js-yaml'
// beforeEach(() => {
//   // console.log('dn', __dirname)
//   jest.resetModules()
//   // process.env["INPUT_AMAZING-CREATURE"] = "person"; // original call
//   const doc = yaml.safeLoad(fs.readFileSync('../action.yml', 'utf8'))
//   Object.keys(doc.inputs).forEach((name) => {
//     const envVar = `INPUT_${name.replace(/ /g, '_').toUpperCase()}`
//     process.env[envVar] = doc.inputs[name]['default']
//   })
// })
// afterEach(() => {
//   //delete process.env["INPUT_AMAZING-CREATURE"];
//   const doc = yaml.safeLoad(fs.readFileSync('../action.yml', 'utf-8'))
//   Object.keys(doc.inputs).forEach((name) => {
//     const envVar = `INPUT_${name.replace(/ /g, '_').toUpperCase()}`
//     delete process.env[envVar]
//   })
// })
describe('debug action debug messages', () => {
    it('outputs a debug message', async () => {
        const debugMock = jest.spyOn(core, 'debug');
        await debug_1.default();
        expect(debugMock).toHaveBeenCalledWith('👋 Hello! You are an amazing person! 🙌');
    });
});
