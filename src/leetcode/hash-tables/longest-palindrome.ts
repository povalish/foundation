/**
 * Given a string s which consists of lowercase or uppercase
 * letters, return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * #hash-tables #strings
 */

function longestPalindrome(s: string): number {
  if (s.length === 1) {
    return 1;
  }

  const frequency: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    frequency[s[i]] = (frequency[s[i]] || 0) + 1;
  }

  let hasOddNumber = false;
  let longest = Object.values(frequency).reduce((acc, value) => {
    if (value % 2 === 1) hasOddNumber = true;
    return acc + Math.floor(value / 2) * 2;
  }, 0);

  if (hasOddNumber) {
    longest += 1;
  }

  return longest;
}

//
//

describe('the longest palindrome', () => {
  test('should return `7`', () => {
    const s =
      'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';
    const result = longestPalindrome(s);
    expect(result).toEqual(983);
  });

  test('should return `1`', () => {
    const s = 'a';
    const result = longestPalindrome(s);
    expect(result).toEqual(1);
  });

  test('should return `2`', () => {
    const s = 'aa';
    const result = longestPalindrome(s);
    expect(result).toEqual(2);
  });

  test('should return `3`', () => {
    const s = 'ccc';
    const result = longestPalindrome(s);
    expect(result).toEqual(3);
  });

  test('should return `3`', () => {
    const s = 'bananas'; // nnaaaaann
    const result = longestPalindrome(s);
    expect(result).toEqual(5);
  });
});
