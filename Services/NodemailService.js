const nodemailer = require('nodemailer');
const sendEmail = async (recipient, subject, content) => {

  
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
         user: 'stam123450123@gmail.com',
         pass: 'slooyoabvtundqmf',
        },
       });
    const message = {
      from: recipient,
      to:'stam123450123@gmail.com' ,
      subject: subject,
      text: content
    };
  
    try {
      const info = await transporter.sendMail(message);
   
      console.log(`Temps pris pour envoyer le message : ${elapsedTime} ms`);
      console.log(info);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    }
  };
  
  const sendmail = async (req, res) => {
    const { recipient, subject, content } = req.body;
    console.log(recipient)
  
    try {
      await sendEmail(recipient, subject, content);
      res.status(200).json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  };
  ////////////////////////////////////////////
  //password
  /////////////////////////
  const sendEmailpass = async (recipient, subject, content) => {

  
    const transporters = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
         user: 'stam123450123@gmail.com',
         pass: 'slooyoabvtundqmf',
        },
       });
    const message = {
      from: 'stam123450123@gmail.com',
      to:recipient ,
      subject: subject,
      text: content
    };
  
    try {
      const info = await transporters.sendMail(message);
   
      console.log(`Temps pris pour envoyer le message : ${elapsedTime} ms`);
      console.log(info);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    }
  };
  
  const sendmailpass = async (req, res) => {
    const { recipient, subject, content } = req.body;
    console.log(recipient)
  
    try {
      await sendEmailpass(recipient, subject, content);
      res.status(200).json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  };
  module.exports={
    sendmail,
    sendmailpass
  }