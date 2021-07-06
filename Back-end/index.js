const express = require("express");
const open = require("open");
const ipUtil = require("ip");
const utils = require("./src/utils");

const app = express();
require("./src/routes")(app);

let { port, ip } = utils.getConfig();
port = port ? port : 3000;
ip = ip ? ip : ipUtil.address();

app
  .listen(port, ip, () => {
    open(`http://${ip}:${port}/steps`);
  })
  .on("error", err => {
    if (err.code === "EADDRINUSE")
      console.error(
        "\x1b[36m%s\x1b[0m",
        "Address is already in use, please try an other port."
      );
    else console.error("\x1b[36m%s\x1b[0m", "An error occurred.", err);
  });
