import React from "react";
import { StyleSheet } from "react-native";
import { Pagination as SCPagaination } from "react-native-snap-carousel";
import { COLOR } from "../../constants/theme";

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: COLOR.MAIN,
  },
  dot: {
    width: 8,
    hegiht: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: COLOR.WHITE,
  },
});

interface Props {
  length: number;
  index: number;
}

export default function Pagination(props: Props) {
  const { length, index } = props;
  return (
    <SCPagaination
      dotsLength={length}
      activeDotIndex={index}
      containerStyle={styles.pagination}
      dotStyle={styles.dot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
}
