import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    let avarage = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0);
    console.log(avarage);
    avarage /= feedback.length;

    return (
        <div className="feedback-stats">
            <h4>{feedback.length}  Reviews</h4>
            <h4>Avarage Ratting {isNaN(avarage) ? 0 : avarage}</h4>
        </div>
    )
}
export default FeedbackStats
