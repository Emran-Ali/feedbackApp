import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './Data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'





function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure !!!")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <Router>
            <Header text="Color me As You can" />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback}
                                handleDelete={deleteFeedback} />

                        </>
                    }
                    />
                    <Route exact path='/about' Component={About}> </Route>
                    <Route exact path='/' Component={AboutIconLink}> </Route>

                </Routes>
            </div>
            <AboutIconLink />
        </ Router >
    )
}

export default App
