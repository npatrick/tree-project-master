const Folder = function(value) {
  this.value = value.name;
  this.children = value.children;
};

Folder.prototype.DFTraverse = function() {
  var results = [];

  var finder = (node, depth) => {
    if (node.name, depth) {
      results.push({
        "name": node.name,
        "type":node.type,
        "private": node.private,
        "children": node.children
      });
    }
    if (!node.children) {
      return;
    }
    for (let i = 0; i < node.children.length; i++) {
      console.log('checking depth num: ' + depth, node.children);
      let child = node.children[i];
      finder(child, depth + 1);
    }
  };
  finder(this, 0);

  return results;
};

module.exports = Folder;
