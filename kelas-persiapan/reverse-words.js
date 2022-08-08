function reverseWords(words){
    let allWords = ""
    const word = words.split(" ");
    if(word.length == 1){
        allWords = word.join("");
    } else {
        const revWords = word.reverse();
        allWords = revWords.join(" ");
    }
    console.log(allWords)
}

reverseWords("makan")