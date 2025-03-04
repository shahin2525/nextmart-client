import { currentUser } from "@/services/auth/registration";

const HomePage = async () => {
  const user = await currentUser();
  console.log(user);
  return (
    <div>
      <h1>welcome to common layout</h1>
    </div>
  );
};

export default HomePage;
