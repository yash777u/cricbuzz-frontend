// eslint-disable-next-line no-unused-vars
import React from "react";

const PlayerComponent = () => {
  
  
  return (
    <div className="container mt-5">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-3">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://static.vecteezy.com/system/resources/previews/038/258/524/non_2x/cricket-player-logo-design-illustration-vector.jpg"
            alt="Cricket logo"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Virat Kohli
          </h5>

          <p className="text-center"> Run Scored : 540 <br/> Wickets : 50 <br/> 4's : 50 <br/> 6's : 10 </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerComponent;
