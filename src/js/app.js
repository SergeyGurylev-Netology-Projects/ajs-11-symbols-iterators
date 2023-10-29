import Team from './team.js';
import Character from './character.js';

const team = new Team();

team.add(new Character('Лучник', 'Bowman'));
team.add(new Character('Демон', 'Daemon'));
team.add(new Character('Маг', 'Magician'));
team.add(new Character('Нежить', 'Undead'));

for (const char of team) {
  console.log(char);
}
