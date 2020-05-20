const sgMail=require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'ayushibhardwaj288@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. let me know how you get along with the app`
    })
}
const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'ayushibhardwaj288@gmail.com',
        subject:'Good by!!',
        text:`Good by ${name}. let me know what can we do to keep you onboard`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}