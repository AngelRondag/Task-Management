import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProfile } from "../../redux/actions";
import { IoMdArrowDropleftCircle as ArrowLeft } from "react-icons/io";
import { IoMdArrowDroprightCircle as ArrowRight } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToBack } from "../../Components/ToBack";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { username, lastName, avatar, numAvatar } = useSelector(
    (state) => state.profile
  );
  const [profile, setProfile] = useState({
    numAvatar,
    avatar,
    username,
    lastName,
  });

  const handleName = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const changeImage = (operator) => {
    const sound = new Audio("/static/soundClick.wav");
    sound.play();

    if (operator === "+") {
      const num = profile.numAvatar + 1;
      setProfile({ ...profile, numAvatar: num });
    } else {
      const num = profile.numAvatar - 1;
      setProfile({ ...profile, numAvatar: num });
    }
  };

  const handleSubmit = () => {
    dispatch(
      createProfile({
        ...profile,
        avatar: `https://robohash.org/${profile.numAvatar}?size=100x100`,
      })
    );
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center">
      <ToBack path="/home" />
      <h2 className="mt-4 font-bold text-lg">Profile</h2>
      <div className="flex gap-3 mt-4">
        <button onClick={() => changeImage("-")}>
          <ArrowLeft size={25} color="#444" />
        </button>
        <figure className="w-28 flex justify-center items-center bg-gray-200 rounded-full">
          <img
            src={`https://robohash.org/${profile.numAvatar}?size=100x100`}
            alt="avatar"
          />
        </figure>
        <button onClick={() => changeImage("+")}>
          <ArrowRight size={25} color="#444" />
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <div>
          <input
            className="p-2.5 bg-white rounded-lg shadow-md text-gray-700 outline-cust-primary"
            value={profile.username}
            name="username"
            onChange={handleName}
            type="text"
            placeholder="Name"
          />
        </div>
        <input
          className="p-2.5 bg-white rounded-lg shadow-md text-gray-700 outline-cust-primary"
          value={profile.lastName}
          name="lastName"
          onChange={handleName}
          type="text"
          placeholder="Last name"
        />
        <button
          className="w-4/5 p-2 mx-auto mt-5 rounded-md bg-cust-primary text-white"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { Profile };
