import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../Hooks/Auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#999" />
    </View>
  );
  user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
