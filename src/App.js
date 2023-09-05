import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header text="FeedBack App" />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />

                            </>
                        }
                        />
                        <Route exact path='/about' Component={About}> </Route>
                        <Route exact path='/' Component={AboutIconLink}> </Route>

                    </Routes>
                </div>
                <AboutIconLink />
            </ Router >
        </FeedbackProvider>
    )
}

export default App
