import { faArrowRight, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Experience = () => {
    const [experience,setExperience] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setExperience(data))
    },[])

    console.log(experience)
    return (
        <div className='mt-5'>
            <h4 style={{color:'yellow',fontFamily: 'Instrument Serif serif'}}><FontAwesomeIcon  icon={faBriefcase}/> WORK EXPERIENCE</h4> <hr />
            {
                experience.map(ex => <div className='mt-5' key={ex.title}>
                    <p style={{fontFamily:'Instrument Serif serif',margin:'2px'}}>{ex.data}</p>
                <h6 style={{color:'white',FontFamily: 'Instrument Serif serif'}}>{ex.title}</h6>
                {ex?.estimationWork? <b>stimation Work:</b> : ''}
                    <ul>
                        {
                            ex?.estimationWork?.map(estimate => <li style={{listStyle:'none'}}><FontAwesomeIcon style={{color:'white',margin:'0 5px'}} icon={faArrowRight}/> {estimate}</li>)
                        }
                    </ul>
                
                {ex?.billingWork? <b>stimation Work:</b> : ''}

                <ul>
                        {
                            ex?.billingWork?.map(estimate => <li style={{listStyle:'none'}}><FontAwesomeIcon style={{color:'white',margin:'0 5px'}} icon={faArrowRight}/> {estimate}</li>)
                        }
                    </ul>
                <ul>
                    {
                        ex?.extra?.map(estimate => <li style={{listStyle:'none'}}><FontAwesomeIcon style={{color:'white',margin:'0 5px'}} icon={faArrowRight}/> {estimate}</li>)
                    }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default Experience;