
// eslint-disable-next-line react/prop-types
export default function Event ({ event }) {
    return (
        <div className="event flex items-center justify-between gap-[20px] px-4">
            { /*eslint-disable-next-line react/prop-types*/}
            <img src={'images/'+event.image} alt="icon" className="event__image" />
            <div className="event__inner flex flex-col items-center mx-auto gap-[10px]">
            { /*eslint-disable-next-line react/prop-types*/}
                <p className="font-kurale text-xl">- {event.time} {event.event}</p>
                <hr />
            { /*eslint-disable-next-line react/prop-types*/}
                <p className="font-lora text-lg">{event.location}</p>
            </div>
        </div>
    )
};