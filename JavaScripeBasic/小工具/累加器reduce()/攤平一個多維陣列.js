var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
  // flattened is [0, 1, 2, 3, 4, 5]

  ///////////攤平一個多維陣列.js
  var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( acc, cur ) => acc.concat(cur),
    []
  );
  