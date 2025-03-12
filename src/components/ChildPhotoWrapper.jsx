

import ChildPhoto from "./ChildPhoto";

const hisInfo = {
    name: 'Никита',
    age: '6 лет',
    imgUrl: 'images/nikita.jpeg'
};

const herInfo = {
    name: 'Регина',
    age: '6 лет',
    imgUrl: 'images/regina.jpeg'
}
export default function ChildPhotoWrapper() {
    return (
        <div className="wrapper"
        style={{fontFamily: 'Caveat'}}>
            <ChildPhoto 
                name={herInfo.name} 
                age={herInfo.age} 
                imgUrl={herInfo.imgUrl} 
                style={{gridColumn: '1/3', maxWidth: '200px'}}
            />
            <img src="images/flower.jpg" alt="flower" style={{gridColumn: '3/5'}} />
            <div className="wrapper-title" 
                style={{
                    gridColumn: '1/5',
                    width: '200px',
                    margin: '0 auto',
                    fontSize: '30px'
                }}
            >
                <span>{hisInfo.name[0]} + {herInfo.name[0]} = </span>
                <img src="images/heart.png" alt="Heart" width={30} />
            </div>
            <img src="images/car.jpg" alt="car" style={{gridColumn: '1/3'}} />
            <ChildPhoto 
                name={hisInfo.name} 
                age={hisInfo.age} 
                imgUrl={hisInfo.imgUrl} 
                style={{gridColumn: '3/5', maxWidth: '200px'}}
            />
        </div>
    );
    
}