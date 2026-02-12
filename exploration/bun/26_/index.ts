const whiteToRGBA = Bun.color("white","rgba"); // css to rgba
console.log(whiteToRGBA); 
// rgba(255, 255, 255, 1)

const whiteToHEX = Bun.color("white","hex"); // css to hex
console.log(whiteToHEX); 
// #ffffff

const rgbaToCSS = Bun.color("rgba(255, 0, 0, 1)","css"); // rgba to css
console.log(rgbaToCSS); 
// red

const RGBToHEX = Bun.color("rgb(0, 255, 0)","hex"); // rgb to hex
console.log(RGBToHEX); 
// #00ff00




