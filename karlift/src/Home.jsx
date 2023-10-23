import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col h-screen text-center">
      {/* TOP BOX */}
      <div className="flex-1 bg-kar-white p-4">
        <h1 className="text-2xl md:text-3xl font-bold font-serif">
          Lifestyle Coaching
        </h1>
        <p className="w-full max-w-md mx-auto text-center my-4">
          Our mission is to empower our clients with expert fitness guidance,
          fostering lasting, healthy, and active lifestyle transformations.
          Whether your aim is weight loss or muscle gain, we're here to guide
          you toward your goals.
        </p>
        {/* <p className="w-full max-w-md mx-auto text-center my-4">
          Whether your goals are to lose weight or build muscle, I can help you
          make lifestyle changes to help you achieve those goals!
        </p> */}
      </div>
      {/* SECOND BOX */}
      <div className="flex-1 bg-kar-light-grey p-4 ">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold font-serif">
            Included in the service:
          </h1>
          <h2 className="font-bold">Nutrition guidance</h2>
          <p className="w-full max-w-md mx-auto text-center my-4">
            I work closely with you to develop a personalized nutrition plan
            that suits your lifestyle and dietary preferences. Together, we'll
            make informed choices and create sustainable habits to support your
            fitness journey.
          </p>

          <h2 className="font-bold">Custom Training/Cardio Programs</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            Experience the benefits of personalized fitness with workout plans
            tailored to your unique goals and fitness needs. Whether you want to
            build muscle, lose weight, or improve your overall fitness, I've got
            a plan just for you.
          </p>
          <h2 className="font-bold">Unlimited Q&A via email or text​</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            Your success is my top priority. You can reach out to me at any time
            with your fitness-related questions or any other support you might
            need. I'm here to provide guidance and assistance whenever you
            require it.
          </p>
          <h2 className="font-bold">Weekly Check-Ins and assessments</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            To keep you on the path to success, I conduct weekly check-ins.
            These assessments help me monitor your progress, both physically and
            mentally, and enable us to make any necessary adjustments to your
            program. Your well-being is my focus.
          </p>
          <h2 className="font-bold">Supplementation advice</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            In addition to nutrition and training, I offer advice on
            supplementation. We can discuss which supplements, if any, may be
            beneficial for your specific goals and how to incorporate them
            effectively into your routine.
          </p>
        </div>
      </div>
      {/* THIRD BOX */}
      <div className="flex-1 bg-kar-white p-0 font-serif  max-h-16">
        <h1 className="text-2xl md:text-3xl font-bold">Pricing</h1>
        <p className="font-sans">
          For my coaching services, I charge $75 monthly. <br />
        </p>
      </div>
      {/* FOURTH BOX */}
      <div className="flex-1 bg-kar-light-grey p-4 pb-14">
        <h1 className="text-xl md:text-2xl text-center font-serif font-bold lg:align-middle">
          If you wish to work with me to help you achieve your goals, head over
          to the application form page and submit your application, and I'll
          reach out to you!
        </h1>
      </div>
    </div>
  );
};

export default Home;
