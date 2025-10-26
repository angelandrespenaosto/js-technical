document.addEventListener("DOMContentLoaded", () => {
    /* Juego del ahorcado */
    const secretWord = "angel"
    let attempts = 5
    const form = document.querySelector('form')
    const input = document.querySelector('#letter')
    let playingWord = '_'.repeat(secretWord.length)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const letter = input.value.trim().toLowerCase()
        if (letter) play(letter)
        input.value = ''

    })

    function play(letter) {
        if (attempts > 0 && playingWord !== secretWord) {
            if (secretWord.includes(letter)) {
                updatePlayingWord(letter)
            } else {
                attempts--
            }

            console.log(`🔤 Actual word: ${playingWord}`)
            console.log(`🧪 Attemps: ${attempts}`)

            checkGameStatus()
        }
    }

    function updatePlayingWord(letter) {
        playingWord = playingWord
            .split('')
            .map((char, i) => (secretWord[i] === letter ? letter : char))
            .join('')
    }

    function checkGameStatus() {
        if (playingWord === secretWord) {
            console.log(`🎉 Congratulations! You did it! The secret word was: ${secretWord}`)
            return true
        }

        if (attempts === 0) {
            console.log(`💀 Game over! Nice try, the secret word was: ${secretWord}`)
            return true
        }

        return false
    }
})