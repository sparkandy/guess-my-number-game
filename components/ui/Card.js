import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

function Card ({children}){
    return (
      <View style={styles.inputContainer}>
        {children}
      </View>
    );
}


export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //Drop Shadow on Android
    elevation: 4,
    //Drop Shadow on IoS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
});