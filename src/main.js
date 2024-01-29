
var QRCode = require('qrcode');

let qrCodeText = 'https://www.youtube.com/@codeorg';
let filePath = 'pngfolder/myFileQR2.png';

QRCode.toFile(filePath, qrCodeText, function (err) {
  if (err) throw err;
  console.log(`QR code saved to ${filePath}`);
});
