import { Text, StyleSheet, Platform } from 'react-native';

function Title ({children}) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    // fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    // borderWidth: Platform.OS === 'andoid' ? 2 : 0,
    borderWidth: Platform.select({ios: 2, android: 4}),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%'
  },
});