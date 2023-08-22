// NavigationUtils.js
import { CommonActions } from "@react-navigation/native";

export const navigation1 = (navigation, screenName) => {
  navigation.dispatch(CommonActions.navigate(screenName));
};
