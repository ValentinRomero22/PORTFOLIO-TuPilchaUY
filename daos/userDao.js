import userModel from '../models/userModel.js'

export const registerUser = async (newUser) => {
    try {
        const result = await userModel.create(newUser)
        return result
    } catch (error) {
        throw error
    }
}

export const loginUser = async (username) => {
    try {
        const userFound = await userModel.findOne({
            username: username 
        })        

        return userFound
    } catch (error) {
        throw error
    }
}