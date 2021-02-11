import {
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import theme from "./Theme";
import constants from "./Constants";

const breakpoint = constants.breakpoint;

const styles = StyleSheet.create({
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: 'wrap',
  },
  endRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  formulaColumn: {
    alignSelf: "center",
  },
  spaceView: {
    height: wp2dp('2%'),
  },
  formulaLine: {
    fontSize: wp2dp('100%') < breakpoint? wp2dp('5%'): wp2dp('2.5%'),
    letterSpacing: wp2dp('0.6%'),
    textAlign: "left",
    justifyContent: "flex-start",
  },
  formulaBox: {
    width: wp2dp('100%') < breakpoint? wp2dp('90%'): wp2dp('75%'),
  },
  verticalCenterRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: 'wrap',
  },
  commonPadding: {
    margin: wp2dp('1%'),
  },
  commonText: {
    fontSize: wp2dp('100%') < breakpoint? wp2dp('4%'): wp2dp('2%'),
    margin: wp2dp('0.5%'),
  },
  okButton: {
    height: wp2dp('100%') < breakpoint? wp2dp('8%'): wp2dp('4%'),
    width: wp2dp('100%') < breakpoint? wp2dp('18%'): wp2dp('9%'),
    margin: wp2dp('0.5%'),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.blue,
    borderRadius: wp2dp('100%') < breakpoint? wp2dp('2%'): wp2dp('1%'),
  },
  okButtonText: {
    fontSize: wp2dp('100%') < breakpoint? wp2dp('3%'): wp2dp('1.5%'),
    color: theme.colors.myWhite,
  },
  resetArrow: {
    fontSize: wp2dp('100%') < breakpoint? wp2dp('12%'): wp2dp('6%'),
  },
});

export default styles;