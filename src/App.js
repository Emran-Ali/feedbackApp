import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './Data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'





function App() {

    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure !!!")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <>
            <Header text="Color me As You can" />

            <div className="container">

                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                    handleDelete={deleteFeedback} />
            </div>
        </>

    )
}

export default App
