const getUserId = async(userId) => {
    // ASSUMPTION: this function gets a user by id
    const user = {
        id : 1,
        email: 'jondoe@email.com',
        phone: 1234,
        name : "John Doe"
    }
    return user;
}

module.exports = {
    getUserId
}