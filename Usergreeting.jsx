function Usergreeting({ isLoggedIn }) {
    const LogEvent = () => {
        if (isLoggedIn === true)
            alert("Welcome Back")
        else if (isLoggedIn === false)
            alert("Please Log in")
    }

    return (
        <button onClick={LogEvent}>Login</button>
    )
}
export default Usergreeting