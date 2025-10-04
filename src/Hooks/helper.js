export const getFiveDayForecast = (data) => {
    if(!data || !data.list) 
        return [];
    const dailyMap = {};
    data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if(!dailyMap[date])
            dailyMap[date] =[];
        dailyMap[date].push(item);
    });

    //pick one per day (for lets say 12:00 entry)
    const fiveDays = Object.keys(dailyMap).map((date) =>{
        const entries = dailyMap[date];
        const nonEntry = entries.find((e) => 
        e.dt_txt.includes("12:00:0")) || entries[0];
        return {
            date,
            temp : Math.round(nonEntry.main.temp),
            weather: nonEntry.weather[0].main,
            description: nonEntry.weather[0].description,
            icon:nonEntry.weather[0].icon,
        };
    })

    return fiveDays.slice(0,8) // just 5 days
}