const txtSearch = document.getElementById("txtSearch");
const title = document.getElementById("title");
const summary = document.getElementById("summary");
const pic = document.getElementById("pic");
const authors = document.getElementById("authors");

// Function used to pull data from 3rd Party API that will search for the data of a certain book
function getResults() {
  const searchTerm = txtSearch.value;

  const options = {
    method: "GET",
    url: "https://book-finder1.p.rapidapi.com/api/search",
    params: {
      series: searchTerm,
      book_type: "Fiction",
      lexile_min: "600",
      lexile_max: "800",
      results_per_page: "25",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "f259a67805mshcf453bc46cd2fb0p14b4f0jsnfb94773d31b6",
      "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      response.data.results.forEach((book) => processData(book));
      showBookDetails(response.data.results[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// Function that passes the data of the book
function processData(book) {
  console.log(book.title);
  console.log(book.authors);
  console.log(book.summary);
}

// Function that will display the data of the book from 3rd Party API onto our front-end when searched
function showBookDetails(book) {
  title.innerText = book.title;
  authors.innerHTML = book.authors;
  summary.innerHTML = book.summary;
  pic.src = book.published_works[0].cover_art_url;
}
