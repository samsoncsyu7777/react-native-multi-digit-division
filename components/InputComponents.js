import React from "react";

import {
  View,
  Text,
  StyleSheet,  
} from "react-native";
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import theme from "../Theme";
import constants from "../Constants";
const inputDimension = 4;

const breakpoint = constants.breakpoint;
const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    width: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 + '%') : wp2dp(inputDimension + '%'),
    height: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 + '%') : wp2dp(inputDimension + '%'),
    minWidth: 0,
    borderWidth: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.01 + '%') : wp2dp(inputDimension * 0.01 + '%'),
    borderRadius: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.3 + '%') : wp2dp(inputDimension * 0.3 + '%'),
  },
  inputText: {
    fontSize: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.8 + '%') : wp2dp(inputDimension * 0.8 + '%'),
  },
  textCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  superscript: {
    fontSize: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.3 + '%') : wp2dp(inputDimension * 0.3 + '%'),
    height: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.9 + '%') : wp2dp(inputDimension * 0.9 + '%'),
    lineHeight: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.35 + '%') : wp2dp(inputDimension * 0.25 + '%'),
    color: theme.colors.red,
  },
  row: {
    flexDirection: "row",
  },
  oneDigitLength: {
    borderBottomWidth: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.06 + '%') : wp2dp(inputDimension * 0.06 + '%'),
    width: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 + '%') : wp2dp(inputDimension + '%'),
    height: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.06 + '%') : wp2dp(inputDimension * 0.06 + '%'),
  },
  oneDigitHeight: {
    borderRightWidth: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.06 + '%') : wp2dp(inputDimension * 0.06 + '%'),
    width: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 * 0.06 + '%') : wp2dp(inputDimension * 0.06 + '%'),
    height: wp2dp('100%') < breakpoint ? wp2dp(inputDimension * 2 + '%') : wp2dp(inputDimension + '%'),
  },
});

export const MyInput = ({ colorStage, value, superValue }) => {

  var bgColor;
  var textColor;
  var opacityValue;
  switch (colorStage) {
    case "focused": {
      bgColor = theme.colors.myPink;
      textColor = theme.colors.myRed;
      opacityValue = 1;
      break;
    };
    case "highlighted": {
      bgColor = theme.colors.myYellow;
      textColor = theme.colors.myBlue;
      opacityValue = 1;
      break;
    }
    case "invisible": {
      bgColor = theme.colors.myWhite;
      textColor = theme.colors.myBlue;
      opacityValue = 0;
      break;
    }
    default: {
      bgColor = theme.colors.myWhite;
      textColor = theme.colors.myBlue;
      opacityValue = 1;
      break;
    }
  }

  return (
    <View
      style={[styles.inputBox, styles.textCenter, { backgroundColor: bgColor, color: textColor, opacity: opacityValue }]}
    >
      <Text style={styles.superscript}>
        {superValue == 0? "": superValue}
      </Text>
      <Text style={styles.inputText}>
        {value}
      </Text>
    </View>
  )
}

export const HorizontalLine = ({ lengthArray }) => {

  return (
    <View style={styles.row}>
      {
        lengthArray.map((item, index) => {
          return <View
            key={index}
            style={styles.oneDigitLength}
          />
        })
      }
    </View>
  )
}

export const VerticalLine = () => {

  return (
    <View
      style={styles.oneDigitHeight}
    />
  )
}