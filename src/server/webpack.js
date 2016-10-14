import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../configs/webpack-config-dev.js";
import konsole from "./utils/CustomLog.js";

var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	stats: { colors: true }
});

server.listen(8080, "localhost", function(err) {
	console.log(err);
	konsole.info("dev", "Hot reload server started on port 8080 !");
});