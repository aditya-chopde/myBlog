const Email = require("../models/email");

async function addEmal(req, res) {
    try {
        const body = req.body;
        console.log(body)
        const addEmail = await Email.create({
            name: body.name,
            email: body.email,
        })

        res.json({ success: true, message: "Email Added Successfully !", data: addEmail })
    }catch(err){
        res.json({success: false, message: "Error Occurred", error: err})
    }
}

module.exports = {
    addEmal,
}