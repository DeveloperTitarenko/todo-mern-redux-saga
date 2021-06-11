import './uploadAvatar.scss'
import avatar
  from "../../static/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png";
import CachedIcon from "@material-ui/icons/Cached";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {useEffect, useState} from "react";

const UploadAvatar = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  const remove = () => {
    setSelectedFile(null)
  }
  return(
    <div className='user-upload'>
      <div className='user-upload__preview'>
        {preview ? <img src={preview} alt="" />: <img src={avatar} alt=""/>}
      </div>

      <div className='user-upload__controllers'>
        <h2>User avatar</h2>
        <p>png, svg, jpg; 250x250 Min size/ 5 MB Max</p>
        <div className='user-upload__controllers-buttons'>
          <input className='input__file' type="file" name='file' onChange={onSelectFile} id='file'/>
          <label htmlFor="file" className="input__file-button">
            <span className="input__file-button-text"><CachedIcon color='primary' fontSize='large'/>Upload</span>
          </label>
          <span className='input__file-button' onClick={remove}><DeleteOutlineIcon color='secondary' fontSize='large'/>Remove</span>
        </div>
      </div>
    </div>
  )
}
export default UploadAvatar