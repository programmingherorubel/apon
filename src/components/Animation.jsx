import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
    return (
        <TypeAnimation
                            sequence={[
                                'I am a Civil Engineer', // Types 'One'
                                1000, // Waits 1s
                                '', // Deletes 'One' and types 'Two'
                                500, // Waits 2s
                                'I am a Civil Engineer', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                        />
    );
};

export default Animation;