import React from "react";
import ReactLottie from "lottie-react";

interface LottieProps {
   animationDataFile: Object;
}

export default function Lottie({ animationDataFile }: LottieProps) {
   return <ReactLottie animationData={animationDataFile} loop={true} />;
}
