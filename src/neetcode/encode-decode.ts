function encode(strs: string[]): string {
  return strs.reduce((prev, curr) => {
    prev += `[${curr.length}]${curr}`;
    return prev;
  }, '');
}

//

function decode(str: string): string[] {
  const result: string[] = [];

  let isCounting = false;
  let currentLen = '';

  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];

    if (symbol === ']') {
      isCounting = false;
      result.push(str.slice(i + 1, i + 1 + parseInt(currentLen)));
      i = i + parseInt(currentLen);
      currentLen = '';
    }
    if (isCounting) currentLen += symbol;
    if (symbol === '[') isCounting = true;
  }

  return result;
}

//

const encoded = encode(['Hello', 'World']);
decode(encoded);

//

describe('Encode and Decode Strings', () => {
  it('should pass basic cases', () => {
    const strs = ['Hello', 'World'];
    const encoded = encode(strs);
    const result = decode(encoded);
    expect(strs).toEqual(result);
  });
});
