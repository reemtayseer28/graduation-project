import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useState } from 'react';

export default function RegisterScreen() {
  const router = useRouter();
    const [userType, setUserType] = useState('مواطن');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!fullName || !phone || !email || !password || !confirmPassword) {
      Alert.alert('خطأ', 'يرجى تعبئة جميع الحقول');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('خطأ', 'كلمة المرور غير متطابقة');
      return;
    }
    Alert.alert('تم التسجيل!', 'سيتم الربط مع الـ backend لاحقاً');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <Text style={styles.logo}>🛡️</Text>
        <Text style={styles.title}>إنشاء حساب جديد</Text>
        <Text style={styles.subtitle}>أهلاً بك في تطبيق الأمان الذكي</Text>

        {/* نوع المستخدم */}
        <Text style={styles.label}>نوع المستخدم</Text>
        <View style={styles.typeTabs}>
          {['مواطن', 'مؤسسة'].map(type => (
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

        {/* الاسم الكامل */}
        <Text style={styles.label}>الاسم الكامل</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل اسمك الكامل"
          value={fullName}
          onChangeText={setFullName}
          textAlign="right"
        />

        {/* رقم الهاتف */}
        <Text style={styles.label}>رقم الهاتف</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل رقم هاتفك"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          textAlign="right"
        />

        {/* البريد الإلكتروني */}
        <Text style={styles.label}>البريد الإلكتروني</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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

        {/* تأكيد كلمة المرور */}
        <Text style={styles.label}>تأكيد كلمة المرور</Text>
        <TextInput
          style={styles.input}
          placeholder="أعد إدخال كلمة المرور"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          textAlign="right"
        />

        {/* زر التسجيل */}
        <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
          <Text style={styles.registerBtnText}>إنشاء حساب</Text>
        </TouchableOpacity>

        {/* رجوع لتسجيل الدخول */}
        <Text style={styles.loginText}>
          لديك حساب؟ <Text style={styles.loginLink} onPress={() => router.back()}>تسجيل الدخول</Text><Text style={styles.registerLink} onPress={() => router.push('/register')}>إنشاء حساب جديد</Text>
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  registerBtn: {
    width: '100%', backgroundColor: '#1a3a6e',
    padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 14,
  },
  registerBtnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  loginText: { fontSize: 13, color: '#555' },
  loginLink: { color: '#1a3a6e', fontWeight: 'bold' },
  registerLink: { color: '#1a3a6e', fontWeight: 'bold' },
});