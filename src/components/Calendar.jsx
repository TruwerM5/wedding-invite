


const daysOfWeek = [
    {
        id: 1,
        name: 'ПН'
    },{
        id: 2,
        name: 'ВТ'
    },{
        id: 3,
        name: 'СР'
    },{
        id: 4,
        name: 'ЧТ'
    },{
        id: 5,
        name: 'ПТ'
    },{
        id: 6,
        name: 'СБ'
    },{
        id: 0,
        name: 'ВС'
    },
];
const months = [
    ['Январь', 31], //Month and how many days in the month
    ['Февраль', 28], 
    ['Март', 31], 
    ['Апрель', 30], 
    ['Май', 31], 
    ['Июнь', 30], 
    ['Июль', 31], 
    ['Август', 31],
    ['Сентябрь', 30],
    ['Октябрь', 31],
    ['Ноябрь', 30],
    ['Декабрь', 31]
];

function getMonthByIndex(index) {
    return months[index];
}


function compareDays(year, month, days, pairs) {
    days.forEach(day => {
        let instance = new Date(year, month, day).getDay();
        pairs.push({dow: daysOfWeek.find(d => d.id == instance).id, day});
    });
}

function fillDays(monthDays, days) {
    for(let i = 1; i <= monthDays; i++) {
        days.push(i);
    }
}

// eslint-disable-next-line react/prop-types
export default function Calendar({ date }) {

    // eslint-disable-next-line react/prop-types
    const month = getMonthByIndex(date.getMonth());

    const days = [];
    const pairs = [];
    fillDays(month[1], days);
    // eslint-disable-next-line react/prop-types
    compareDays(date.getFullYear(), date.getMonth(), days, pairs);

    return (
        <div className="calendar max-w-[450px] mx-auto my-12 px-4">
            <h3 className="font-kurale text-center text-5xl mb-5">{month[0]}</h3>
            <div className="grid grid-cols-7 gap-[5px] justify-items-center">
                {daysOfWeek.map(day => 
                    <span key={day.id} className="day-of-week font-lora font-semibold">
                        {day.name}
                    </span>
                )}
            </div>
            <hr className="h-[3px] bg-black mb-1" />
            <div className="grid grid-cols-7 gap-[5px] justify-items-center items-center">
                {pairs.map((pair) => {
                    let className = "p-1 w-[44px] h-[44px] text-center flex items-center justify-center";

                    // eslint-disable-next-line react/prop-types
                    if(pair.day === date.getDate()) {
                        className += " text-white bg-red-500 rounded-full font-semibold";
                    }

                    return (
                        <span 
                            key={pair.day} 
                            style={{
                                gridColumn: `${pair.dow}/${pair.dow + 1}` 
                            }}
                            className={className}
                        >
                            {pair.day}
                        </span>
                    )
                    
                    
                    
                })}
            </div>
        </div>
    )

}