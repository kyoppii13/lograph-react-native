import React, { useCallback, useContext, useRef, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { CarouselStatic } from "react-native-snap-carousel";
import { Carousel } from "../../organisms";
import { Pagination } from "../../atoms";
import { COLOR } from "../../../constants/theme";
import { Context, Status } from "../../../contexts/ui";

const padding = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding,
    backgroundColor: COLOR.MAIN,
  },
});

interface Data {
  text: string;
}

const renderData = [
  {
    text: "first page",
  },
  {
    text: "second page",
  },
  {
    text: "third page",
  },
];

export default function Initial() {
  const [activeSlide, changeSlide] = useState(0);
  const { setApplicationState } = useContext(Context);

  const carouselRef = useRef(null);
  const onEnd = useCallback(() => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  const onNext = useCallback(() => {
    const nextIndex =
      activeSlide === renderData.length - 1 ? activeSlide : 1 + activeSlide;
    setTimeout(() => {
      if (!carouselRef || !carouselRef.current) {
        return;
      }
      const carousel = (carouselRef.current as any) as CarouselStatic<Data>;
      carousel.snapToItem(nextIndex);
    }, 250);
    changeSlide(nextIndex);
  }, [activeSlide]);
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={renderData}
        onEnd={onEnd}
        onNext={onNext}
        carouselRef={carouselRef}
        onSnapToItem={changeSlide}
      />
      <Pagination length={renderData.length} index={activeSlide} />
    </SafeAreaView>
  );
}
