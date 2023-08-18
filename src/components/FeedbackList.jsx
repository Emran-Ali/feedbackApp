import FeedbackItem from "./FeedbackItem"
import { AnimatePresence, motion } from "framer-motion"
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
            <AnimatePresence>
                {
                    feedback.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.1 }}
                            // whileTap={{ scale: 1.1 }}
                            drag="x"
                            dragConstraints={{ left: -50, right: 50 }}
                        >
                            <FeedbackItem key={item.id}
                                item={item}
                                handleDelete={handleDelete} />
                        </motion.div>
                    ))
                }
            </AnimatePresence >
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
