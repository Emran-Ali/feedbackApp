import { useState, useContext } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RattingSelect from './RattingSelect'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRatting] = useState('');
    const [massage, setMassag] = useState('');
    const [btnDisable, setBtnDisable] = useState('True');

    const { addFeedback } = useContext(FeedbackContext);

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
        console.log("on Submit");
        e.preventDefault();
        console.log(rating);
        console.log(text.trim().length);
        if (text.trim().length > 9) {
            console.log("if");

            const newFeedback = {
                text,
                rating,
            }
            addFeedback(newFeedback);
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
