document.addEventListener("DOMContentLoaded", (event) => {

    const heroes = {
        'Iron Man': {
            realName: 'Tony Stark',
            powers: ['Advanced technology', 'Flight', 'Genius-level intellect'],
            team: 'Avengers'
        },
        'Spider-Man': {
            realName: 'Peter Parker',
            powers: ['Wall-crawling', 'Spider-sense', 'Super agility'],
            team: 'Avengers'
        },
        'Captain America': {
            realName: 'Steve Rogers',
            powers: ['Super strength', 'Enhanced endurance', 'Vibranium shield'],
            team: 'Avengers'
        },
        'Thor': {
            realName: 'Thor Odinson',
            powers: ['God of Thunder', 'Weather control', 'Mjolnir'],
            team: 'Avengers'
        },
        'Black Widow': {
            realName: 'Natasha Romanoff',
            powers: ['Martial arts', 'Espionage', 'Enhanced agility'],
            team: 'Avengers'
        },
        'Hulk': {
            realName: 'Bruce Banner',
            powers: ['Super strength', 'Regeneration', 'Durability'],
            team: 'Avengers'
        },
        'Doctor Strange': {
            realName: 'Stephen Strange',
            powers: ['Magic', 'Time manipulation', 'Dimensional travel'],
            team: 'Defenders'
        },
        'Wolverine': {
            realName: 'Logan',
            powers: ['Regeneration', 'Adamantium claws', 'Enhanced senses'],
            team: 'X-Men'
        },
        'Storm': {
            realName: 'Ororo Munroe',
            powers: ['Weather manipulation', 'Flight', 'Energy projection'],
            team: 'X-Men'
        },
        'Scarlet Witch': {
            realName: 'Wanda Maximoff',
            powers: ['Reality manipulation', 'Chaos magic', 'Telekinesis'],
            team: 'Avengers'
        }
    }


    function displaySuperHeroe( aka ) {

        if ( aka in heroes ) {

            const info = heroes[aka]
            result = `############# ${aka} #############\nReal name: ${info.realName}\nPowers: ${info.powers.join(", ")}\nTeam: ${info.team}`

        } else {
            result = `############# ${aka} #############\n${aka} does not exist`
        }

        console.log(result)

    }

    displaySuperHeroe( "Scarlet Witch" )

    /* Part 2 */

    const displayGroupSuperHeroes = (akas) => {

        akas.forEach(aka => {
            displaySuperHeroe(aka)
        });

    }

    displayGroupSuperHeroes([
        "Iron Man", "Thor", "Joker"
    ])

});