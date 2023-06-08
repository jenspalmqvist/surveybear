import { ISurvey } from "@surveybear/surveybear-lib";

export const getSurveyById = async ( surveyId: string): Promise<ISurvey> => {
    console.log(surveyId);
    return (await fetch(`https://urchin-app-o23zp.ondigitalocean.app/survey/${surveyId}`)).json();
}