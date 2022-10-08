/**
 * @brief   Отправка писем на электронную почту
 * 
 * @note    - Отправка писем с подтверждением почты
 *          - Отправка писем с подтверждением смены пароля
 */


async function BaseSendMail(email, title, text, html) {
    let nodemailer = require('nodemailer');

    // Конфигурация почтового драйвера
    const transporter = nodemailer.createTransport({
        port: 465,     
        host: 'smtp.mail.ru',
        auth: {
            user: process.env.MAILER_USER, 
            pass: process.env.MAILER_PASSWORD
        },
        secure: true,
    });

    const mailData = {
        from: process.env.MAILER_USER,
        to: email,
        subject: title,
        text: text,
        html: html
    };

    try {
        transporter.sendMail(mailData);
        return true;
    } catch {
        return false;
    }
}



export async function SendMail_EmailConfirm(email, name, surname, confirmKey) {
    var title = `Подтверждение почты`
    var text = `${name} ${surname}!\nДля подтверждения почты перейдите по данной ссылке:\n\n${process.env.DOMAIN_NAME}/confirmEmail?key=${confirmKey}`
    var html = ""

    return await BaseSendMail(email, title, text, html)
} 


export async function SendMail_ChangePass(email, name, surname, changePassKey) {
    var title = `Смена пароля учётной записи`
    var text = `${name} ${surname}!\nДля смены пароля перейдите по этой ссылке:\n\ngoogle.com/changePass?key=${changePassKey}`
    var html = ""

    return await BaseSendMail(email, title, text, html)
} 




export async function sendReport({}){

}

export async function sendOrderInformaion({}){

}

export async function sendReportNewRetailer({}){
    
}


