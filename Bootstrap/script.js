// get elements by their ID
const searchInput = document.getElementById('input');
const searchButton = document.getElementById('search');

// add event listener to the button
searchButton.addEventListener('click', function() {
  // get the search input value
  const searchTerm = input.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`);
});

// add event listener to the input (if you want to trigger the search on Enter keypress)
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    // simulate a button click to trigger the search
    search.click();
  }
});