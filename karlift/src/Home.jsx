import React from "react";

const Home = () => {
  return (
    //     <div className="flex flex-wrap h-screen">
    //     <div className="w-1/2 auto bg-kar-white">

    //       <h1>
    //         Lifestyle Coaching
    //       </h1>

    //       <p>
    //           The main goal of the serives I provide to my clients is to educate them
    //           on fitness related topics with the end goal being transforming there lifestyle to
    //           be more active and healthy
    //       </p>
    //       <br />
    //       <p>
    //       Wether your goals are to lose weight or build mucsle I can help you make lifestyle changes to
    // help you achive those goals!
    //       </p>

    //     </div>
    //     <div className="w-1/2 h-auto bg-kar-light-grey flex-column items-center justify-center">

    //       <div className="text-center text-lg font-serif font-bold px-10">
    //       <h1>Included in the service:</h1>

    //       <h2>Nutrition guidence</h2>

    //       <p className="font-normal text-base">I provide guidence on how to appoach nutrition and coming
    //         up with a plan that best suits your lifestyle
    //       </p>

    //       <h2>Custom Training/Cardio Programs</h2>
    //       <p className="font-normal text-base">
    //         Custom workout plans designed for you that align with your goals and fitness needs
    //       </p>
    //       <h2>Unlimited Q&A via email or text​</h2>
    //       <p className="font-normal text-base">
    //         You can reach out to me any time if you have any questions regarding fitness
    //         or anything else you might need!
    //       </p>
    //       <h2>Weekly Check-Ins and assessments</h2>
    //       <p className="font-normal text-base">
    //         Will have weekly check-ins to montior your progress and see
    //         how your doing physically and mentally and if we need to make any changes
    //       </p>
    //       <h2>Supplementation advice</h2>
    //       <p className="font-normal text-base">
    //        The first step to fitness is alawys getting nutirtion and training
    //        In check but we can discus supplments that might be useful
    //       </p>
    //       </div>

    //     </div>
    //     <div className="w-1/2 h-auto bg-kar-light-grey">
    //       <h1>Pricing</h1>
    //     </div>

    //     <div className="flex items-center justify-center w-1/2 h-auto bg-kar-white">
    //       <h1 className="text-center text-xl font-serif font-bold">if you wish to work with me to help you achive your goals head over to the
    //           Application form page and submit your application and I'll reach out to you!
    //       </h1>
    //     </div>
    //   </div>

    // TODO: make decision on design pattern weather it be 2x2 boes or 4 boxes stacked (4 seems like the better Idea for )
    //
    //

    <div className="flex flex-col h-screen text-center">
      {/* TOP BOX */}
      <div className="flex-1 bg-kar-white p-4">
        <h1 className="text-2xl md:text-3xl font-bold font-serif">
          Lifestyle Coaching
        </h1>
        <p className="w-full max-w-md mx-auto text-center my-4">
          The main goal of the services I provide to my clients is to educate
          them on fitness-related topics with the end goal being transforming
          their lifestyle to be more active and healthy.
        </p>
        <p className="w-full max-w-md mx-auto text-center my-4">
          Whether your goals are to lose weight or build muscle, I can help you
          make lifestyle changes to help you achieve those goals!
        </p>
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
            You can reach out to me any time if you have any questions regarding
            fitness or anything else you might need!
          </p>
          <h2 className="font-bold">Weekly Check-Ins and assessments</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            Will have weekly check-ins to montior your progress and see how your
            doing physically and mentally and if we need to make any changes
          </p>
          <h2 className="font-bold">Supplementation advice</h2>
          <p className="font-normal text-base w-full max-w-md mx-auto text-center my-4">
            The first step to fitness is alawys getting nutirtion and training
            In check but we can discus supplments that might be useful
          </p>
        </div>
      </div>
      {/* THIRD BOX */}
      <div className="flex-1 bg-kar-white p-0 font-serif  max-h-16">
        <h1 className="text-2xl md:text-3xl font-bold">Pricing</h1>
        <p className="font-sans">
          For my Coaching services I charge $75 monthly. <br />
        </p>
      </div>
      {/* FOURTH BOX */}
      <div className="flex-1 bg-kar-light-grey p-4 pb-14">
        <h1 className="text-xl md:text-2xl text-center font-serif font-bold lg:align-middle">
          If you wish to work with me to help you achieve your goals, head over
          to the Application form page and submit your application, and I'll
          reach out to you!
        </h1>
      </div>
    </div>
  );
};

export default Home;
