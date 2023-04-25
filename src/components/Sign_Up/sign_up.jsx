const sign_up = ({handleClose}) =>{
    return (
        <div>
            <form>
                <h1>Sign Up</h1>
                <input type="text" id="username" placeholder="Enter UserName" />
                <br/>
                <br/>
                <input type="email" id="email" placeholder="Enter Email" />
                <br/>
                <br/>
                <input type="password" id="password" placeholder="Enter Password" />
                <br/>
                <br/>
                <input type="password" id="password" placeholder="Confirm Password" />
                <br/>
                <br/>
                <button type="submit">Sign Up</button>
                <button onClick={handleClose} style={{padding:'auto',margin:'5px'}}>Cancel</button>
            </form>
        </div>
    )
}
export default sign_up;