import { useState } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RattingSelect from './RattingSelect'


function FeedbackForm() {
    const [text, setText] = useState('');
    const [massage, setMassag] = useState('');
    const [btnDisable, setBtnDisable] = useState('True');

    const handleTextChangr = (e) => {
        if (text === '') {
            setBtnDisable(true);
            setMassag(null);
        }
        else if (text != null && text.trim('').length <= 10) {
            setBtnDisable(true);
            setMassag('text should be greater than 10 charecter');
        }
        else {
            setBtnDisable(false);
            setMassag(null);
        }
        setText(e.target.value)
    }

    return (
        <Card reverse={false}>
            <form >
                <h2>Write a review here</h2>
                <RattingSelect></RattingSelect>
                <div className="input-group">
                    <input onChange={handleTextChangr}
                        type="text"
                        placeholder='Write your review here at least 10 word'
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
