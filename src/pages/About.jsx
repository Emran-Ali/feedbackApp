import { Link } from "react-router-dom"
import Card from "../components/Shared/Card"

const About = () => {
    return (

        <Card reverse={false}>
            <div>
                <h1>This is about page</h1>
                <p>Version 1.0.0</p>
                <p>Buid with react </p>
                <Link to='/' > Go back to home</Link>
            </div>
        </Card>
    )
}

export default About
