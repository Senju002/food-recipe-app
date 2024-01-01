import { useEffect, useState } from "react";

import Animated from "react-native-reanimated";
import { Image } from "expo-image";

// using asycn storage (does not work with android properly: disk space is low)
export const CachedImage = (props) => {
  const { uri } = props;

  return <Image source={uri} {...props} />;
};
