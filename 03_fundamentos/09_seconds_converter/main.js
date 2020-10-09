const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let hours = Math.floor(value / 3600)
    if (hours < 10) {
        hours = `0${hours}`
    }
    let minutes = Math.floor((value - (hours * 3600)) / 60)
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let seconds = value - ((hours * 3600) + (minutes * 60))
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return `${hours}:${minutes}:${seconds}`
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "01:00:00")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "01:02:00")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "01:02:05")