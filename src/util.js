export const secondsTo12HrClock = seconds => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let AMorPM = (hours >= 12) ? 'PM' : 'AM';
    let hoursStr = (hours > 12) ? hours - 12 : hours;
    let minutesStr = (minutes > 10) ? minutes : '0' + minutes;

    return hoursStr + ':' + minutesStr + AMorPM;
};

export const numToDay = day => {
    switch(day) {
        case 1: return "Mo";
        case 2: return "Tu";
        case 3: return "We";
        case 4: return "Th";
        case 5: return "Fr";
        case 6: return "Sa";
        case 7: return "Su";
        default: return "N/A";
    }
};

export const dayNumsToString = days => {
    return days.map(d => numToDay(d)).join("");
};

export const secondsTimeToString = (start, end) => {
    return secondsTo12HrClock(start) + "-" + secondsTo12HrClock(end);
};
