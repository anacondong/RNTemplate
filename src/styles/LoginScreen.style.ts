import {
  ViewStyle,
  ImageStyle,
  Dimensions,
  StyleSheet,
  TextStyle,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  logoImageStyle: ImageStyle;
  textInputContainer: ViewStyle;
  passwordTextInputContainer: ViewStyle;
  loginButtonStyle: ViewStyle;
  loginTextStyle: TextStyle;
  haveAccountButtonStyle: ViewStyle;
  haveAccountTextStyle: TextStyle;
  dividerStyle: ViewStyle;
  socialLoginContainer: ViewStyle;
  facebookSocialButtonTextStyle: TextStyle;
  twitterSocialButtonTextStyle: TextStyle;
  discordSocialButtonTextStyle: TextStyle;
  socialButtonStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  logoImageStyle: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  textInputContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  passwordTextInputContainer: {
    marginTop: 16,
  },
  loginButtonStyle: {
    height: 40,
    width: ScreenWidth * 0.9,
    backgroundColor: "#25a9e2",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 32,
    elevation: 5,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#166080",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  loginTextStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  haveAccountButtonStyle: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  haveAccountTextStyle: {
    color: "#acabb0",
  },
  dividerStyle: {
    height: 0.5,
    alignSelf: "center",
  },
  socialLoginContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  facebookSocialButtonTextStyle: {
    color: "#4267B2",
  },
  twitterSocialButtonTextStyle: {
    color: "#56bfe8",
  },
  discordSocialButtonTextStyle: {
    color: "#5865F2",
  },
  socialButtonStyle: {
    marginTop: 16,
  },
});
