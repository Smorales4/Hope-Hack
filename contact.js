// Attempt #1 on trying to send the contact inputs to the DB

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

function button() {
  const options = {
    method: "POST",
    url: "https://book-finder1.p.rapidapi.com/api/search",
    params: {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("Success");
    })
    .catch(function (error) {
      console.error(error);
    });
}
