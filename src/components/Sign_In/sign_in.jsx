const sign_in = ({handleClose}) =>{
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <input type="text" id="username" placeholder="Enter UserName" />
                <br/>
                <br/>
                <input type="password" id="password" placeholder="Enter Password" />
                <br/>
                <br/>
                <button type="submit">Sign In</button>
                <button onClick={handleClose} style={{padding:'auto',margin:'5px'}}>Cancel</button>
            </form>
        </div>
    )
}
export default sign_in;