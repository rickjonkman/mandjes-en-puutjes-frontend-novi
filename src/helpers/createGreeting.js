import {getHour} from "./getHour.js";

export function createGreeting(gethour) {

    let greeting = '';

    if (gethour < 6 && gethour >= 0) {
        greeting = 'Goedenacht '
    } else if (gethour < 12 && gethour >= 6) {
        greeting = 'Goedemorgen ';
    } else if (gethour < 18 && getHour >= 12) {
        greeting = 'Goedemiddag  ';
    } else if (getHour <= 23 && getHour >= 18) {
        greeting = 'Goedenavond ';
    } else {
        greeting = 'Hallo ';
    }

    return greeting;

}