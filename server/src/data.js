let data = [{
        patient_id: "manikandansitti@gmail.com",
        doctor: "Manikandan",
        patient: "somename",
        time: "9:00 AM",
        doctor_id: "mani@gmail.com",
        status: "Approved"
    },
    {
        patient_id: "manikandan@gmail.com",
        doctor: "Manikandan Sasikumar",
        time: "9:30 AM",
        patient: "somename2",
        status: "Approved",
        doctor_id: "manikandan.sasikumar@gmail.com"
    },
    {
        patient_id: "manikandansitti3@gmail.com",
        doctor: "Manikandan",
        patient: "somename3",
        time: "9:30 AM",
        doctor_id: "mani@gmail.com",
        status: "pending"
    },
    {
        patient_id: "manikandansitti4@gmail.com",
        doctor: "Manikandan",
        patient: "somename4",
        time: "9:30 AM",
        doctor_id: "mani@gmail.com",
        status: "pending"
    }
]

function getData() {
    return data
}

function setData(body) {
    data.push(body)
}

function updateData(index, body) {
    data[index] = body
}

module.exports = { getData, setData, updateData }