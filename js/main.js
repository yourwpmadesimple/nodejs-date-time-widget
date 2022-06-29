const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')

/**
 * 
 * @param {Date} date 
 */
const formatTime = (date) => {
    const hours12 = date.getHours() % 12 || 12
    const minutes = date.getMinutes()
    const seconds = setInterval(() => {
        date.getSeconds()
    }, 1000)
    const timeofDay = date.getHours() < 12
    return `${hours12.toString()}:${minutes.toString().padStart(2, "0")}:${seconds} ${timeofDay ? "AN" : "PM"}`
}