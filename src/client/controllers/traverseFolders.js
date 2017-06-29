import React from 'react';

const Folder = function(value) {
  this.value = value.name;
  this.children = value.children;
};

Folder.prototype.DFTraverse = function(component) {

  var finder = (node, depth, component) => {
    if (node.name, depth) {
      return (<component 
        key={node.name}
        name={node.name}
        type={node.type}
        private={node.private}
        children={node.children} />
      )
    }
    if (!node.children) {
      return;
    }
    for (let i = 0; i < node.children.length; i++) {
      // console.log('checking depth num: ' + depth, node.children);
      let child = node.children[i];
      finder(child, depth + 1, component);
    }
  };
  return finder(this, 0, component);
};

module.exports = Folder;
