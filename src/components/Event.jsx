
// eslint-disable-next-line react/prop-types
export default function Event ({ event }) {
    return (
        <div className="event flex items-center justify-between gap-[20px] px-4">
            { /*eslint-disable-next-line react/prop-types*/}
            <img src={'images/'+event.image} alt="icon" className="event__image" />
            <div className="event__inner flex flex-col items-center mx-auto gap-[5px]">
            { /*eslint-disable-next-line react/prop-types*/}
                <p className="font-kurale text-2xl text-center">- {event.time} </p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="font-kurale text-2xl border-b border-black w-full text-center">{event.event}</p>
            { /*eslint-disable-next-line react/prop-types*/}
                <p className="font-lora text-lg">{event.location}</p>
            </div>
        </div>
    )
};