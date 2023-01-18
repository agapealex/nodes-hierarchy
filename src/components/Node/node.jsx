import React from 'react';
import StyledNode from './node.style';

function Node({x, children}){

    // const removeNode = () =>{

    // }
    return (
        <StyledNode>
            <div className='ggg'>
                <div className='expand'>f</div>
                <div className="ceva">{x.id}</div>
                {/* <button onClick={()=>{}}> delete</button> */}
            </div>
            {children}
        </StyledNode>
    )
}

export default Node;