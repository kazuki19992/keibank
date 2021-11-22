// /** @type {import('next').NextConfig} */
// module.exports = {
//   // reactStrictMode: true,
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//       config.resolve.fallback.child_process = false;
//       config.resolve.fallback.net = false;
//       config.resolve.fallback.dns = false;
//       config.resolve.fallback.tls = false;
//       config.resolve.fallback.module = false;
//     }

//     return config;
//   }
// }
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public", // swの出力ディレクトリ
    // runtimeCaching: []
  },
});