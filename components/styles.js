import { styled } from "styled-components";
import {
  View,
  Text,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { AutoSizeText } from "react-native-auto-size-text";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled(View)`
  height: 100%;
  width: 100%;
  padding-top: ${StatusBarHeight + 50}px;
  background-color: ${primary};
`;

export const InnerContainer = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const PageLogo = styled(Image)`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const Subtitle = styled(Text)`
  font-size: 18px;
  margin-bottom: 20%;
  color: ${tertiary};
`;

export const StyledFormArea = styled(View)`
  width: 60%;
`;

export const StyledTextInput = styled(TextInput)`
  background: ${secondary};
  padding-right: 55px;
  padding-left: 15px;
  border-radius: 5px;
  font-size: 15px;
  height: 50px;
  width: 250px;
  color: ${tertiary};
  overflow: hidden;
`;

export const StyledInputLabel = styled(Text)`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const RightIcon = styled(TouchableOpacity)`
  left: 15px;
  top: 30px;
  position: absolute;
`;

export const StyledButton = styled(TouchableOpacity)`
  background-color: ${brand};
  justify-content: center;
  margin-top: 20px;

  border-radius: 5px;
  align-items: center;
  height: 50px;
`;

export const ButtonText = styled(Text)`
  color: ${primary};
  font-size: 15px;
`;

export const MsgBox = styled(Text)`
text-align:center;
font-size;
`;

export const ExtraView = styled(View)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled(Text)`
  justify-content: center;
  align-content: center;
  color: white;
  font-size: 15px;
  text-align: center;
`;

export const TextLink = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const TextLinkConetent = styled(Text)`
  color: ${primary};
  font-size: 15px;
`;

export const KeyboardAvoidingViewCustom = styled(KeyboardAvoidingView)`
  width: 100%;
  height: 100%;
`;

export const QuizContainer = styled(View)`
  background-color: black;
  width: 350px;
  height: 400px;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const FrontText = styled(Text)`
  color: white;
  font-size: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const BackText = styled(AutoSizeText)`
  color: white;
`;

export const EnteringButton = styled(TouchableOpacity)`
  background-color: purple;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  margin-vertical: 10px;
`;

export const EnteringContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const StyledQuestionInput = styled(TextInput)`
  background: ${secondary};
  border-radius: 5px;
  font-size: 15px;
  height: 250px;
  width: 250px;
  color: ${tertiary};
  padding-left: 8px;
  padding-top: 8px;
`;

export const QuizCreateContainer = styled(View)`
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;
