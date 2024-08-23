import IPC from "../../assets/IPC.png";
import Judgement from "../../assets/Judgment.png";
import { Card } from "./Card";

function Analyser() {
  return (
    <div className="flex lg:w-[px] lg:h-[500px] lg:flex-row flex-col lg:mx-auto bg-landing bg-cover bg-center bg-no-repeat justify-around items-center lg:space-x-1 lg:my-10 lg:space-y-0 space-y-10 my-6 w-[100%] h-[100%]">
      <div className="bg-black  ml-16 bg-opacity-30  max-w-7xl backdrop-blur-md  h-[420px] w-[320px] flex items-center justify-center rounded-lg ">
        <Card
          source={IPC}
          text="IPC Analyser"
          subtext="Analyse different sections of the Indian Penal Code and their implications."
        />
      </div>
      <div className="bg-black ml-16 bg-opacity-30 max-w-7xl backdrop-blur-md h-[420px] w-[320px] flex items-center justify-center rounded-lg">
        <Card
          source={Judgement}
          text="Judgement Analyser"
          subtext=" Examine court judgements to understand the application of legal sections and their interpretations."
        />
      </div>
    </div>
  );
}

export default Analyser;
