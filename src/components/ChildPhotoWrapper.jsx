

import ChildPhoto from "./ChildPhoto";

const hisInfo = {
    name: 'Никита',
    age: '8 лет',
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
                style={{gridColumn: '1/4'}}
            />
            <img src="images/flower.jpg" alt="flower" />
            <div className="wrapper-title" style={{gridColumn: '1/5'}}>
                <span>{hisInfo.name[0]} + {herInfo.name[0]} = </span>
                <img src="images/heart.png" alt="Heart" width={20} />
            </div>
            <img src="images/car.jpg" alt="car" />
            <ChildPhoto 
                name={hisInfo.name} 
                age={hisInfo.age} 
                imgUrl={hisInfo.imgUrl} 
                style={{gridColumn: '2/5'}}
            />
        </div>
    );
    
}