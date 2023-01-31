function helloWord(username?: string): string {
  if (username !== undefined) return `Hello ${username}`;
  return "Hello world!";
}

console.log(helloWord());
console.log(helloWord("Matheus"));
