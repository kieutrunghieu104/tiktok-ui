import { Navigate, useParams } from "react-router-dom";

function Profile() {
  const { nickname } = useParams();
  console.log(nickname)

  if (!nickname.startsWith("@")) {
    return <Navigate to={`/${nickname}`} replace />
  }
  return (
    <h1>Profile page</h1>
  );
}

export default Profile;