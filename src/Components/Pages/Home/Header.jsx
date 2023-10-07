const Header = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/mXXzDWq/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-sky-300 bg-opacity-80 rounded-lg"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-orange-600">
            Personalized Study Abroad Counselling <br /> For Students
          </h1>
          <p className="mb-5 text-orange-600 text-lg font-semibold">
            How does one make education and learning a fun practice? The answer
            is through events, summits, and conferences. <br /> While these
            events may seem like a break from the monotonous study patterns in
            your college, <br /> there are a number of key takeaways that you as
            a student
          </p>
          <div className="flex justify-center items-center">
            <input
              className="w-3/6 input input-bordered"
              type="search"
              name="text"
              id="search"
              placeholder="Search Categories
			  "
            />
            <button className="btn btn-primary border-0 bg-orange-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;