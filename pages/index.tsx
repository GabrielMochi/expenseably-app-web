import Dashboard from "components/Dashboard";
import type { NextPage } from "next";
import Default from "templates/Default";

const Home: NextPage = () => {
  return (
    <Default>
      <Dashboard />
    </Default>
  );
};

export default Home;
