function solve (text) {
    let splitedText=text.split(/(?=[A-Z])/);
    console.log(splitedText.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');