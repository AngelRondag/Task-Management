
export const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let format = "AM";
    if (hours > 12) {
        hours -= 12;
        format = "PM";
    }
    return `${hours}:${minutes} ${format}`

}