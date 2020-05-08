import { Platform } from 'react-native';

const baseUrl: string = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

export { baseUrl };