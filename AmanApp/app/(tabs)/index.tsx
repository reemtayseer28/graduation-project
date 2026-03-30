import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState('مواطن');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('خطأ', 'يرجى إدخال اسم المستخدم وكلمة المرور');
      return;
    }
    Alert.alert('جاري تسجيل الدخول...', 'سيتم الربط مع الـ backend لاحقاً');
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        {/* Logo */}
        <Text style={styles.logo}>🛡️</Text>
        <Text style={styles.title}>مساعد الشرطة المجتمعية</Text>
        <Text style={styles.subtitle}>تسجيل الدخول إلى حسابك</Text>

        {/* نوع المستخدم */}
        <Text style={styles.label}>نوع المستخدم</Text>
        <View style={styles.typeTabs}>
          {['مواطن', 'ضابط', 'مشرف'].map(type => (
            <TouchableOpacity
              key={type}
              style={[styles.typeBtn, userType === type && styles.typeBtnActive]}
              onPress={() => setUserType(type)}
            >
              <Text style={[styles.typeBtnText, userType === type && styles.typeBtnTextActive]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* اسم المستخدم */}
        <Text style={styles.label}>اسم المستخدم</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل اسم المستخدم"
          value={username}
          onChangeText={setUsername}
          textAlign="right"
        />

        {/* كلمة المرور */}
        <Text style={styles.label}>كلمة المرور</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل كلمة المرور"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textAlign="right"
        />

        {/* زر تسجيل الدخول */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>تسجيل الدخول</Text>
        </TouchableOpacity>

        {/* إنشاء حساب */}
        <Text style={styles.registerText}>
          ليس لديك حساب؟ #<Text style={styles.registerLink} onPress={() => router.push('/register')}>إنشاء حساب جديد</Text>1a3a6e
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 28,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: { fontSize: 48, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1a3a6e', marginBottom: 4 },
  subtitle: { fontSize: 13, color: '#888', marginBottom: 20 },
  label: { alignSelf: 'flex-end', fontSize: 13, color: '#444', marginBottom: 6 },
  typeTabs: { flexDirection: 'row', gap: 8, marginBottom: 16, width: '100%' },
  typeBtn: {
    flex: 1, padding: 10, borderRadius: 8,
    borderWidth: 1.5, borderColor: '#ddd', alignItems: 'center',
  },
  typeBtnActive: { backgroundColor: '#1a3a6e', borderColor: '#1a3a6e' },
  typeBtnText: { fontSize: 14, color: '#555' },
  typeBtnTextActive: { color: 'white', fontWeight: 'bold' },
  input: {
    width: '100%', borderWidth: 1.5, borderColor: '#ddd',
    borderRadius: 8, padding: 11, fontSize: 14,
    marginBottom: 14, color: '#333',
  },
  loginBtn: {
    width: '100%', backgroundColor: '#1a3a6e',
    padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 14,
  },
  loginBtnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  registerText: { fontSize: 13, color: '#555' },
  registerLink: { color: '#1a3a6e', fontWeight: 'bold' },
});