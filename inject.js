(function(cssMatchArray) {
  const matchArray = cssMatchArray.cssMatchArray;

  let cssSelectorString = matchArray.join(',');

  let itemsToRemove = document.querySelectorAll(cssSelectorString);

  [...itemsToRemove].forEach((node) => {
    node.parentNode.removeChild(node);
  });

})(cssMatchArray);
