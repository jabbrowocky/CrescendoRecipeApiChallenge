import React from 'react';
import {useParams} from 'react-router-dom';

export default function ViewItem() {
    const { id } = useParams();
    return(
        <div>
            Viewing {id}
        </div>
    )
}