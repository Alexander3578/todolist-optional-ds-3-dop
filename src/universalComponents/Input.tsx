import React, {LegacyRef, RefObject} from 'react';

type InputPropsType = {
    newTitle: RefObject<HTMLInputElement>
}

export const Input:React.FC<InputPropsType> = ({newTitle}) => {


    return (
        <input ref={newTitle}/>
    );
};

