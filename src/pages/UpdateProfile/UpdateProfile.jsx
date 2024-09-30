/** @format */
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateProfile(user, {
      displayName: data.displayName,
      photoURL: data.photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: data.displayName, photoURL: data.photoURL });
        navigate('/updateProfile')
        Swal.fire({
          title: "Good job!",
          text: "Successfully Changed Name and Photo URL",
          icon: "success",
      });
      })
      .catch(() => {
      
      });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mt-8">
          <span className="text-orange-900">{user.displayName}</span> Profile
        </h1>
        <Helmet>
          <title>Home|Update Profile</title>
        </Helmet>
        <div className="card bg-base-100 flex md:flex-col lg:flex-row gap-4 items-center justify-center">
          <div className="px-10 pt-10 w-80">
            <img src={user && user.photoURL} alt="profile picture" className="rounded-full w-full" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Name: <span>{user.displayName}</span>
            </h2>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" w-1/2 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id=""
              defaultValue={user && user.displayName}
              {...register("displayName", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <label htmlFor="photo">Photo URL:</label>
            <input
              type="text"
              name="photo"
              id=""
              defaultValue={user && user.photoURL}
              {...register("photoURL", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <input type="submit" value="Save Change" className="btn btn-secondary w-full" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
