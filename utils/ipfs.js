const ipfsConfig = require("../config/ipfs");
// import ipfsClient from "ipfs-http-client";
const ipfsClient = require("ipfs-http-client");
const client = ipfsClient.create(ipfsConfig);

// ipfs file 생성
const createFile = async (data) => {
  try {
    const fileAdded = await client.add(JSON.stringify(fileAdded));
    console.log("fileAdded: ", fileAdded);
    return fileAdded;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ipfs file 조회
const readFile = async (cid) => {
  try {
  } catch (error) {
    console.log("error: ", error);
  }
};

// ipfs file 수정
const updateFile = async (cid, data) => {
  try {
  } catch (error) {
    console.log("error: ", error);
  }
};

// ipfs file 삭제
const deleteFile = async (cid) => {
  try {
  } catch (error) {
    console.log("error: ", error);
  }
};

module.exports = {
  createFile,
  readFile,
  updateFile,
  deleteFile,
};
