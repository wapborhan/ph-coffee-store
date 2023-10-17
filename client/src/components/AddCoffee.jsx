import { useState } from "react";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  const [coffee, setCoffee] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photo.value;

    const inputData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    // console.log(inputData);

    fetch("http://localhost:3300/add-coffee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Coffe Added");
          setCoffee(data);
          form.reset();
        }
      });
  };

  return (
    <div className="container max-w-6xl mx-auto">
      <div className="back">
        <Link to="/">{"<-    "} Back to Home</Link>{" "}
      </div>
      <div className="sect bg-[#F4F3F0] py-4 w-full mx-auto">
        <div className="content space-y-5">
          <h2 className="text-center text-3xl"> Add Coffee</h2>
          <p className="mx-40 text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form  mx-40 my-10 space-y-4">
            <div className="frist flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Coffee Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter Coffee Chef"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="second flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter Coffee Supplier"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter Coffee Taste"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Coffee Category"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter Coffee Details"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Add Coffee"
                className="rounded-lg font-h2 border-2-[#331A15] bg-[#D2B48C] w-full p-3 font-bold text-[18px] text-[#331A15] cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
