import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is from context provider",
      rating: 10,
    },
    {
      id: 2,
      text: "this is from context provider 2",
      rating: 9,
    }
  ])
  const [feedbackEdit, setEditFeedback] = useState({
    item: {},
    edit: false,
  })
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure !!!")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const editFeedback = (item) => {
    setEditFeedback({
      item,
      edit: true,
    })

  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,

  }}>
    {
      children
    }
  </FeedbackContext.Provider>

}

export default FeedbackContext;


