import { useState, useContext, useEffect } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RattingSelect from './RattingSelect'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRatting] = useState('');
    const [massage, setMassag] = useState('');
    const [btnDisable, setBtnDisable] = useState('True');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisable(false);
            setText(feedbackEdit.item.text);
            setRatting(feedbackEdit.item.rating);

        }
    }, [feedbackEdit])
    const handleTextChangr = (e) => {
        if (text === '') {
            setBtnDisable(true);
            setMassag(null);
        }
        else if (text !== '' && text.trim().length < 9) {
            setBtnDisable(true);
            setMassag('text should be greater than 10 charecter');
        }
        else {
            setBtnDisable(false);
            setMassag(null);
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 9) {

            const newFeedback = {
                text,
                rating,
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else {
                addFeedback(newFeedback);
            }

            setText('');
        }

    }

    return (
        <Card reverse={false}>
            <form onSubmit={handleSubmit}>
                <h2>Write a review here</h2>
                <RattingSelect select={(rating) => { setRatting(rating) }} />
                <div className="input-group">
                    <input
                        onChange={handleTextChangr}
                        type="text"
                        placeholder='Write your review'
                        value={text}
                    />
                    <Button type='submit' version='secondary' isDisable={btnDisable} > send</Button>

                </div>
                {massage && <div>{massage}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;
