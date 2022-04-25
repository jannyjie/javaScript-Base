

const search_url = new URL('https://www.google.com/search?q=HelloWorld&t=20200811');

const params = search_url.searchParams;

for (let pair of params.entries()) {
  console.log(pair);
} // ["q", "HelloWorld"], ["t", "20200811"]
