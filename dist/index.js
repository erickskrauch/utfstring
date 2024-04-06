"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtfVisualString = exports.UtfString = void 0;
/// <reference lib="DOM" />
const utf_string_1 = require("./utf_string");
Object.defineProperty(exports, "UtfString", { enumerable: true, get: function () { return utf_string_1.UtfString; } });
const utf_visual_string_1 = require("./utf_visual_string");
Object.defineProperty(exports, "UtfVisualString", { enumerable: true, get: function () { return utf_visual_string_1.UtfVisualString; } });
// if there is a global window object add the classes to it
if (typeof window !== 'undefined') {
    window.UtfString = utf_string_1.UtfString;
    window.UtfVisualString = utf_visual_string_1.UtfVisualString;
}
