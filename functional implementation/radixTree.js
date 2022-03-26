const root = '';

const rTree = {
  edgeLabel: root,
  children: {},
  isLeaf: false,
};

const root1 = {
  edgeLabel: '',
  children: {
    h: {
      edgeLabel: 'he',
      children: {
        r: {
          edgeLabel: 'ro',
          children: { s: { edgeLabel: 'shima', children: {}, isLeaf: true }, n: { edgeLabel: 'nagasaki', children: {}, isLeaf: true } },
          isLeaf: true,
        },
        l: { edgeLabel: 'lo', children: {}, isLeaf: true },
      },
      isLeaf: false,
    },
    z: { edgeLabel: 'zero', children: {}, isLeaf: true },
    x: { edgeLabel: 'xero', children: {}, isLeaf: true },
  },
  isLeaf: false,
};

const h = {
  edgeLabel: 'he',
  children: {
    r: {
      edgeLabel: 'ro',
      children: { s: { edgeLabel: 'shima', children: {}, isLeaf: true }, n: { edgeLabel: 'nagasaki', children: {}, isLeaf: true } },
      isLeaf: true,
    },
    l: { edgeLabel: 'lo', children: {}, isLeaf: true },
  },
  isLeaf: false,
};

function nodeAdder(tree, prefix) {
  console.log(prefix);
  const newNode = treeStructureWithPrefix(prefix, {}, false, prefix);
  console.log(tree);
  console.log(newNode);
  for (const child in tree.children) {
    console.log(child);
    console.log(newNode[prefix[0]]);
    newNode[prefix].children[child[0]] = treeStructure(tree.children[child].edgeLabel, tree.children[child].children, true);
    console.log(newNode);
  }
  console.log(newNode);
  return newNode;
}

function treeStructure(edgeLabel, children, isLeaf) {
  return { edgeLabel, children, isLeaf };
}

function treeStructureWithPrefix(edgeLabel, children, isLeaf, prefix) {
  const l = {};
  l[prefix[0]] = { edgeLabel, children, isLeaf };
  console.log(l[prefix]);
  return l;
}

function getCommonPrefix(a, b) {
  let commonPrefix = '';

  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) return commonPrefix;

    commonPrefix += a[i];
  }
  return commonPrefix;
}

function search(tree, word) {
  const firstCharacter = word.charAt(0);

  let childFlag;

  for (const child in tree.children) {
    child === firstCharacter ? (childFlag = true) : false;
  }
  console.log(firstCharacter);

  if (childFlag === true) {
  } else return false;

  const commonPrefix = getCommonPrefix(tree.children[firstCharacter].edgeLabel, word);

  if (childFlag === true && tree.children[firstCharacter].edgeLabel === word && tree.children[firstCharacter].isLeaf === true) {
    return true;
  } else if (childFlag === true && word.length > tree.children[firstCharacter].edgeLabel.length && commonPrefix === tree.children[firstCharacter].edgeLabel) {
    console.log(firstCharacter);
    return search(tree.children[firstCharacter], word.substring(commonPrefix.length));
  } else {
    return false;
  }
}

function insert(tree, word, prefix) {
  const firstCharacter = word.charAt(0);

  let childFlag;

  for (const child in tree.children) {
    console.log(child);
    child === firstCharacter ? (childFlag = true) : false;
  }

  if (childFlag === true) {
    const commonPrefix = getCommonPrefix(tree.children[firstCharacter].edgeLabel, word);

    if (tree.children[firstCharacter].edgeLabel === word && tree.children[firstCharacter].isLeaf === true) {
      return true;
    } else if (word.length > tree.children[firstCharacter].edgeLabel.length && commonPrefix === tree.children[firstCharacter].edgeLabel) {
      if (prefix != undefined) console.log('fd');
      return insert(tree.children[firstCharacter], word.substring(commonPrefix.length));
    } else if (commonPrefix.length < tree.children[firstCharacter].edgeLabel.length) {
      const trimmedEdge = tree.children[firstCharacter].edgeLabel.slice(commonPrefix.length);
      tree.children[firstCharacter].edgeLabel = commonPrefix;
      console.log(tree.children[firstCharacter].children);
      const newEdge = nodeAdder(tree.children[firstCharacter], trimmedEdge);
      console.log(word);
      console.log(newEdge);
      delete tree.children[firstCharacter].children;
      console.log(tree.children[firstCharacter]);
      tree.children[firstCharacter].children = newEdge;
      console.log(tree.children);
      return insert(tree.children[firstCharacter], word.substring(commonPrefix.length));
    } else {
      return false;
    }
  } else {
    if (prefix !== undefined) {
      for (const child in tree.children) {
        // tree.children[child] = prefix[0];
        tree.children[child].edgeLabel = prefix + tree.children[child].edgeLabel;
        console.log(tree.children[child].edgeLabel);
      }
    }
    tree.children[firstCharacter] = treeStructure(word, {}, true);
  }
}

function remove(tree, word) {
  const firstCharacter = word.charAt(0);

  let childFlag;

  for (const child in tree.children) {
    child === firstCharacter ? (childFlag = true) : false;
  }

  const commonPrefix = getCommonPrefix(tree.children[firstCharacter].edgeLabel, word);

  if (childFlag === true && tree.children[firstCharacter].edgeLabel === word && tree.children[firstCharacter].isLeaf === true) {
    delete tree.children[firstCharacter];
    return true;
  } else if (childFlag === true && word.length > tree.children[firstCharacter].edgeLabel.length && commonPrefix === tree.children[firstCharacter].edgeLabel) {
    return remove(tree.children[firstCharacter], word.substring(commonPrefix.length));
  } else {
    return false;
  }
}

insert(root1, 'boy');
insert(root1, 'boyses');
insert(root1, 'toy');
insert(root1, 'hrees');
insert(root1, 'honor');
insert(root1, 'house');
insert(root1, 'hony');
// remove(root1, 'boy');
console.log(root1.children.b);
console.log(root1.children['h']);
console.log(search(root1, 'hony'));
console.log(remove(root1, 'hony'));
insert(root1, 'zero');
insert(root1, 'hello');
insert(root1, 'zello');
insert(root1, 'zelu');
insert(root1, 'radix');
insert(root1, 'tree');

console.log(root1.children);
