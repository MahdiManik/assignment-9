import eventOne from "../../../assets/event-1.jpg";
import eventTwo from "../../../assets/event-4.jpg";
const Hero = () => {
  return (
    <>
      {/* section one */}

      <div className="hero pt-32 bg-orange-50">
        <div className="hero-content flex-col lg:flex-row">
          <img src={eventOne} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl text-[#341f97] font-bold">
              Top Academic Events Around the World in 2023
            </h1>
            <p className="py-6 text-[#341f97]">
              Learning is a fun process but not all of us may enjoy it. Sure,
              learning can be done in many ways. Some people prefer learning
              through theory and others, through practice. Whatever method you
              choose to learn from, attending events, conferences and seminars
              will always work as an added advantage. The top educational events
              in the world which can be categories into: conferences, symposiums
              and summits are a great way to break monotony and learn something
              new.
              <br /> <br /> Symposium – Symposiums are events where experts in
              the field give presentations to an audience. Due to the pandemic,
            </p>
            <button className="btn btn-primary">Join Us</button>
          </div>
        </div>
      </div>

      {/* section two */}

      <div className="hero pt-32  bg-orange-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={eventTwo} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold text-[#341f97]">
              What Are The Types Of Educational Events?
            </h1>
            <p className="py-6 text-[#341f97]">
              Conferences – Conferences are large events that bring together
              education professionals in the field of study. Activities at these
              events include speakers, workshops, and networking sessions. The
              people attending conferences attend this event with shared
              interests and purpose. <br /> <br /> Summits – Summits are often
              meetings with high-level professionals to discuss the newest
              findings in a field. Some summits function just like conferences
              but they are actually quite different from each other. A summit
              only includes delegates, representatives and members of a board or
              committee.
            </p>
            <button className="btn btn-primary">Join Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
