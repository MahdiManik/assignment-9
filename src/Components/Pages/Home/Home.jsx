import Services from "../Services/Services";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="pt-8">
        <Header></Header>
        <div className="max-w-6xl mx-auto">
          <Services></Services>
        </div>
      </div>
    </>
  );
};

export default Home;
