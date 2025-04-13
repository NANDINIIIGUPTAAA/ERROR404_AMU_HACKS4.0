const { PinataApi } = require('pinata-sdk'); // Assuming you're using Pinata SDK
const fs = require('fs');
const path = require('path');

const API_KEY = '	cd56386f86bbbc9e81c0'; // Replace with your Pinata API key
const SECRET_KEY = 'e185add5f54c6b2c23b019e9c8201885dec2d9f372704cb028eed57081b75dd2'; // Replace with your Pinata secret key

const pinata = new PinataApi(API_KEY, SECRET_KEY);

async function uploadImage() {
  const imagePath = 'C:\\Users\\premj\\OneDrive\\Desktop\\green.jpg'; // Path to your image on Desktop
  const imageFile = fs.createReadStream(imagePath);  // Read the image file

  try {
    const response = await pinata.pinFileToIPFS(imageFile);  // Upload the image to Pinata
    console.log('✅ Image uploaded successfully!');
    console.log('🌐 Image IPFS URL:', `https://gateway.pinata.cloud/ipfs/${response.IpfsHash}`);
  } catch (error) {
    console.error('❌ Error uploading image:', error.message);  // Error handling
  }
}

uploadImage();
