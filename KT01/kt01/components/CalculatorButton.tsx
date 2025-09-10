import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  isClear?: boolean;
}

const CalculatorButton = ({ label, onPress, isClear }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, isClear && styles.clearButton]}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5
  },
  clearButton: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CalculatorButton;
