/**
 * Simplify Path
 * https://leetcode.com/problems/simplify-path/description/?envType=problem-list-v2&envId=string
 */

function simplifyPath(path: string): string {
  const parts = path.split('/');
  const folderStack: string[] = [];

  for (const part of parts) {
    if (part.length === 0) continue;
    else if (part === '..') folderStack.pop();
    else if (part === '/') continue;
    else if (part === '.') continue;
    else folderStack.push(part);
  }

  return '/' + folderStack.join('/');
}

//

// simplifyPath('/.../a/../b/c/../d/./');

describe('Simplify Path', () => {
  it('should pass basic cases', () => {
    expect(simplifyPath('/home/')).toEqual('/home');
    expect(simplifyPath('/home//foo/')).toEqual('/home/foo');
    expect(simplifyPath('/home/user/Documents/../Pictures')).toEqual('/home/user/Pictures');
    expect(simplifyPath('/../')).toEqual('/');
    expect(simplifyPath('/.../a/../b/c/../d/./')).toEqual('/.../b/d');
  });
});
