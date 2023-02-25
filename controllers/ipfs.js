const cwr = require(`../utils/createWebResp`);
const ipfs = require("../utils/ipfs");

// 파일 생성
const postFile = async (req, res) => {
  try {
    const body = req.body;
    console.log("body: ", body);
    const ipfsFile = await ipfs.createFile(body);

    return cwr.createWebResp(res, 200, ipfsFile);
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

// 파일 조회
const getFile = async (req, res) => {
  try {
    return cwr.createWebResp(res, 200, accessToken);
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

// 파일 수정
const patchFile = async (req, res) => {
  try {
    return cwr.createWebResp(res, 200, accessToken);
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

// 파일 삭제
const deleteFile = async (req, res) => {
  try {
    return cwr.createWebResp(res, 200, accessToken);
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

module.exports = {
  postFile,
  getFile,
  patchFile,
  deleteFile,
};
