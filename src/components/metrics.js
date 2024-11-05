import React from "react";

const Metrics = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal" style={{color: "#996830"}}>
                100%
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                Zadowolonych Klientów <br></br>Zaufało naszym usługom
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal" style={{color: "#996830"}}>
                1500+
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                Personalizowanych Projektów <br></br>Realizowanych na zamówienie
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal" style={{color: "#996830"}}>
                15 lat
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                Doświadczenia w branży <br></br>Precyzyjne grawerowanie
              </p>
            </div>
          </div>
          <div className="md:mt-20 md:pb-12 mt-12 pb-12">
            <hr className="text-neutral-300"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Metrics;
