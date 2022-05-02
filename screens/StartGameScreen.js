import { 
            StyleSheet,
            TextInput, 
            View
        } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen (){
    return (
      <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    //Drop Shadow on Android
    elevation: 4,
    //Drop Shadow on IoS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});