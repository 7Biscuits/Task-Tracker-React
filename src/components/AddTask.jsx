const AddTask = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!e.target.title.value) {
            alert('Please Add a task')
            return
        }

        const months = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

        const time = new Date()
        const date = time.getDate()
        let minutes = time.getMinutes()
        minutes = minutes < 10 ? '0' + minutes : minutes
        const month = time.getMonth()
        let hours = time.getHours()
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12

        const NewTask = {
            title: e.target.title.value,
            description: e.target.description.value,
            day: ` ${hours}:${minutes} ${ampm} | ${date} ${months[month]}`
        }

        props.newTask(NewTask)

        e.target.title.value = ''
        e.target.description.value = ''
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="add-form" >
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" name="title" placeholder="Add Task" />
                </div>
                <div className="form-control">
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Add Description" />
                </div>

                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>
        </>
    )
}

export default AddTask