import userModel from '../models/userModel.js'

export const registerUserDao = async (newUser) => {
    try {
        const result = await userModel.create(newUser)
        return result
    } catch (error) {
        throw error
    }
}

export const loginUserDao = async (username) => {
    try {
        const userFound = await userModel.findOne({
            username: username
        })

        return userFound
    } catch (error) {
        throw error
    }
}

export const getUserByIdDao = async (userId) => {
    try {
        const userFound = await userModel.findById(userId)
        return userFound
    } catch (error) {
        throw error
    }
}

/* export const updateUserDao = async (userId, userToUpdate) => {
    try {
        const result = await userModel.findByIdAndUpdate(userId, userToUpdate)
        return result
    } catch (error) {
        throw error
    }
} */

export const changePasswordDao = async (userId, newPassword) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $set: { password: newPassword }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const chageEmailDao = async (userId, newEmail) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $set: { email: newEmail }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const addToFavoritesDao = async (userId, newFavorite) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $push: { favorites: newFavorite }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const searchFavorite = async (favorite) => {
    try {
        //const result = await userModel.find
    } catch (error) {
        throw error
    }
}

export const removeToFavoritesDao = async (userId, favoriteToRemove) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $pull: {
                    favorites: { _id: favoriteToRemove }
                }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const addDeliveryAddressDao = async (userId, newDeliveryAddress) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $push: { deliveryAddresses: newDeliveryAddress }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const removeToDeliveryAddressesDao = async (userId, deliveryAddressToRemove) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $pull: {
                    deliveryAddresses: { _id: deliveryAddressToRemove }
                }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const addPhoneDao = async (userId, newPhone) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $push: { phone: newPhone }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const removePhoneDao = async (userId, phoneToRemove) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $pull: {
                    phone: { _id: phoneToRemove }
                }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}

export const updateUserImageDao = async (userId, newImage) => {
    try {
        const result = await userModel.updateOne(
            { _id: userId },
            {
                $set: {
                    image: newImage
                }
            }
        )

        return result
    } catch (error) {
        throw error
    }
}