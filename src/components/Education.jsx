import React from 'react';

const Education = () => {
    const edu = [
        {
            title:'Bachelor of Science in Civil Engineering (B.Sc. in CE)',
            Institute:'Stamford University Bangladesh ',
            Result:'CGPA 3.61 (out of 4.00) ',
            Duration:'2017 – 2021'
        },
        {
            title:'Diploma in Civil Engineering',
            Institute:'Dhaka Polytechnic Institute',
            Result:' CGPA 2.86 (out of 4.00)',
            Duration:'2012 –2016'
        },
        {
            title:'Secondary School Certificate Examination (S.S.C)',
            Institute:'Shere Bangla Nagar Govt. Boys School. Dhaka-1212',
            Result:'GPA 5.00 (out of 5.00) ',
            Duration:'2017 – 2021'
        },
    ]
    return (
        <div>
            
            <h4 style={{color:'yellow',fontFamily: 'Instrument Serif serif'}} className='mt-5 '> <i class="mx-2 fa-solid fa-building-columns"></i>EDUCATION</h4>
            <hr />
            {
                edu.map(education => <div className='mb-4' key={education.title}> 
                    <h6 style={{color:'white'}}>{education.title}</h6>
                    <p className='12px'>Institute: {education.Institute}</p>
                    <p className='12px'>Result: {education.Result}</p>
                    <p className='12px'>Duration: {education.Duration}</p>
                </div>)
            }
        </div>
    );
};

export default Education;