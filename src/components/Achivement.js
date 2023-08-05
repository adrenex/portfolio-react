import React from 'react';

const Achivement = () => {

    const achivementData = [
        {
            number: 4,
            text1: 'Years of ',
            text2: 'College Life'
        },
        {
            number: 3,
            text1: 'Years of Experience',
            text2: 'In Development'
        },
        {
            number: 2,
            text1: 'Internship',
            text2: 'Experience'
        },
        {
            number: 1,
            text1: 'Reasearch',
            text2: 'Paper'
        }
    ]

    const mappedAchivementData = achivementData.map((item, index) => {
        return (
            <li key={index} className='col-md-3 col-sm-6'>
                <span className='number'>{item.number}</span>
                <span className='text'>
                    <span>{item.text1}</span>
                    <span>{item.text2}</span>
                </span>
            </li>
        )
    });

    return (
        <section className='achivement'>
            <div className='container'>
                <ul className='row'>
                    {mappedAchivementData}
                </ul>
            </div>
        </section>
    )
}

export default Achivement;