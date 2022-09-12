const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        type: 'Oauth2',
      user: 'yourshoes.henry@gmail.com',
      clientId: '756519031521-rvjp5l551tildld8ipncpuigdiujh0l0.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: '1//04p01_UF4G2RdCgYIARAAGAQSNwF-L9IrPYrJwCU9wwsg50FcSM6KzMbexvDQQLqIa-HMaz-rgzJcBtyxA__DMyJZjDNfVn_ayec',
      accesToken: 'ya29.A0AVA9y1u36njmOiEDZ8SBA-RJQ5_PQ1cLa7cLwV4euOvPxqW6tRYCMKt_f9jt-GTVpoFFdKlzPyPoWNLmNb_N0t5IRsldAq4NX4vylKeKMDP8sxHVQDbGvFmp5xfXbvYGk08jiBbrzLrCeToMFlZmQWIeaDVCYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4Ymh3bnJERHFKUEJEa0lfUnlucHFfdw0163'
       
    },
   
  })
  
  transporter.verify().then(() => {
    console.log('nodemailer conectado')
  }).catch((err) => {
    console.log(err)
  })
  
  async function mail(email){
   
    await transporter.sendMail({
      from: '"YOURSHOES 👟" <yourshoes.henry@gmail.com>', // sender address
      to: email, // list of receivers
      subject : 'GRACIAS POR UNIRTE AL TEAM YOURSHOES', // Subject line
      html: '<p>Ya sos parte del mundo de Yourshoes, gracias por suscribirte!</p>'// html body
    })
    
  }

  module.exports = {
    mail
  }