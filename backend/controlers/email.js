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
        res.json(allEmails);
    } catch (e) {
        res.json({ success: false, emails: allEmails })
    }
}

async function deleteEmails(req, res) {
    // try {
        const id = req.params.id;
        const getEmail = await Email.findByIdAndDelete(id);
        res.json({ success: true, message: "Email Deleted Successfully", email: getEmail })
    // } catch (err) {
    //     res.json({ success: false, message: "Error Occurred", error: err })
    // }
}

module.exports = {
    addEmal,
    getEmails,
    deleteEmails,
}