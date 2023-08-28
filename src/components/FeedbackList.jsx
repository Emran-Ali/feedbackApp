import FeedbackItem from "./FeedbackItem"
import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from './Shared/Card'


function FeedbackList({ handleDelete }) {
    const { feedback } = useContext(FeedbackContext);

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


export default FeedbackList
