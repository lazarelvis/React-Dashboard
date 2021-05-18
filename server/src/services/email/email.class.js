const { Service } = require("feathers-mongoose");
const { sendEmail } = require("../../mail/index");

exports.Email = class Email extends Service {
  async create(data) {
    sendEmail(data._id, data.email, data.product);
    return true;
  }
};
