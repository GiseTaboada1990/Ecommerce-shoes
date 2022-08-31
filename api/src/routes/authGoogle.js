const { Router } = require("express");
const router = Router();
const { User, Order } = require('../db.js');

router.post('/', async (req, res) => {
    const { name, surname, image, username, email, phone_number, date_of_Birth, address } = req.body

    try {
        const [user, created] = await User.findOrCreate({
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

        res.status(200).json(user)
    } catch (error) {
        console.log('AUTH_GOOGLE -->',error)
        res.status(500).json(error)
    }
})

module.exports = router