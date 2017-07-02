import React from 'react';

const Folder = function(value) {
  this.value = value.name;
  this.children = value.children;
};

Folder.prototype.DFTraverse = function(Component) {
  var results = [];
  // var finder = (node, depth, Component) => {
  //   console.log('what is node?', node);
  //   // [{}, {}]
  //   if (!node.children) {
  //     node.forEach((child) => {
  //       result.push(<ul><Component
  //       key={child.name}
  //       name={child.name}
  //       type={child.type}
  //       private={child.private} /></ul>
  //       );
  //     });
  //   }
  //   node.forEach((child) => {
  //     console.log('children exist', child.children);
  //     console.log('So what is name?', child.name);
  //     result.push(<Component
  //       key={child.name}
  //       name={child.name}
  //       type={child.type}
  //       private={child.private} />
  //     )
  //     if (child.children) {
  //       finder(child.children, depth + 1, Component);
  //     }
  //   });
  // };
  // finder(this.children, 0, Component);
  // return result;

//  finder(this.children, depth + 1, Component)
  var finder = (node, depth) => {
    console.log('what is node?', node);
    if (node) {
      // render current info (doesn't matter with children or not)
      // if children
      if (node.children) {
        node.children.forEach((child, index) => {
          results.push(<Component
          key={index}
          name={child.name}
          type={child.type}
          private={child.private} />);
          // recurse through the children
          for (let i = 0; i < child.children.length; i++) {
            let childNode = child.children[i];
            finder(childNode, depth + 1);
          }
        });
      } else {
        results.push(<Component
          name={node.name}
          type={node.type}
          private={node.private} />)
      }
    }
  };
  finder(this, 0);
  return results;
};

module.exports = Folder;
