import React from 'react';
import { Text, View, Button, Alert } from 'react-native';

export default function App() {
  const handleLoginPress = () => {
    Alert.alert('로그인 버튼이 눌렸습니다.');
  };

  const handleSignUpPress = () => {
    Alert.alert('회원가입 버튼이 눌렸습니다.');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ marginBottom: 20 }}>Hello</Text>
      <Button
        title="로그인"
        onPress={handleLoginPress}
      />
      <View style={{ margin: 10 }} />
      <Button
        title="회원가입"
        onPress={handleSignUpPress}
      />
    </View>
  );
}