import './users.scss'
import {useSelector} from "react-redux";
import UserCard from "../../components/UserCard/UserCard";

const Users = () => {
  const userRoot = useSelector(state => state.user)
  const users = useSelector(state => state.users.filter((user) => user.username != userRoot.username))
  return (
    <div className='users'>
      <h1>Users</h1>
      <div className={'users__wrapper'}>
        {users.map((user, index) => {
          return (
            <UserCard
              index={index}
              username={user.username}
              firstName={user.firstName}
              lastName={user.lastName}
              position={user.position}
              logo={user.logo}
            />
          )
        })}
      </div>
    </div>
)
}
export default Users