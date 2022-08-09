import { Box, Text } from "@react-three/drei";
import { ARCanvas, DefaultXRControllers } from "@react-three/xr";
import React, { Suspense } from "react";

export function ARView() {
  return (
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, -4]}>
        <Suspense fallback={null}>
          <Text
            position={[0, 0, 0.55]}
            fontSize={0.05}
            color="#f00"
            anchorX="center"
            anchorY="middle"
          >
            Hello world!
          </Text>
        </Suspense>
      </Box>
      <DefaultXRControllers />
    </ARCanvas>
  );
}

function App() {
  return (
    <>
      <p>Hi!</p>
      <ARView />
    </>
  );
}

export default App;
