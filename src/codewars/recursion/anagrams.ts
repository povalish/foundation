function anagrams(str: string): string[] {
  const run = (s: string): string[] => {
    if (s.length === 1) {
      return [s[0]];
    }

    const variants = run(s.slice(1, s.length));
    const newVariants: string[] = [];

    variants.forEach((variant) => {
      for (let i = 0; i < s.length; i++) {
        const copy = variant.split('');
        copy.splice(i, 0, s[0]);
        newVariants.push(copy.join(''));
      }
    });

    return newVariants;
  };

  return run(str);
}

//
//

describe('anagrams', () => {
  test('should pass test', () => {
    const result = anagrams('abc');
    console.log('Result: ', result);
    expect(result).not.toEqual([]);
  });
});
