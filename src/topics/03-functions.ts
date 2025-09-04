function addNumbers(a: number, b: number) {
  return a + b;
}
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};
const multi = (
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number => {
  return firstNumber * base;
};

// const result: number = addNumbers(1, 4);
// const result2: string = addNumbersArrow(19, 2);
// const multyplyResult: number = multi(78);

// console.log({ result, result2, multyplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de Vida ${this.hp}`);
  },
};

healCharacter(strider, 10);

strider.showHp();

export {};
