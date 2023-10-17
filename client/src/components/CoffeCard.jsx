import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeCard = ({ coffe, setCoffes, coffes }) => {
  const { _id, name, chef, supplier, photoUrl } = coffe;

  const handleView = () => {};
  const handleEdit = () => {};
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3300/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = coffes.filter((item) => item._id !== _id);
              setCoffes(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Movie" className="w-40" />
      </figure>
      <div className="card-body flex flex-row">
        <div className="content">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn btn-active" onClick={handleView}>
              View
            </button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn" onClick={handleEdit}>
                Edit
              </button>
            </Link>
            <button className="btn" onClick={() => handleDelete(_id)}>
              Delate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
