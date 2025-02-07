import React from 'react';

const Loginform = () => {
    const emailRef=React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value

        alert(email+' '+password);
    }

    return (

        <form onSubmit={handleSubmit}>
            <div>LoginForm
                <br/>
                <label htmlFor='email'>Email</label>
                <input id='email'type='text' ref={emailRef}/>
            
            </div>

            <div>
            <label htmlFor='password'>password</label>
                <input id='password'type='password' ref={passwordRef}/>
            
            </div>
            <button type='submit'>submit</button>
        </form>

    );
}

export default Loginform;
