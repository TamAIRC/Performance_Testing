import http from "k6/http";
import { sleep } from "k6";

// Specify the path to your image folder
const imageFolder = "/inside/docker/path/image";

// Global array to store file contents of all image files
const fileContents = ["baocao_1.jpg", "baocao_2.jpg", "baocao_3.jpg"];
const fileContents_open = [];
// Function to concatenate image file names with the image folder path
function getImageFilePaths(folderPath, fileNames) {
  return fileNames.map((fileName) => `${folderPath}/${fileName}`);
}

// Get full image file paths
const fullImageFilePaths = getImageFilePaths(imageFolder, fileContents);

export let options = {
  vus: 100,
  duration: "100s",
};

// Function to open and store file content
function openAndStoreFileContent(imageFilePath) {
  const fileContent = open(imageFilePath, "b");
  if (fileContent) {
    fileContents_open.push(fileContent);
  } else {
    console.error(`Failed to read file: ${imageFilePath}`);
  }
}

// Open and store the content of each image file
for (const file of fullImageFilePaths) {
  openAndStoreFileContent(file);
}

export default function () {
  // Get a random index to select a random file content
  const randomIndex = Math.floor(Math.random() * fileContents_open.length);
  const fileContent = fileContents_open[randomIndex];
  if (!fileContent) {
    console.error(`Failed to get file content at index: ${randomIndex}`);
    return;
  }

  // Endpoint URL for OCR
  const url = "http://192.168.88.229:5000/api_ocr_kdcl";

  // Send the file content as form data
  const formData = {
    image: http.file(fileContent, "image"), // Assuming the image format is JPEG
  };

  // Send the POST request with multipart/form-data encoding
  const res = http.post(url, formData);

  // Check if the request is successful
  if (res.status === 200) {
    console.log("File uploaded successfully");
  } else {
    console.error(`Failed to upload file: ${res.body}`);
  }

  // Sleep for 1 second
  sleep(1);
}
