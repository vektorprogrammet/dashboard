import { Button } from "./Tic_button";

interface StartGameProps {
  onStart: () => void;
}

export default function StartGame({ onStart }: StartGameProps) {
  return (
    <div className="flex flex-row  items-center justify-center w-90">
      <div>
        <img
          src="/Elephant.png"
          alt="elephant"
          className="md:h-10 h-20 lg:h-20"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/Lemur.png" alt="lemur" className="md:h-10 h-20 lg:h-20" />

        <div className="border-4 border-[#abe4f7] md:px-3">
          <h1 className="text-center font-bold text-3xl md:text-4xl md:leading-[3rem]">
            <span className="font-audiowide text-blue-700 drop-shadow-md">
              TIC
            </span>{" "}
            <br />
            <span className="text-yellow-400 drop-shadow-md font-audiowide">
              TAC
            </span>{" "}
            <br />
            <span className="text-pink-500 drop-shadow-md font-audiowide">
              TOE
            </span>
          </h1>
        </div>

        <Button
          onClick={onStart}
          variant="outline"
          className="font-audiowide mt-6 md:mt-3 bg-[#abe4f7]  text-black"
        >
          START GAME
        </Button>
      </div>
      <div>
        <img src="/Bjorn.png" alt="tor" className="md:h-10 h-20 lg:h-20" />
      </div>
    </div>
  );
}
