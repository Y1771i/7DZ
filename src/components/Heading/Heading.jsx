

export default function Heading() {
    return (
        <>
            <h2>Login</h2>
            <div className="formBox">
                <input type="email" className='text' placeholder='Email' />
            </div>
            <div className="formBox">
                <input type="text" className='text' placeholder='Text' />
            </div>
            <div className="formBox">
                <input type="text" className='text' placeholder='Text' />
            </div>
            <div className="formBox">
                <input type="password" className='text' placeholder='Password' />
            
            </div>
            <div className="formBox">
                <input type="checkbox" className='checkbox' /><span>Remember me</span>
            </div>
        </>
    )
}