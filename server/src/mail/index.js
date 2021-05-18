const nodemailer = require("nodemailer");

const getEmailData = (id, to, product) => {
  let data = {
    from: "React barcode <lazarelvistestmail@gmail.com>",
    to,
    subject: `Welcome React barcode`,
    text: "Testing email 2",
    html: `Welcome again ${to} <br /> https://react-barcode-sf.herokuapp.com/${id}?product=${product.toLowerCase()}`,
  };
  return data;
};

const sendEmail = (id, to, product) => {
  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "lazarelvistestmail@gmail.com",
      pass: "galati123",
    },
  });

  const mail = getEmailData(id, to, product);

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("email send");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
