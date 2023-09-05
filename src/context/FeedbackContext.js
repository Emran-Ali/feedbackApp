import { createContext, useState, useEffect } from 'react'

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
    const res = await fetch(`/feedback?_sort=id`);
    const data = await res.json();
    setFeedback(data);
  }
  const updateFeedback = async (id, updFeedback) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updFeedback),
    })
    const data = await res.json();
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ))
  }
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure !!!")) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const editFeedback = (item) => {
    setEditFeedback({
      item,
      edit: true,
    })

  }
  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback',
      {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })

    const data = await res.json();
    setFeedback([data, ...feedback]);
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


