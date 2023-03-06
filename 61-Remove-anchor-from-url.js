// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  const position = url.indexOf("#");
  const urlSize = url.length;
  const numbersToRemove = urlSize - position;

  if (position > -1) {
    return url.slice(0, -numbersToRemove);
  } else {
    return url;
  }
}
