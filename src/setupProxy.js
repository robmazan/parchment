/* istanbul ignore file */
const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    ["/api", "/login", "/logout"],
    proxy({
      target: "http://localhost:3333",
      changeOrigin: true,
      xfwd: true
    })
  );
};
