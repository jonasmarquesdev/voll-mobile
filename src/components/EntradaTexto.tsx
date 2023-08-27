import { FormControl, Input } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function EntradaTexto({ 
  label, 
  placeholder, 
  secureTextEntry = false,
  value,
  onChangeText 
}: InputProps): JSX.Element {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
}