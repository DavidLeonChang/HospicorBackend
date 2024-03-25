/*const dateout = (time)=>{
    const arraytime = time.split(" ");
    const newtime = arraytime[1].split(":");
    const formatdate = `${arraytime[0]} ${newtime[0]}:${newtime[1]}`;
    return formatdate;
}front-end necesita*/
const datein = ()=>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate(); 
    const hours = currentDate.getHours(); 
    const minutes = currentDate.getMinutes();
    const fullDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`
    return fullDate;
}

module.exports = {dateout,datein};