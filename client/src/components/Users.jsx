import { useQueries, useQuery } from "react-query";

const Users = () => {
  const { isLoading, isPending, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3300/users");
      return res.json();
    },
  });
  console.log(data);
  if (isLoading) {
    return <li> loading</li>;
  }
  if (isPending) {
    return <li> Wait</li>;
  }
  return (
    <div>
      {data?.map((user, idx) => {
        return <li key={idx}> {user?.email}</li>;
      })}
    </div>
  );
};

export default Users;
