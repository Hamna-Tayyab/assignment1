let aName: string = "Hamna tayyab"
console.log("Lowercse: " + aName.toLowerCase())

console.log("Uppercase: " + aName.toUpperCase())

function toTitleCase(input: string): string {
  const words = input.split(' ');
  for (let i = 0; i < words.length; i++) {  
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}
let TitleCaseName = toTitleCase(aName);
console.log("Titlecase: " + TitleCaseName)