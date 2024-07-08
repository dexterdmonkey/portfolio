import React from "react";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const params = useParams<Record<string, string>>();
  const id = params.id;

  if (!id) {
    return <div>Error: ID not found</div>;
  }

  return (
    <div>
      <h1>User Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default UserPage;
