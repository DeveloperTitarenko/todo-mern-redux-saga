import './settings.scss'

import Input from "../../components/Input/Input";
import {useState} from "react";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";
import Check from "../../components/Check/Check";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/actions/user.actions";

const Settings = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    position: user.position,
    logo: {},
  })
  const handleForm = (event) => {
    const {name, value} = event.target
    setForm((prev) => {
      return ({...prev, [name]: value})
    })
  }

  const updateUserData = () => {
    dispatch(updateUser({_id: user._id, data: form}))
  }

  return (
    <div className='setting'>
      <div className='setting__user'>
        <h1>Setting user</h1>
        <div className='setting__user-input'>
          <Input
            textLabel='Email' name='email' type='text' placeholder='Enter your Email'
            value={form.email} onChange={handleForm}
          />
          <Input
            textLabel='Username' name='username' type='text' placeholder='Enter your Username'
            value={form.username} onChange={handleForm}
          />
          <Input
            textLabel='First name' name='firstName' type='text' placeholder='Enter your First Name'
            value={form.firstName} onChange={handleForm}
          />
          <Input
            textLabel='Last name' name='lastName' type='text' placeholder='Enter your Last Name'
            value={form.lastName} onChange={handleForm}
          />
          <Input
            textLabel='Position' name='position' type='text' placeholder='Enter your position'
            value={form.position} onChange={handleForm}
          />
        </div>
        <UploadAvatar setForm={setForm}/>
        <button className='button-save' onClick={updateUserData}>Save</button>
      </div>
      <div className='setting__password'>
        <h1>Setting password</h1>
        <div className='setting__password-container'>
          <div className='setting__password-input'>
            <Input
              textLabel='Password' name='password' type='password' placeholder='Password'
              value={form.password} onChange={handleForm}
            />
            <Input
              textLabel='New Password' name='newPassword' type='password' placeholder='New Password'
              value={form.newPassword} onChange={handleForm}
            />
            <Input
              textLabel='Repeat new Password' name='repeatNewPassword' type='password' placeholder='Repeat new Password'
              value={form.repeatNewPassword} onChange={handleForm}
            />
          </div>
          <div className='setting__password-validation'>
            <div className='setting__password-validation-wrapper'>
              <h2>Password must contain</h2>
              <ul>
                <li><Check check={false}/>8-16 characters</li>
                <li><Check check={true}/>lower-case</li>
                <li><Check check={true}/>upper-case</li>
                <li><Check check={true}/>numbers</li>
                <li><Check check={true}/>special characters</li>
              </ul>
            </div>
          </div>
        </div>
        <button className='button-save'>Save</button>
      </div>
    </div>
  )
}
export default Settings