


// eslint-disable-next-line react/prop-types
function AnimatedName({ name, delay = 0, position = 'left' }) {
    
    const animationDelay = (i) => (i + delay)/4 + 's';

    let className = 'relative flex';

    if(position == 'center') {
        className += ' mx-auto';
    }
    if(position == 'right') {
        className += ' ml-auto'
    }

    return (
    <span className={className}>
        {/* eslint-disable-next-line react/prop-types */}
        { name.split('').map((char, i) => 
            <span 
                key={i} 
                className='relative char-animation'
                style={{
                    animationDelay: animationDelay(i)
                }}
            >{char}</span>
        )}
    </span>
    )
}


// eslint-disable-next-line react/prop-types
export default function Names({hisName, herName}) {

    return (
        <div className="names text-7xl font-vibes flex flex-col gap-[10px] max-w-[300px] mx-auto">
            <AnimatedName name={hisName} />
            {/* // eslint-disable-next-line react/prop-types */}
            <AnimatedName name="&" delay={hisName.length} position="center" />
            <AnimatedName name={herName} delay={hisName.length + 1} position="right" />
        </div>
    )
}