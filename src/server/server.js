import express from "express";
import webpack from "webpack";


const { config } = require("../../config/index");
const app = express();

if (config.dev) {
  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: config.port, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get("*", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/app.css" type="text/css">
        <title>Platzi Video</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="assets/app.js" type="text/javascript"></script>
    </body>
</html>
`)
});

app.listen(config.port, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running on port localhost:${config.port}`);
});