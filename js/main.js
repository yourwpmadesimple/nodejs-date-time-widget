const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')

/**
 * 
 * @param {Date} date 
 */
const formatTime = (date) => {
    const hours12 = date.getHours() % 12 || 12
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const timeofDay = date.getHours() < 12
    return `${hours12.toString()}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${timeofDay ? "AN" : "PM"}`
}

const formatDate = (date) => {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}
setInterval(() => {
    const now = new Date()
    timeElement.textContent = formatTime(now)
    dateElement.textContent = formatDate(now)
}, 1000)