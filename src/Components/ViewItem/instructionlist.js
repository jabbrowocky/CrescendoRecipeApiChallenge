import React from 'react';

const InstructionList = ({directions, className}) => {
    
    return (
        <div className={className}>            
            <ul className='instructions'>
                {directions.map(step => {
                    return (
                        <li>
                            <div>
                                {step.instructions}<span><em>{step.optional && ' (optional)'}</em></span>
                            </div> 
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}

export default InstructionList;