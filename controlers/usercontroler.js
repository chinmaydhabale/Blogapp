const usermodal = require('../Models/usermodel')
const bcrypt = require('bcrypt')



// create users
exports.registerControllers = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({
                success: false,
                massage: 'please fill all the feiled'
            })
        }

        const existuser = await usermodal.findOne({ email })
        const usernameexit = await usermodal.findOne({ username })
        if (existuser) {
            return res.status(401).send({
                success: false,
                massage: 'email already exits'
            })
        }

        if (usernameexit) {
            return res.status(401).send({
                success: false,
                massage: 'username already exits'
            })
        }

        const hashedpassword = await bcrypt.hash(password, 10);


        //save new user
        const user = new usermodal({ username, email, password: hashedpassword })
        await user.save();
        return res.status(201).send({
            success: true,
            massage: 'new user created',
            user

        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            massage: 'error in resister callback',
            success: false,
            error
        })
    }
}




// all users

exports.getAllUsers = async (req, res) => {
    try {
        const users = await usermodal.find({})
        return res.status(200).send({
            userCount: users.length,
            success: true,
            massage: 'all users data',
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            massage: 'error in to get users',
            success: false,
            error
        })
    }
}





//login user

exports.loginControllers = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).send({
                message: 'please provide email and password',
                success: false
            })
        }

        const user = await usermodal.findOne({ email });

        if (!user) {
            return res.status(200).send({
                success: false,
                massage: 'email is not register'
            })
        }

        const ismatch = await bcrypt.compare(password, user.password)

        if (!ismatch) {
            return res.status(401).send({
                success: false,
                message: 'invalid username and password'
            })
        }

        return res.status(200).send({
            success: true,
            massage: 'Login successfully',
            user
        })


    } catch (error) {
        console.log(error)
        return res.status(500).send({
            massage: 'error in login callback',
            success: false,
            error
        })
    }
}