const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //no obligatorio
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Coiunter"],
};

strider.hometown = "Rivendell";

console.table(strider);

export {};
