import { useEffect, useState } from 'react';
import getSurveys from '../../api/getSurveys';
import { ISurvey } from '@surveybear/surveybear-lib';
import { Link } from 'react-router-dom';

const StartPage = () => {
    const [surveys, setSurveys] = useState<ISurvey[]>([])

    useEffect(() => {
        // getSurveys().then(surveys => {
        //     setSurveys(surveys);
        // }).catch(e => console.log(e))
    }, [])


    return (<>
        <h1>Survey</h1>
        <p>Du är på förstasidan</p>
        {/* {surveys.map(survey => (
            <p><Link to={`/survey/${survey._id?.toString()}`}>{ survey?.recipient.name}</Link></p>
    ))
} */}
    </>)
}

export default StartPage;