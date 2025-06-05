/**
 *
 * #recursion
 */

type Tree = {
  name: string;
  gender: 'male' | 'female';
  children: Tree[];
};

function find7thSon(tree: Tree, is7thChild: boolean = false, sons: Set<string>): void {
  if (tree.children.length === 0) {
    return;
  }

  let isBrokenChain = false;
  tree.children.forEach((child, index) => {
    if (index < 6 && child.gender === 'female') {
      isBrokenChain = true;
    }
  });

  if (is7thChild && !isBrokenChain && tree.children.length >= 7 && tree.children[6].gender === 'male') {
    sons.add(tree.children[6].name);
  }

  tree.children.forEach((child, index) => find7thSon(child, index === 6 && !isBrokenChain, sons));
}

function findSeventhSonsOfSeventhSons(json: string): Set<string> {
  const sons = new Set<string>();
  const familyTree = JSON.parse(json) as Tree;

  find7thSon(familyTree, false, sons);

  return sons;
}

//
//

describe('Seventh JSON of a seventh JSON', () => {
  test('Contains seventh son of seventh son', () => {
    const json = {
      name: 'A',
      gender: 'male',
      children: [
        { name: 'B', gender: 'male', children: [] },
        { name: 'C', gender: 'male', children: [] },
        { name: 'D', gender: 'male', children: [] },
        { name: 'E', gender: 'male', children: [] },
        { name: 'F', gender: 'male', children: [] },
        { name: 'G', gender: 'male', children: [] },
        {
          name: 'H',
          gender: 'male',
          children: [
            // This is a seventh son
            { name: 'I', gender: 'male', children: [] },
            { name: 'J', gender: 'male', children: [] },
            { name: 'K', gender: 'male', children: [] },
            { name: 'L', gender: 'male', children: [] },
            { name: 'M', gender: 'male', children: [] },
            { name: 'N', gender: 'male', children: [] },
            { name: 'O', gender: 'male', children: [] }, // This is a sventh son of a seventh son
          ],
        },
      ],
    };

    const result = findSeventhSonsOfSeventhSons(JSON.stringify(json));
    expect(result).toEqual(new Set('O'));
  });

  test('Contains seventh son of seventh son of seventh son', () => {
    const json = {
      name: 'A',
      gender: 'male',
      children: [
        { name: 'B', gender: 'male', children: [] },
        { name: 'C', gender: 'male', children: [] },
        { name: 'D', gender: 'male', children: [] },
        { name: 'E', gender: 'male', children: [] },
        { name: 'F', gender: 'male', children: [] },
        { name: 'G', gender: 'male', children: [] },
        {
          name: 'H',
          gender: 'male',
          children: [
            // This is a seventh son
            { name: 'I', gender: 'male', children: [] },
            { name: 'J', gender: 'male', children: [] },
            { name: 'K', gender: 'male', children: [] },
            { name: 'L', gender: 'male', children: [] },
            { name: 'M', gender: 'male', children: [] },
            { name: 'N', gender: 'male', children: [] },
            {
              name: 'O',
              gender: 'male',
              children: [
                { name: 'I', gender: 'male', children: [] },
                { name: 'J', gender: 'male', children: [] },
                { name: 'K', gender: 'male', children: [] },
                { name: 'L', gender: 'male', children: [] },
                { name: 'M', gender: 'male', children: [] },
                { name: 'N', gender: 'male', children: [] },
                { name: 'OO', gender: 'male', children: [] }, // This is a sventh son of a seventh son
              ],
            },
          ],
        },
      ],
    };

    const result = findSeventhSonsOfSeventhSons(JSON.stringify(json));
    expect(result).toEqual(new Set(['O', 'OO']));
  });

  test('Would-be seventh son of seventh son is a daughter', () => {
    const json = {
      name: 'A',
      gender: 'male',
      children: [
        { name: 'B', gender: 'male', children: [] },
        { name: 'C', gender: 'male', children: [] },
        { name: 'D', gender: 'male', children: [] },
        { name: 'E', gender: 'male', children: [] },
        { name: 'F', gender: 'male', children: [] },
        { name: 'G', gender: 'male', children: [] },
        {
          name: 'H',
          gender: 'male',
          children: [
            // This is a seventh son
            { name: 'I', gender: 'male', children: [] },
            { name: 'J', gender: 'male', children: [] },
            { name: 'K', gender: 'male', children: [] },
            { name: 'L', gender: 'male', children: [] },
            { name: 'M', gender: 'male', children: [] },
            { name: 'N', gender: 'male', children: [] },
            { name: 'O', gender: 'female', children: [] }, // The seventh son of a seventh son is in fact a daughter!
          ],
        },
      ],
    };

    const result = findSeventhSonsOfSeventhSons(JSON.stringify(json));
    expect(result).toEqual(new Set());
  });

  test('Chain of sons is broken', () => {
    const json = {
      name: 'A',
      gender: 'male',
      children: [
        { name: 'B', gender: 'male', children: [] },
        { name: 'C', gender: 'male', children: [] },
        { name: 'D', gender: 'male', children: [] },
        { name: 'E', gender: 'female', children: [] }, //  The chain of sons is broken!
        { name: 'F', gender: 'male', children: [] },
        { name: 'G', gender: 'male', children: [] },
        {
          name: 'H',
          gender: 'male',
          children: [
            { name: 'I', gender: 'male', children: [] },
            { name: 'J', gender: 'male', children: [] },
            { name: 'K', gender: 'male', children: [] },
            { name: 'L', gender: 'male', children: [] },
            { name: 'M', gender: 'male', children: [] },
            { name: 'N', gender: 'male', children: [] },
            { name: 'O', gender: 'male', children: [] },
          ],
        },
      ],
    };

    const result = findSeventhSonsOfSeventhSons(JSON.stringify(json));
    expect(result).toEqual(new Set());
  });

  test('Seventh son does not have children', () => {
    const json = {
      name: 'A',
      gender: 'male',
      children: [
        { name: 'B', gender: 'male', children: [] },
        { name: 'C', gender: 'male', children: [] },
        { name: 'D', gender: 'male', children: [] },
        { name: 'E', gender: 'male', children: [] },
        { name: 'F', gender: 'male', children: [] },
        { name: 'G', gender: 'male', children: [] },
        { name: 'H', gender: 'male', children: [] }, // This is a seventh son, but he has no children
      ],
    };

    const result = findSeventhSonsOfSeventhSons(JSON.stringify(json));
    expect(result).toEqual(new Set());
  });
});
