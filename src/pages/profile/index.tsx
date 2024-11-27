import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data }: any = useSession();
  return (
    <>
      <div>Profile Page</div>
      <h1>{data?.user?.name}</h1>
      <p>{data?.user?.email}</p>
    </>
  );
};
export default ProfilePage;
