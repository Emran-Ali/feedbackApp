import FeedbackItem from "./FeedbackItem"
import Card from './Shared/Card'
import PropTypes from 'prop-types'



function FeedbackList({ feedback, handleDelete }) {

    if (!feedback || feedback.length === 0) {
        return (
            <Card>Hey! there is no feedback</Card>
        )
    }

    return (
        <div className="feedback-list">
            {

                feedback.map((item) => (
                    <FeedbackItem key={item.id} item={item}
                        handleDelete={handleDelete} />
                ))
            }

        </div>
    )
}
FeedbackList.prototype = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                ratting: PropTypes.number.isRequired,
            }
        )
    ),
}

export default FeedbackList
