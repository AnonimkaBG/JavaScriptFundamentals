function calculateResources(base, increment) {

    let requiredStone = 0;
    let requiredMarble = 0;
    let requiredLapis = 0;
    let requiredGold = 0;

    let steps = 1;

    for (let i = base; i >= 1; i -= 2, steps++) {
        let currStep = i * i;

        let requiredBulk = (i - 2) * (i - 2);
        let requiredOuter = currStep - requiredBulk;

        if (currStep === 1 || currStep === 4) { 
            requiredGold = currStep * increment;
        } else {
            requiredStone += requiredBulk * increment;

            if (steps % 5 == 0) { 
                requiredLapis += requiredOuter * increment;
            } else {
                requiredMarble += requiredOuter * increment;
            }
        }
    }

    console.log(`Stone required: ${Math.ceil(requiredStone)}`);
    console.log(`Marble required: ${Math.ceil(requiredMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(requiredLapis)}`);
    console.log(`Gold required: ${Math.ceil(requiredGold)}`);
    console.log(`Final pyramid height: ${Math.floor(( steps - 1 ) * increment)}`);
}