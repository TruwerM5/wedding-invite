

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function ChildPhoto({ imgUrl, name, age, style }) {
    return (
    <div className="photo pt-1 px-4 pb-6" style={style}>
        <img src={imgUrl} alt={name} style={{width: '100%'}} />
        <span className="photo-description">{name}, {age}</span>
    </div>
    )
}