var qr = require("qr-image");

var qr_svg = qr.image("https://pankajnarwade.netlify.app/", { type: "svg" });
qr_svg.pipe(require("fs").createWriteStream("Link.svg"));

var svg_string = qr.imageSync("I love QR!", { type: "svg" });
