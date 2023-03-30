const Button = ({ text, style, onClick }) => {
    return (
        <button className="btn" onClick={onClick} style={style}>{text}</button>
    )
}

export default Button