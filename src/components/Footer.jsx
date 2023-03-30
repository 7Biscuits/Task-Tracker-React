import Button from "./Button"

const Footer = ({ clearTasks }) => {
    return (
        <footer>
            <Button onClick={clearTasks} text='Clear' style={{ background: '#cc0000'}} />
        </footer>
    )
}

export default Footer