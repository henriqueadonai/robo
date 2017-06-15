import React from 'react';


const Card = ({id, name, email}) =>{
    return (
        <div className='bg-light-blue dib pa3 ma2 tc br3 grow'>
            <img role='presentation' 
                src={`//robohash.org/${id}?size=200x200`} 
            />              
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
    
}

Card.protoType ={
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
}

export default Card;