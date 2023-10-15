import { useSelector, useDispatch } from "react-redux";
import { userData, getUserAsync } from "../features/auth/authSlice";
import { useEffect } from "react";

function Temp() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.userList);

  const handleClick = () => {
    console.log(users);
    // console.log("clicked");
    dispatch(getUserAsync());
    // console.log(users);
  };

  useEffect(() => {}, [users]);
  return (
    <>
      <h1>Temp</h1>
      <button onClick={handleClick}>Add</button>
      <div>
        {/* {console.log("users:",users)} */}
        {users.map((user, i) => (
          <ul>
            <li key={i}>{JSON.stringify(user)}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Temp;
