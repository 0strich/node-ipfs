const ipfsConfig = require("../config/ipfs");
const ipfsClient = require("ipfs-http-client");
const client = ipfsClient.create(ipfsConfig);

// ipfs file 생성
const createFile = async (data) => {
  try {
    const fileAdded = await client.add(JSON.stringify(data));
    console.log("fileAdded: ", fileAdded);
    return fileAdded;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ipfs file 조회
const readFile = async (cid) => {
  try {
    const file = await client.cat(cid);
    return file;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ipfs file 수정
const updateFile = async (cid, data) => {
  try {
    const fileAdded = await ipfs.add(JSON.stringify(data), { cid });
    return fileAdded;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ipfs file 삭제
const deleteFile = async (cid) => {
  try {
    await client.pin.rm(cid);
    console.log(`deleted ${cid}`);
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
