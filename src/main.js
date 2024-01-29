var QRCode = require("qrcode");

let ytChannels = [
  "https://www.youtube.com/@codeorg",
  "https://www.youtube.com/@CoderbyteDevelopers",
  "https://www.youtube.com/@Codesmith",
  "https://www.youtube.com/@craigndave",
  "https://www.youtube.com/@decomplexify",
  "https://www.youtube.com/@Fireship",
  "https://www.youtube.com/@freecodecamp",
  "https://www.youtube.com/@funfunfunction",
  "https://www.youtube.com/@KevinPowell",
  "https://www.youtube.com/@NetNinja",
  "https://www.youtube.com/@TraversyMedia",
  "https://www.youtube.com/@WesBos",
];

function generateOneQrCode(url) {

  let channelName = extractWordsAfterAt(url);
  let filePath = `pngfolder/${channelName}.png`;

  QRCode.toFile(filePath, url);
}

function generateAllQrCodes() {
  for (let channel of ytChannels) {

    generateOneQrCode(channel);
  }
}

function extractWordsAfterAt(url) {
  // Split the URL by '@' and get the second part
  return url.split("@")[1];
}

// Apply the function to each URL in the array

// console.log(extractedWords);

generateAllQrCodes();
