import { useEffect, useState } from "react";
import { Button } from "./Tic_button";

interface ChoosePlayerProps {
  onSelectPlayers: (player1: string, player2: string) => void;
}

export default function Choose_player({ onSelectPlayers }: ChoosePlayerProps) {
  const characters = ["Bjorn", "Elephant", "Lemur"];

  const [player1, setPlayer1] = useState<string | null>(null);
  const [player2, setPlayer2] = useState<string | null>(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (player1 && player2 && player1 !== player2) {
      setError(""); // Clear error if both players are unique
    }
  }, [player1, player2]);

  return (
    <div className="flex flex-col items-center w-85 h-70">
      <div className="">
        <h1 className="font-audiowide text-4xl text-center mt-6 mb-12 filter: tracking-wide drop-shadow-xl">
          Choose Your Player
        </h1>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-30 gap-5 mt-5 px-8 w-full max-w-md mx-auto">
        {/* Player 1 Dropdown */}
        <div className="relative w-40">
          <Button
            onClick={() => setIsOpen1(!isOpen1)}
            variant="outline"
            className="bg-[#abe4f7] text-black font-audiowide rounded w-full flex items-center justify-center"
          >
            {player1 ? (
              <img
                src={`/${player1}.png`}
                alt={player1}
                className="h-12 w-12 object-contain"
              />
            ) : (
              "Player 1"
            )}
          </Button>

          {isOpen1 && (
            <div className="absolute top-full mt-2 w-full bg-white border rounded shadow-md max-h-30 overflow-y-auto z-10">
              {characters.map((character) => (
                <button
                  type="button"
                  key={character}
                  onClick={() => {
                    if (character === player2) {
                      setError("Players cannot be the same character");
                    } else {
                      setPlayer1(character);
                      setIsOpen1(false);
                      setError("");
                    }
                  }}
                  className="block w-full text-black hover:bg-blue-200 mb-2 last:mb-0"
                >
                  <img
                    src={`/${character}.png`}
                    alt={character}
                    className="h-20 mx-auto"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Player 2 Dropdown */}
        <div className="relative w-40">
          <Button
            onClick={() => setIsOpen2(!isOpen2)}
            variant="outline"
            className="bg-[#abe4f7] text-black font-audiowide rounded w-full flex items-center justify-center"
          >
            {player2 ? (
              <img
                src={`/${player2}.png`}
                alt={player2}
                className="h-12 w-12 object-contain"
              />
            ) : (
              "Player 2"
            )}
          </Button>

          {isOpen2 && (
            <div className="absolute top-full mt-2 w-full bg-white border rounded shadow-md max-h-30 overflow-y-auto z-10">
              {characters.map((character) => (
                <button
                  key={character}
                  onClick={() => {
                    if (character === player1) {
                      setError("Players cannot be the same character");
                    } else {
                      setPlayer2(character);
                      setIsOpen2(false);
                      setError("");
                    }
                  }}
                  className="block w-full text-black hover:bg-blue-200 mb-2 last:mb-0"
                >
                  <img
                    src={`/${character}.png`}
                    alt={character}
                    className="h-20 mx-auto"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Start Game Button */}
      {player1 && player2 && !error && (
        <Button
          onClick={() => onSelectPlayers(player1, player2)}
          variant="outline"
          className="mt-8 bg-[#abe4f7] text-black font-audiowide px-8 py-2 rounded-lg shadow-lg"
        >
          Begin Game
        </Button>
      )}
    </div>
  );
}
