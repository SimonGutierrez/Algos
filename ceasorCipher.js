function caesarCipherEncryptor(string, key) {
    key = key % 26;
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let newLetters = [];

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        newLetters.push(helper(alphabet, letter, key))
    }

    return newLetters.join('');
  }

function helper(alphabet, letter, key) {
    let index = alphabet.indexOf(letter);

    if (index === 25) {
        index = -1;
    }

    const newLetter = alphabet[index + key]

    return newLetter;
}

  console.log(caesarCipherEncryptor('abc', 2)) // cde
  console.log(caesarCipherEncryptor('xyz', 2)) // zab

