const Email = require("../models/email");

async function addEmal(req, res) {
    try {
        const body = req.body;
        const exists = await Email.findOne({ email: body.email })
        if (exists) {
            res.json({ success: false, message: "Email Already Exists", data: exists })
        } else {
            const addEmail = await Email.create({
                name: body.name,
                email: body.email,
            })

            res.json({ success: true, message: "Email Added Successfully !", data: addEmail })
        }
    } catch (err) {
        res.json({ success: false, message: "Error Occurred", error: err })
    }
}

async function getEmails(req, res) {
    try {
        const allEmails = await Email.find();
        res.send(allEmails);
    } catch (e) {
        res.send({ success: false, emails: allEmails })
    }
}

module.exports = {
    addEmal,
    getEmails,
}