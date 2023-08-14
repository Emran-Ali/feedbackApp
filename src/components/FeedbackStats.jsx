
function FeedbackStats({ feedback }) {
    let avarage = feedback.reduce((acc, cur) => {
        return acc += cur.ratting
    }, 0) / feedback.length

    return (
        <div className="feedback-stats">
            <h4>{feedback.length}  Reviews</h4>
            <h4>Avarage Ratting {avarage}</h4>
        </div>
    )
}
export default FeedbackStats
