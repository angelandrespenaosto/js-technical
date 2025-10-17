const rules = [
    ["rock", "scisor"],
    ["paper", "rock"],
    ["scisor", "paper"]
]

function play( game ) {

    // const [p1, p2] = game
    
    // let result = ""

    // if (p1 === p2) {
    //     result = "It's a tie!";
    // } else if (rules.find(rule => rule[0] === p1 && rule[1] === p2)) {
    //     result = "player 1 won and player 2 lost";
    // } else {
    //     result = "player 2 won and player 1 lost";
    // }

    const result = game.map(([p1, p2], i) => {
        if ( p1 === p2 ) {
            return `Round ${i + 1}: It's a tie!`
        } else if (rules.find(rule => rule[0] === p1 && rule[1] === p2)) {
            return `Round ${i + 1}: Player 1 won and Player 2 lost`
        } else {
            return `Round ${i + 1}: Player 2 won and Player 1 lost`
        }
    });

    return result

}


const game = [
  ["paper", "scisor"],
  ["paper", "rock"],
  ["scisor", "scisor"],
  ["scisor", "rock"]
];

console.log( play( game ) )

