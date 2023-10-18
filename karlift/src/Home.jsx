import React from 'react';

const Home = () => {
  return (


    <div class="flex flex-wrap h-screen">
    <div class="w-1/2 h-1/2 bg-kar-white">

      <h1>
        Lifestyle Coaching
      </h1>
      
      <p> 
          The main goal of the serives I provide to my clients is to educate them 
          on fitness related topics with the end goal being transforming there lifestyle to
          be more active and healthy
      </p>

    </div>
    <div class="w-1/2 h-1/2 bg-kar-light-grey flex-column items-center justify-center">
      
      <div className="text-center text-lg font-serif font-bold px-10">
      <h1>Included in the service:</h1>

      <h2>Nutrition guidence</h2> 

      <p className="font-normal text-base">I provide guidence on how to appoach nutrition and coming 
        up with a plan that best suits your lifestyle
      </p>

      <h2>Custom Training/Cardio Programs</h2>
      <p className="font-normal text-base">
        Custom workout plans designed for you that align with your goals and fitness needs
      </p>
      <h2>Unlimited Q&A via email or text​</h2>
      <p className="font-normal text-base">
        You can reach out to me any time if you have any questions regarding fitness 
        or anything else you might need!
      </p>
      <h2>Weekly Check-Ins and assessments</h2>
      <p className="font-normal text-base">
        Will have weekly check-ins to montior your progress and see 
        how your doing physically and mentally and if we need to make any changes
      </p>
      <h2>Supplementation advice</h2>
      <p className="font-normal text-base">
       The first step to fitness is alawys getting nutirtion and training 
       In check but we can discus supplments that might be useful
      </p>
      </div>

    </div>
    <div class="w-1/2 h-1/2 bg-kar-light-grey">
      <h1>Pricing</h1>
    </div>

    <div class="flex items-center justify-center w-1/2 h-1/2 bg-kar-white">
      <h1 className="text-center text-xl font-serif font-bold">if you wish to work with me to help you achive your goals head over to the
          Application form page and submit your application and I'll reach out to you!
      </h1>
    </div>
  </div>
  


  

  );
};

export default Home;