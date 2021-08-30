const nodemailer = require('nodemailer')
const axios = require('axios')
const { response } = require('express')

async function emailSending(req, res){
    req.header({"Access-Control-Allow-Origin": "*"})

 try{
  const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        service: 'gmail',
        auth:{
            user:'enricoilha@gmail.com',
            pass: 'killerloko1'
        }
    })

    const mailData = {
        from: 'enricoilha@gmail.com',
        to: 'enricoilha@gmail.com',
        subject: `Contato de ${req.body.name} pelo website`,
        text: req.body.name,
        html:`<div>Contato de ${req.body.name}</div>
        <p>Informações de ${req.body.name}: email -> ${req.body.email} telefone -> ${req.body.telefone} </p>`
       }

      return transporter.sendMail(mailData, function(err, info){
           if(err){
               console.log(err)
           }else{
               console.log(info)
           }
       })
      }catch(error){
        console.error(error)
      }


}

module.exports = emailSending