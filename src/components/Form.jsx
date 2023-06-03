import React, {useState} from 'react'


const Form = () => {

      const [Password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);

      const handlePasswordChange = (event) => {
            setPassword(event.target.value);
      }

      const handleTogglePasswordChange = () => {
            setShowPassword(!showPassword);
      }
  return (
    <div className='new-form'>
      <form className='form'>
            <h3 className='title'>This is our react form</h3>
            <p className='message'>Sign Up here</p>
            <div className='flex'>
                  <label>
                        <input type="text" required = "" placeholder='' className='input' />
                        <span>First Name</span>
                  </label>
                  <label>
                        <input type="text" required = "" placeholder='' className='input' />
                        <span>Last Name</span>
                  </label>
            </div>

            <label>
                  <input type="email" required ="" placeholder='' className='input' />
                  <span>Email</span>
            </label>
            <label>
                  <input type={showPassword ? "text" : "password"} 
                  value={Password} required ="" 
                  placeholder='' className='input'
                  onChange={handlePasswordChange} />
                  <span>Password</span>
                  <label>
                        show password
                        <input type="checkbox"
                         checked={showPassword}
                         onChange={handleTogglePasswordChange}
                        />
                  </label>
            </label>
            <label>
                  <input type="text" required ="" placeholder='' className='input' />
                  <span>Confirm Password</span>
            </label>
            <button className='submit'>Submit</button>
            <p className='signin'>Have an account?
                  <a href="#">Signin</a>
            </p>
      </form>
    </div>
  )
}

export default Form