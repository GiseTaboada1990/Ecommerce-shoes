const { Router } = require('express');
const { User, Order } = require('../db.js');
const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await User.findAll({
      include: [
        { model: Order},
      ]
    })
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(200).json(error)
  }
})

router.get("/:id", async (req, res) => {
  const {id} = req.params
  try{
    if(id){
      const user = await User.findByPk(id, { include:[{ all: true }] })
        res.status(200).json(user)
    }
  }catch(error){
    console.log(error)
    res.status(400).json("ID not found")
  }
})

router.put('/isAdmin/:id', async (req, res, next) => {
  const { id } = req.params
  const { isAdmin } = req.body

  try {
    const userToUpdate = await User.findOne({ where: { id } })
    userToUpdate.isAdmin = isAdmin
    await userToUpdate.save()
    
    res.status(200).json({ msg: 'Propiedad isAdmin actualizada', user: userToUpdate})
  } catch (error) {
    next(error)
  }
})

router.put('/isBanned/:id', async (req, res, next) => {
  const { id } = req.params
  const { isBanned } = req.body

  try {
    const userToUpdate = await User.findOne({ where: { id } })
    userToUpdate.isBanned = isBanned
    await userToUpdate.save()
    
    res.status(200).json({ msg: 'Propiedad isBanned actualizada', user: userToUpdate})
  } catch (error) {
    next(error)
  }
})
router.put('/', async (req, res) => {
  const { email } = req.query;
  const { name, surname, username, phone_number, date_of_Birth, address, image } = req.body;
  try {
      if (email) {
        const us1 = await User.findOne({
          where: { email: email }
        });

        if (us1 !== null) {
          us1.name = name;
          us1.surname = surname;
          us1.username = username ? username : '';
          us1.phone_number = phone_number ? phone_number : '';
          us1.date_of_Birth = date_of_Birth ? date_of_Birth : '';
          us1.address = address ? address : '';
          us1.image = image ? image : '',
          await us1.save();
          res.status(200).json({ msg: 'Your User was Successfully Changed', user: us1 });
        } else {
          res.send('You must enter your email correctly')
        }
      } else {
        res.send('You must enter your email');
      }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});


module.exports = router;