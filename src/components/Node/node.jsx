import React from 'react';
import StyledNode from './node.style';

function Node({x}){
    return (
        <StyledNode>
            <div className='expand'>f</div>
            <div className="ceva">{x}</div>
        </StyledNode>
    )
}

export default Node;