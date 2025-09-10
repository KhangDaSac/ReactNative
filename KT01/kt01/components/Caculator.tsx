import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator = () => {
  const buttons: string[][] = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', '=', 'AC', '/'],
  ];

  const [display, setDisplay] = useState<string>('');

  const handlePress = (btn: string) => {
    if (btn === 'AC') {
      setDisplay('');
      return;
    }

    if (btn === '=') {
      handleEqual();
      return;
    }

    setDisplay(display + btn);
  };

  const handleEqual = () => {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch (e) {
      setDisplay('Lỗi');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  return (
    <View style={styles.container}>
      <CalculatorDisplay value={display} />

      {buttons.map((row, rowIndex) => (
        <View style={styles.row}>
          {row.map((btn) => (
            <CalculatorButton
              label={btn}
              onPress={() => (btn === 'AC' ? handleClear() : handlePress(btn))}
              isClear={btn === 'AC'}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Calculator;





