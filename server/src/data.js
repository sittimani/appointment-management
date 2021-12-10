const creditionals = require("./creditionals")

let data = [{
    patient_id: "1235",
    doctor: "Manikandan",
    patient: "somename",
    time: "9:00 AM",
    doctor_id: "1233",
    status: "Approved"
}, {
    patient_id: "1236",
    doctor: "Manikandan Sasikumar",
    time: "9:30 AM",
    patient: "somename2",
    status: "Approved",
    doctor_id: "1233"
}, {
    patient_id: "1236",
    doctor: "Manikandan",
    patient: "somename3",
    time: "9:30 AM",
    doctor_id: "mani@gmail.com",
    status: "pending"
}, {
    patient_id: "1235",
    doctor: "Manikandan",
    patient: "somename4",
    time: "9:30 AM",
    doctor_id: "1234",
    status: "pending"
}]

function getData() {
    return data
}

function setData(body) {
    body.patient = creditionals.getName(body.patient_id)
    data.push(body)
}

function updateData(index, body) {
    data[index] = body
}

module.exports = { getData, setData, updateData }