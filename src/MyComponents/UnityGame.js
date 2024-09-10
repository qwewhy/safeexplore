import React, { useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityGame() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  const handleGameOver = useCallback((userName, score) => {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }, []);

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);

  function handleClickSpawnEnemies() {
    sendMessage("GameController", "SpawnEnemies", 100);
  }

  return (
    <div className="unity-game-container">
      {!isLoaded && (
        <div className="loading-overlay">
          <p>Loading Game... {Math.round(loadingProgression * 100)}%</p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "600px",
          visibility: isLoaded ? "visible" : "hidden",
        }}
      />
      <div className="game-controls">
        <button onClick={handleClickSpawnEnemies} disabled={!isLoaded}>
          Spawn Enemies
        </button>
      </div>
      {isGameOver && (
        <div className="game-over-message">
          <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
        </div>
      )}
    </div>
  );
}

export default UnityGame;
