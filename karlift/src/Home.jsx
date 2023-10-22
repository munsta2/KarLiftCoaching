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
            I provide guidance on how to approach nutrition and come up with a
            plan that best suits your lifestyle.
          </p>
          <h2 className="font-bold">Nutrition guidence</h2>

          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            I provide guidence on how to appoach nutrition and coming up with a
            plan that best suits your lifestyle
          </p>

          <h2 className="font-bold">Custom Training/Cardio Programs</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            Custom workout plans designed for you that align with your goals and
            fitness needs
          </p>
          <h2 className="font-bold">Unlimited Q&A via email or text​</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            You can reach out to me at any time if you have any questions
            regarding fitness or anything else you might need!
          </p>
          <h2 className="font-bold">Weekly Check-Ins and assessments</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            We will have weekly check-ins to monitor your progress, see how you
            are doing physically and mentally, and see if we need to make any
            changes.
          </p>
          <h2 className="font-bold">Supplementation advice</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            The first step to fitness is always getting nutrition and training
            in check, but we can discuss supplements that might be useful.
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
