const models = require('../models')

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false
  }
  return models.sequelize.sync(options) // db 동기화시 기존 데이터 안날림
}