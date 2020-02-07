const nodemailer = require('nodemailer');

const sendNodemailer = (toEmail, info) =>  new Promise(function(resolve, reject) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noshoesallowedhere@gmail.com',
            pass: 'noshoes#20'
        }
    });

    const mailOptions = {
        // sender address
        from: 'sendemailslecture@gmail.com',

        // user’s email from input field
        to: toEmail,

        // email message content
    };
    console.log('info.type' + info.type)
    if(info.type === 'application') {
        mailOptions.subject = 'Application for Cleantech Romania 2020 Projects #' + info.counter
        mailOptions.html=
        // '<div class=lala style={{background-color: #008000 }}>TEXT</div>'
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
        '<html>\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta content="width=device-width, initial-scale=1" name="viewport">\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '    <div >\n' +
            `<p>Candidate name: ${info.name}</p>
            <p>Candidate contact detail: ${info.email}, ${info.phone}, ${info.city}</p>
            <p>Brief idea description: ${info.description}</p>
            <p>Support needed: ${info.support}</p>`+
        '    </div>\n' +
        '</body>\n' +
        '\n' +
        '</html>'
    } else {
        mailOptions.subject = 'Application for Cleantech Romania 2020 Awards #' + info.counter
        mailOptions.html=
        // '<div class=lala style={{background-color: #008000 }}>TEXT</div>'
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
        '<html>\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta content="width=device-width, initial-scale=1" name="viewport">\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '    <div >\n' +
            `<p>Applicant name: ${info.name}</p>
            <p>Applicant email: ${info.email}</p>
            <p>Applicant phone: ${info.phone}</p>
            <p>Company name:${info.company.name}</p>
            <p>Company website: ${info.company.website}</p>
            <p>Company contact details: <br/>
                Contact person: ${info.company.contactPerson}</p>
                <p>Company email: ${info.company.email}</p> 
                <p>Company phone number: ${info.company.phone}</p>
            <p>Reason for Nomination: ${info.company.reason}</p>` +
        '    </div>\n' +
        '</body>\n' +
        '\n' +
        '</html>'
    }

    
    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve('Done');
        }

        transporter.close();
    });

});

module.exports = sendNodemailer;