export default class Team {
  constructor() {
    this.participants = [];
    this[Symbol.iterator] = this.iterator;
  }

  add(character) {
    this.participants.push(character);
  }

  iterator() {
    let current = 0;
    const { participants } = this;

    return {
      next() {
        if (current < participants.length) {
          return {
            done: false,
            value: participants[current++],
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}
