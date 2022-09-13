const { Router } = require("express");
const router = Router();
const { User } = require('../db.js');
const { mail } = require('../controllers/nodemailer');

router.post('/', async (req, res) => {
    const { name, surname, image, username, email, phone_number, date_of_Birth, address } = req.body

    try {
          const [newUser, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                name,
                surname,
                username,
                phone_number,
                date_of_Birth,
                address,
                image,
                isAdmin: email === "isAdmin@gmail.com" ? true : false
            }
        })
        if(created) await mail(email)
        res.status(200).json(newUser)
    } catch (error) {
        console.log('AUTH_GOOGLE -->',error)
        res.status(500).json(error)
    }
})

module.exports = router