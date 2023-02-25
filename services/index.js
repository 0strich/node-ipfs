// utils
const query = require("../utils/query");

// 생성
const create = async (model, data) => {
  const docs = await model.create(data);
  return docs;
};

// 조회(_id)
const readById = async (model, id) => {
  const docs = await model.findById(id).lean();
  return docs;
};

// 조회(이메일)
const readByEmail = async (model, email) => {
  const conditions = { email };
  const docs = await model.findOne(conditions).lean();
  return docs;
};

// 탐색(_id), 수정(data)
const updateById = async (model, id, data) => {
  const { updateOptions } = query;
  const docs = await model.findByIdAndUpdate(id, data, updateOptions).lean();
  return docs;
};

// 탐색(email), 수정(data)
const updateByEmail = async (model, email, data) => {
  const { updateOptions } = query;
  const conditions = { email };
  const docs = await model
    .findByIdAndUpdate(conditions, data, updateOptions)
    .lean();
  return docs;
};

module.exports = {
  create,
  readById,
  readByEmail,
  updateById,
  updateByEmail,
};
