import React from 'react';

const Folder = function(value) {
  this.value = value.name;
  this.children = value.children;
};

Folder.prototype.DFTraverse = function(Component) {
  var result = [];
  var finder = (node, depth, Component) => {
    if (!node.children) {
      return result.push(<Component
        key={node.name}
        name={node.name}
        type={node.type}
        private={node.private} />
      );
    }
    if (node.children.length > 0) {
      result.push(<Component
        key={node.name}
        name={node.name}
        type={node.type}
        private={node.private}
        children={node.children} />
      )
    }
    node.children.forEach((child) => {
      finder(child, depth + 1, Component);
    });
  };
  finder(this, 0, Component);
  return result;
};

module.exports = Folder;
