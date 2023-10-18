import { useLoaderData } from "react-router-dom";
import BackToHomePage from "./BackToHomePage";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photoUrl } =
    updateCoffee;
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photo.value;

    const updateData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };

    fetch(`http://localhost:3300/coffee/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Coffe Updated");
          // setCoffee(data);
        } else if (data.modifiedCount === 0) {
          alert("Nothing Modified");
        }
      });
  };

  return (
    <div className="mx-40 my-10">
      <div className="back">
        <BackToHomePage />
      </div>
      <div className="sect bg-[#F4F3F0] py-4 w-full mx-auto">
        <div className="content space-y-5">
          <h2 className="text-center text-3xl [text-shadow:_0_0_5px_rgb(0_0_0_/_50%)] my-5 font-h2 text-[30px]">
            {" "}
            Update Existing Coffee Details
          </h2>
          <p className="mx-40 text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateSubmit}>
          <div className="form  mx-10 space-y-4">
            <div className="frist flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
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
                  defaultValue={chef}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photoUrl}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Details</span>
                </label>
                <textarea
                  rows="3"
                  cols="50"
                  type="text"
                  name="details"
                  defaultValue={details}
                  className="input h-60 py-3 input-bordered w-full"
                />
              </div>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Update Coffee"
                className="rounded-lg font-h2 border-2-[#331A15] bg-[#D2B48C] w-full p-3 font-bold text-[18px] text-[#331A15] cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
