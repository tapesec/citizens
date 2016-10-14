module.exports = function renderFullPage(content, preloadedState) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>Redux Universal Example</title>
            </head>
            <body>
                <div id="app">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
                </script>
                <script src="/static/bundle.js"></script>
                <script src="http://localhost:8080/assets/bundle.js">
            </body>
        </html>
    `
}