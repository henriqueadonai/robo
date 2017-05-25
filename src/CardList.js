import React from 'react';
import Card from './Card';

function CardList(props){
    console.log(props);
    /*const robotscard = props.robots.map((robot) => (
            <Card 
            key={robot.id} 
            id={robot.id.toString()} 
            name={robot.name} 
            email={robot.email}/>
    ));*/

    return (
    <div>
       {
           props.robots.map((robot) => (
            <Card 
            key={robot.id} 
            id={robot.id.toString()} 
            name={robot.name} 
            email={robot.email} />
            ))
    }
    </div>
    );
}

CardList.propType = {
    robots: React.PropTypes.array.isRequired,

};

export default CardList;