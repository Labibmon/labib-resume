const withPWA = require("next-pwa");

module.exports = withPWA({
  target: "server",
  pwa: {
    dest: "public",
  },
  headers: {
    "X-Frame-Options": "sameorigin",
  },
  future: {
    webpack5: true
  }
});
