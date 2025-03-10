
// eslint-disable-next-line react/prop-types
export default function Plan() {

    // const transitionDelay = 0.3;
    // let delay = 0;
    // const animationDelay = (i) => i*2/5 + 's';




    return (
        <>
        
        <h3 className='font-vibes text-center text-6xl mb-4'>План дня</h3>
        <div className="plan-wrapper w-fit mx-auto">
            

            {/* <ul className="flex flex-col gap-12">
                {events.map((event, i) => 
                    <li
                    key={event.id} 
                    className="event pl-8 font-lora text-xl"
                    style={{
                        animationDelay: animationDelay(i) 
                    }}
                    >
                        <p className="event__time">
                            {event.time}
                        </p>
                        <p className="event__text">
                            {event.event}
                        </p>
                    </li>
                )}
            </ul> */}
        </div>
        </>
    )

};