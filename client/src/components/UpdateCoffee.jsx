import { useLoaderData } from "react-router-dom";

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
    <div>
      <form onSubmit={handleUpdateSubmit}>
        <div className="form  mx-40 my-10 space-y-4">
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
                <span className="label-text font-bold"> Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
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
                defaultValue={photoUrl}
                className="input input-bordered w-full"
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
  );
};

export default UpdateCoffee;
