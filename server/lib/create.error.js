module.exports = (message, errorCode) =>{
  if(!message)
    message = "Something went wrong"
  const error = new Error(message)
  error.status = errorCode || 500
  return error
}