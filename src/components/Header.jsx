import PropTypes from 'prop-types'
import Button from './Shared/Card'

function Header({ text, bgColor, textColor }) {

    const HeaderSyles = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={HeaderSyles}>

            <div className="container"  >
                <h1>{text}</h1>
            </div>

        </header>
    )
}

Header.defaultProps = {
    text: "FeedBack UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {

    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,


}
export default Header
