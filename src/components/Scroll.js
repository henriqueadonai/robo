import React from 'react';

const Scroll = (props) =>{
    console.log('Props children');
    console.log(props.children);
    return (
        <div style={
            {height: '80vh', overflowY: 'scroll', border: '1px solid black'}
            }>
      {props.children}
    </div>
    );
};
export default Scroll;
