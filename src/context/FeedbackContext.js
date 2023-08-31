import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setEditFeedback] = useState({
    item: {},
    edit: false,
  })
  useEffect(() => {
    fetchFeedback();

  }, [])

  const fetchFeedback = async () => {
    const res = await fetch(`http://localhost:5000/feedback?_sort=id`);
    const data = await res.json();
    setFeedback(data);
  }
  const updateFeedback = (id, updFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updFeedback } : item
      ))
  }
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
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {
      children
    }
  </FeedbackContext.Provider>

}

export default FeedbackContext;


