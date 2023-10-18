import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SIgnUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, CreatedAT: createdAt };

        //
        fetch("http://localhost:3300/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.insertedId) {
              alert("Coffe Added");

              form.reset();
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };
  return (
    <div className="hero h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse  w-4/12">
        <div className="card p-5 flex-shrink-0 w-full shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center">Register now!</h1>

          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
