(()=>{"use strict";var e={496:e=>{e.exports=require("vscode")}},r={};function o(t){var a=r[t];if(void 0!==a)return a.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}var t={};(()=>{var e=t;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const r=o(496);e.activate=function(e){let o=r.commands.registerCommand("bracket-pair-color-dlw.run",(()=>{const e=r.workspace.getConfiguration("editor.bracketPairColorDLW"),o=e.get("enabled");if(void 0===o){const e="Bracket Pair Color setting was not found";return r.window.showErrorMessage(e)}e.update("enabled",!o,r.ConfigurationTarget.Global).then((()=>{const e="Bracket Pair Color is "+(o?"disabled":"enabled");r.window.showInformationMessage(e)}),(()=>{r.window.showErrorMessage("Error toggling Bracket Pair color")}))}));e.subscriptions.push(o)},e.deactivate=function(){}})(),module.exports=t})();