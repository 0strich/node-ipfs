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
    const cid = req.params?.cid;
    const readFile = await ipfs.readFile(cid);
    return cwr.createWebResp(res, 200, JSON.parse(readFile));
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

// 파일 수정
const patchFile = async (req, res) => {
  try {
    const cid = req.params?.cid;
    const body = req.body;

    const readFile = await ipfs.updateFile(cid, body);

    return cwr.createWebResp(res, 200, readFile);
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

// 파일 삭제
const deleteFile = async (req, res) => {
  try {
    const cid = req.params?.cid;

    await ipfs.deleteFile(cid);

    return cwr.createWebResp(res, 200, { delete: true });
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
