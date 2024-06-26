import { StyleSheet } from "react-native";

const COLORS = {
  backgroundMint: "#C7EAE4",
  textBoxesGreen: "#A7E88D",
  logoByzantium: "#FCBCB8",
  outlinesMelon: "#EFA7A7",
  buttonsYellow: "#FFD972",
  textGrey: "#646464",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundMint,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.textGrey,
    fontFamily: "IrishGrover-Regular",
  },
  textBox: {
    padding: 15,
    backgroundColor: COLORS.textBoxesGreen,
    marginBottom: 25,
    marginHorizontal: 25,
    shadowColor: COLORS.textGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: "90%",
    height: "100%",
    marginVertical: 25,
    borderColor: COLORS.outlinesMelon,
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 0.3,
  },
  button: {
    fontFamily: "IrishGrover-Regular",
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLORS.buttonsYellow,
    color: COLORS.textGrey,
    shadowColor: COLORS.textGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default styles;
