const Task = ({ task, deleteTask }) => {

    return (
        <div className="task">
            <h1>{task.title}</h1>
            <svg onClick={deleteTask} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 52 52" width="20" height="20" viewBox="0 0 52 52" id="dustbin"><path fill="fill-rule:evenodd" d="M14.61084,51h22.77832c1.86035,0,3.37305-1.45508,3.37305-3.24316V16.73047h0.92676
            c0.55273,0,1-0.44775,1-1V8.44238c0-1.11084-0.90332-2.01416-2.01367-2.01416h-6.40881C32.83313,3.16107,29.61188,1,26.00049,1
            c-3.61768,0-6.86475,2.15356-8.29468,5.42822h-6.3811c-1.11035,0-2.01367,0.90332-2.01367,2.01416v7.28809c0,0.55225,0.44727,1,1,1
            h0.92676v31.02637C11.23779,49.54492,12.75049,51,14.61084,51z M38.76221,47.75684C38.76221,48.44238,38.146,49,37.38916,49
            H14.61084c-0.75684,0-1.37305-0.55762-1.37305-1.24316V16.73047h25.52441V47.75684z M26.00049,3
            c2.51074,0,4.79297,1.33252,6.04883,3.42822H19.95068C21.20654,4.33252,23.48877,3,26.00049,3z M11.32471,8.42822l29.36426,0.01416
            v6.28809c-2.42426,0-21.93085,0-29.37598,0L11.32471,8.42822z"></path><path fill="fill-rule:evenodd" d="M32.38428 45.82617c.55273 0 1-.44775 1-1V22.5542c0-.55225-.44727-1-1-1s-1 .44775-1 1v22.27197C31.38428 45.37842 31.83154 45.82617 32.38428 45.82617zM26.00049 45.82617c.55273 0 1-.44775 1-1V22.5542c0-.55225-.44727-1-1-1s-1 .44775-1 1v22.27197C25.00049 45.37842 25.44775 45.82617 26.00049 45.82617zM19.61572 45.82617c.55273 0 1-.44775 1-1V22.5542c0-.55225-.44727-1-1-1s-1 .44775-1 1v22.27197C18.61572 45.37842 19.06299 45.82617 19.61572 45.82617z"></path></svg>
            <h3>{task.description}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task