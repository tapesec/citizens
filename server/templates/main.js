module.exports = function renderFullPage(content, preloadedState) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>Citizen !</title>
                <link rel='stylesheet' href='/bundle.css'>
            </head>
            <body>
                <div class="container-fluid" id="app">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>`;
};
