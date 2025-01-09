function skillsMember() {
  return {
    name: 'John Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS'],
    greet() {
      return `Hello, ${this.name}!`;
    }
  };
}