function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

const allLowerRes = `I can't hear you!`;
const allUpperRes = `YES INDEED!`;
const thirdSay = `Let's have dinner together!`;
const thirdRes = `I would love to!`;

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return `${allLowerRes}`;
    } else if (string === string.toUpperCase()) {
        return `${allUpperRes}`;
    } else if (string === thirdSay) {
        return `${thirdRes}`;
    }

}