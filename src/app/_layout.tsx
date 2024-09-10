import { TodoConxtextProvider } from '@/context/TodoContext';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {


  return (
    
    
      <TodoConxtextProvider>
        <Stack
        screenOptions={{headerShown:false}}
        >
        </Stack>
      </TodoConxtextProvider>
  );
}
