import { TextInput, StyleSheet } from 'react-native';

interface DisplayProps {
  value: string;
}

const CalculatorDisplay = ({ value }: DisplayProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      editable={false}
      placeholder="0"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'right',
    padding: 10,
    borderWidth: 1,
  },
});

export default CalculatorDisplay;
