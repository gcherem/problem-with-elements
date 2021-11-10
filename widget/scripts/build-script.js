const fs = require("fs-extra");
const concat = require("concat");
(async function build() {

  const files = [
    "./dist/vendor.js",
    "./dist/main.js",
    "./dist/runtime.js",
    "./dist/polyfills.js",
  ];

  console.log('Building package...')

  await fs.ensureDir("elements");
  await concat(files.filter(file => fs.existsSync(file)), "elements/widget.js");

  await fs.ensureDir(`elements/assets/icons`);

  fs.copyFile(
    `./dist/assets/icons/close.svg`,
    `./elements/assets/icons/close.svg`,
    () => {}
  );


})();


