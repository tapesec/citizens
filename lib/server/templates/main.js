"use strict";

module.exports = function renderFullPage(content, preloadedState) {
    return "\n        <!doctype html>\n        <html>\n            <head>\n                <title>Redux Universal Example</title>\n            </head>\n            <body>\n                <div id=\"app\">" + content + "</div>\n                <script>\n                    window.__PRELOADED_STATE__ = " + JSON.stringify(preloadedState) + "\n                </script>\n                <script src=\"/static/bundle.js\"></script>\n                <script src=\"http://localhost:8080/assets/bundle.js\">\n            </body>\n        </html>\n    ";
};