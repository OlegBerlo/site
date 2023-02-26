"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_1 = require("vscode");
var extension_listeners_1 = require("./extension-listeners");
var onSave = function (services, utils) {
    var gists = services.gists, insights = services.insights, logger = services.logger;
    var listener = extension_listeners_1.Listeners.OnSave;
    var listenerFn = function (doc) { return __awaiter(_this, void 0, void 0, function () {
        var file, editor, _a, id, filename, content, language, err_1, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    file = '';
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    editor = vscode_1.window.activeTextEditor;
                    _a = utils.files.extractTextDocumentDetails(doc, editor), id = _a.id, filename = _a.filename, content = _a.content, language = _a.language;
                    file = "\"" + filename + "\" ";
                    if (!id) return [3, 3];
                    logger.info("Saving \"" + filename + "\"");
                    return [4, gists.updateGist(id, filename, content)];
                case 2:
                    _b.sent();
                    utils.notify.info("Saved \"" + filename + "\"");
                    insights.track('save', { language: language });
                    return [3, 4];
                case 3:
                    logger.info("\"" + doc.fileName + "\" Not a Gist");
                    _b.label = 4;
                case 4: return [3, 6];
                case 5:
                    err_1 = _b.sent();
                    error = err_1;
                    logger.error("updateCodeBlock > " + (error && error.message));
                    insights.exception('updateCodeBlock', { messsage: error.message });
                    if (error && error.message === 'Not Found') {
                        utils.notify.error("Could Not Save " + file, "Reason: " + error.message);
                    }
                    return [3, 6];
                case 6: return [2];
            }
        });
    }); };
    return [listener, listenerFn];
};
exports.onSave = onSave;
//# sourceMappingURL=on-save.js.map