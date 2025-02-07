import React from 'react';

const Controllogin = () => {
    const [form,setForm] = React.useState({
        email:'',
        password:''
    });
    const handleChange=(event)=>{
        setForm({
            ...form,
            [event.target.id]:event.target.value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(form.email+' '+form.password)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>Controllogin
                <br/>
                <label htmlFor='email'>Email</label>
                <input id='email'type='text' value={form.email} onChange={handleChange}/>
            
            </div>

            <div>
            <label htmlFor='password'>password</label>
                <input id='password'type='password' value={form.email} onChange={handleChange}/>
            
            </div>
            <button type='submit'>submit</button>
        </form>

    );
}

export {Controllogin};
