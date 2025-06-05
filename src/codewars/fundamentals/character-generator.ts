/**
 * D&D Character Generator: attribute modifiers and spells
 * https://www.codewars.com/kata/596a690510ffee5c0b00006a
 */

type Result = {
  modifier: number;
  maximumSpellLevel: number;
  extraSpells: number[];
};

function charAttribute(score: number): Result {
  const getModifier = (): number => {
    if (score === 0) return 0;
    if (score < 10) return Math.floor(score / 2) - 5;
    return Math.floor((score - 10) / 2);
  };

  const getMaximumSpellLevel = (): number => {
    const spellLevel = score - 10;
    if (spellLevel === 0 || spellLevel === 1) return 0;
    if (spellLevel > 9) return 9;
    if (spellLevel < 0) return -1;
    return spellLevel;
  };

  const getExtraSpells = (modifier: number): number[] => {
    let spells: number[] = [];

    if (modifier < 0) return spells;
    if (modifier <= 9) spells = new Array<number>(modifier);
    if (modifier > 9) spells = new Array<number>(9);

    for (let i = 1; i <= spells.length; i++) {
      spells[i - 1] = Math.floor((modifier - i) / 4) + 1;
    }

    return spells;
  };

  const modifier = getModifier();

  return {
    modifier,
    maximumSpellLevel: getMaximumSpellLevel(),
    extraSpells: getExtraSpells(modifier),
  };
}

//
//

describe('D&D Character Generator', () => {
  test('simple tests', () => {
    expect(charAttribute(0)).toEqual({ modifier: 0, maximumSpellLevel: -1, extraSpells: [] });
    expect(charAttribute(1)).toEqual({ modifier: -5, maximumSpellLevel: -1, extraSpells: [] });
    expect(charAttribute(5)).toEqual({ modifier: -3, maximumSpellLevel: -1, extraSpells: [] });
    expect(charAttribute(10)).toEqual({ modifier: 0, maximumSpellLevel: 0, extraSpells: [] });
    expect(charAttribute(17)).toEqual({ modifier: 3, maximumSpellLevel: 7, extraSpells: [1, 1, 1] });
    expect(charAttribute(20)).toEqual({ modifier: +5, maximumSpellLevel: 9, extraSpells: [2, 1, 1, 1, 1] });
  });
});
