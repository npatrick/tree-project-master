const traverseFolders = (value) => {
  this.value = value;
  this.children = [];
};

traverseFolders.prototype.DFSelect = (filter) => {
  var results = [];

  var finder = (node, depth) => {
    if (filter(node.value, depth)) {
      results.push(node.value);
    }
    for (let i = 0; i < node.children.length; i++) {
      let child = node.children[i];
      finder(child, depth + 1);
    }
  };
  finder(this, 0);

  return results;
};

module.exports = traverseFolders;
