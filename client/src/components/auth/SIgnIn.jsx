const SIgnIn = () => {
  return (
    <div className="hero h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse  w-4/12">
        <div className="card p-5 flex-shrink-0 w-full shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
