let creditionals = [{
    _id: "1233",
    name: "manikandan",
    role: "doctor",
    email: "manikandan@gmail.com",
    password: "Mani@4515"
}, {
    _id: "1234",
    name: "manikandan sasikumar",
    role: "doctor",
    email: "doctor@gmail.com",
    password: "Mani@4515"
}, {
    _id: "1235",
    name: "patient",
    role: "patient",
    email: "patient@gmail.com",
    password: "Mani@4515"
}, {
    _id: "1236",
    name: "manikandan patient",
    role: "patient",
    email: "mani@gmail.com",
    password: "Mani@4515"
}]

function getUser(email) {
    const user = creditionals.find(user => {
        return user.email === email
    })
    return user
}

function setUser(user) {
    creditionals.push(user)
}

function getDoctors() {
    return creditionals.filter(user => {
        return user.role === "doctor"
    })
}

function getName(id) {
    const data = creditionals.find(user => {
        return user._id === id
    })
    console.log(creditionals, id, data)
    return data.name
}

module.exports = {
    getUser,
    setUser,
    getDoctors,
    getName
}