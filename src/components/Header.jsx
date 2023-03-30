import Button from "./Button";

const Header = ({ title, showAddTask, toggleShowAddTask }) => {
    return (
        <>
            <header>
                <h1>{title}</h1>
                <Button onClick={toggleShowAddTask} text={showAddTask ? 'Close' : 'Add Task'} style={showAddTask ? { background: 'darkred' } : { background: 'green' }} />
            </header>
        </>
    )
}

export default Header