import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { Popup } from "semantic-ui-react";

const style = {
  opacity: 1,
  padding: "2em",
  color: "white",
  borderRadius: 10,
  fontFamily: "calibri",
  width: "300px",
  whiteSpace: "normal",
  wordWrap: "break-word",
  zIndex: 1,
  textAlign: "center",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export function Experience() {
  return (
    <div className="overflow-auto">
      <FancyText
        gradient={{ from: "#FF6F61", to: "#6B5B95", type: "linear" }}
        animateTo={{ from: "#6B5B95", to: "#FF6F61" }}
        animateDuration={2000}
      >
        <h1 className="text-center text-xs font-bold p-2 ml-1 md:ml-55 md:text-sm md:text-center">
          The only source of knowledge is experience. {"–"} Albert Einstein
        </h1>
      </FancyText>
      <div>
        <p className="text-center text-sm p-2 font-bold md:text-xl md:p-1 md:max-w-[70%]">
          Collaborated with incredible organizations on exciting projects,
          growing professionally along the way. Hover over the icons to explore
          my roles and responsibilities!
        </p>
      </div>
      <div>
        <div className="md:relative md:overflow-auto">
          {/* Vertical Line */}
          <div className="md:absolute md:top-0 md:bottom-0 md:left-1/3 md:w-[5px] md:bg-gray-400 md:z-0"></div>
          <div className="flex flex-col items-center">
            {/* Experience Entry 1 */}
            <div className="md:relative md:mt-10 md:-ml-105">
              {/* Horizontal Line */}
              <div className="md:absolute md:left-1/2 md:w-14 md:h-[2px] md:bg-gray-400 md:top-1/2 md:transform md:-translate-y-1/2"></div>
              <div className="bg-[#5c54a0] rounded-lg p-2 mx-auto m-2 ml-2 mr-2 text-white md:w-90 md:h-30 md:ml-120">
                <div className="text-center">
                  <Popup
                    className="text-xs ml-2 mr-2 bg-[#523e71]"
                    content={
                      <p>
                        1 - Optimized Auto Insurance processes.
                        <br /> 2 - Automated feedback, saving{" "}
                        <b>
                          <i>₹25 lakhs</i>
                        </b>{" "}
                        annually.
                        <br /> 3 - Built a Quality Dashboard, reducing{" "}
                        <b>
                          <i>4 MIS</i>
                        </b>{" "}
                        headcount.
                        <br /> 4 - Created a database system,{" "}
                        <b>eliminating tech dependency</b>.<br /> 5 -
                        Centralized processes via a <b>Google Site</b>,
                        improving collaboration.
                        <br /> 6 - Partnered with industry experts, including{" "}
                        <b>Google</b>, to drive innovation.
                      </p>
                    }
                    style={style}
                    offset={[0, 5]}
                    position="topleft"
                    trigger={
                      <img
                        className="w-40 h-20 inline-block md:w-20 md:h-10"
                        src="/Acko.png"
                        alt="Acko"
                      />
                    }
                  />
                </div>
                <div className="flex p-2 mx-auto gap-10 md:gap-15">
                  <p className="text-sm ml-3 font-bold max-w-[40%]">
                    Assistant Manager Process Excellence
                  </p>
                  <p className="text-sm font-bold mt-3">2024-To Present</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Experience Entry 1 */}
            <div className="relative md:-mt-5 md:-ml-220">
              {/* Horizontal Line */}
              <div className="absolute left-1/2 w-13.5 md:ml-45 h-[2px] md:bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
              <div className="bg-[#fb5304] rounded-lg p-2 mx-auto m-2 ml-2 mr-2 text-white md:w-90 md:h-30">
                <div className="text-center">
                  <Popup
                    className="text-xs ml-2 mr-2 bg-[#fc8019]"
                    content={
                      <p>
                        1 - Created SOPs/PRDs/BRDs for the Food Charter,
                        ensuring seamless execution.
                        <br /> 2 - Enhanced internal CRM UI/UX, improving
                        efficiency.
                        <br /> 3 - Managed projects saving{" "}
                        <b>
                          <i>₹2 crores</i>
                        </b>{" "}
                        annually.
                        <br /> 4 - Automated workflows, reducing headcount by{" "}
                        <b>
                          <i>50 PP</i>
                        </b>
                        .<br />5 - Executed projects end-to-end, driving cost
                        and time savings. 6 - Won <b>3 SwiggStar Awards</b> in{" "}
                        <b>4 years</b>.
                        <br />7 - Led 70 Escalation Agents, cutting escalations
                        by <b>25%</b>.
                        <br />
                      </p>
                    }
                    style={style}
                    offset={[0, 5]}
                    position="center"
                    trigger={
                      <img
                        className="w-40 h-20 inline-block md:w-20 md:h-10"
                        src="/swiggy.jpg"
                        alt="Acko"
                      />
                    }
                  />
                </div>
                <div className="flex p-2 mx-auto gap-10 md:gap-15">
                  <p className="text-sm ml-3 font-bold max-w-[40%]">
                    Assistant Manager Process Excellence
                  </p>
                  <p className="text-sm font-bold mt-3">2022-To 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Experience Entry 1 */}
            <div className="relative md:-mt-5 md:-ml-105">
              {/* Horizontal Line */}
              <div className="absolute left-1/2 w-14 h-[2px] md:bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
              <div className="bg-[#fb5304] rounded-lg p-2 mx-auto m-2 ml-2 mr-2 text-white md:w-90 md:h-30 md:ml-120 md:-mt-4">
                <div className="text-center">
                  <Popup
                    className="text-xs ml-2 mr-2 bg-[#fc8019]"
                    content={
                      <p>
                        {" "}
                        1 - Managed a Team of 8 Process Excellence Analyst.
                        <br />
                        2 - Implemented control flow structure in Process Design
                        <br />3 - Created PRDs and BRDs for Product and Process
                        related suggestions.
                        <br></br>
                      </p>
                    }
                    style={style}
                    position="top center"
                    trigger={
                      <img
                        className="w-40 h-20 inline-block md:w-20 md:h-10"
                        src="/swiggy.jpg"
                        alt="Acko"
                      />
                    }
                  />
                </div>
                <div className="flex p-2 mx-auto gap-10 md:gap-15">
                  <p className="text-sm ml-3 font-bold max-w-[40%]">
                    Team Lead Process Excellence
                  </p>
                  <p className="text-sm font-bold mt-3">2021-To 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Experience Entry 1 */}
            <div className="relative md:-mt-5 md:-ml-220">
              {/* Horizontal Line */}
              <div className="absolute left-1/2 w-13.5 md:ml-45 h-[2px] md:bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
              <div className="bg-[#fb5304] rounded-lg p-2 mx-auto m-2 ml-2 mr-2 text-white md:w-90 md:h-30 md:text-white md:-mt-4">
                <div className="text-center">
                  <Popup
                    className="text-xs ml-2 mr-2 bg-[#fc8019]"
                    content={
                      <p>
                        {" "}
                        1 - Spearheaded calibration sessions for the TECHM
                        partner center, ensuring alignment and precision across
                        teams.
                        <br />
                        2 - Achieved a remarkable 25% boost in quality scores
                        through strategic process improvements and data-driven
                        insights.
                        <br />3 - Designed comprehensive SOPs and took the helm
                        of the Priority Queue pilot program, driving efficiency
                        and innovation.
                        <br></br>
                      </p>
                    }
                    style={style}
                    position="top center"
                    trigger={
                      <img
                        className="w-40 h-20 inline-block md:w-20 md:h-10"
                        src="/swiggy.jpg"
                        alt="Acko"
                      />
                    }
                  />
                </div>
                <div className="flex p-2 mx-auto gap-10">
                  <p className="text-sm ml-3 font-bold max-w-[40%]">
                    Senior Quality Analyst
                  </p>
                  <p className="text-sm font-bold mt-3">2019-To 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Experience Entry 1 */}
            <div className="relative md:-mt-5 md:-ml-105">
              {/* Horizontal Line */}
              <div className="absolute left-1/2 w-14 h-[2px] md:bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
              <div className="bg-[#082b55] rounded-lg p-2 mx-auto m-2 ml-2 mr-2 text-white md:w-90 md:h-30 md:text-black md:ml-120 md:-mt-4">
                <div className="text-center">
                  <Popup
                    className="text-xs ml-2 mr-2 bg-[#022d59]"
                    content={
                      <p>
                        1 - Headed the Compliance team for Energy HelpLine
                        <br />2 - Conducted Calibration session for UK Energy
                        Partners <br />
                        3 - Created Quality team playbook for Energy Helpline
                        <br />
                      </p>
                    }
                    style={style}
                    position="top center"
                    trigger={
                      <img
                        className="w-30 h-20 inline-block md:w-20 md:h-10"
                        src="/sbs.png"
                        alt="Acko"
                      />
                    }
                  />
                </div>
                <div className="flex p-2 mx-auto gap-10">
                  <p className="text-sm ml-3 font-bold max-w-[40%] md:text-white">
                    Senior Quality Analyst
                  </p>
                  <p className="text-sm font-bold mt-3 md:text-white">
                    2019-To 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
