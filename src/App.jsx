import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { DressSelector } from "./components/DressSelector";
import { useState } from "react";

function App() {
  const [currentDress, setCurrentDress] = useState("default");
  const [currentGender, setCurrentGender] = useState("male");

  const handleDressChange = (dress) => {
    setCurrentDress(dress);
  };

  const handleGenderChange = (gender) => {
    setCurrentGender(gender);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "#f0f0f0" }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2, 1, 4],
        }}
      >
        <color attach="background" args={["#f0f0f0"]} />
        <Experience dress={currentDress} gender={currentGender} />
      </Canvas>
      <DressSelector
        onDressChange={handleDressChange}
        onGenderChange={handleGenderChange}
        currentDress={currentDress}
        currentGender={currentGender}
      />
    </div>
  );
}

export default App;
