import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const services = [
    { id: 1, icon: '🚨', title: 'تقديم بلاغ', color: '#e74c3c' },
    { id: 2, icon: '📋', title: 'متابعة البلاغات', color: '#1a3a6e' },
    { id: 3, icon: '💬', title: 'المساعد الذكي', color: '#8e44ad' },
    { id: 4, icon: '👶', title: 'ركن الأطفال', color: '#e67e22' },
    { id: 5, icon: '📝', title: 'تقديم شكوى', color: '#27ae60' },
    { id: 6, icon: '📦', title: 'المفقودات', color: '#2980b9' },
  ];

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>مساعد الشرطة المجتمعية</Text>
        <Text style={styles.headerSubtitle}>أهلاً بك 👋</Text>
        {/* زر الخروج */}
<TouchableOpacity 
  style={styles.logoutBtn} 
  onPress={() => router.replace('/')}
>
  <Text style={styles.logoutText}>تسجيل الخروج 🚪</Text>
</TouchableOpacity>
      </View>

      {/* Services Grid */}
      <Text style={styles.sectionTitle}>الخدمات</Text>
      <View style={styles.grid}>
        {services.map(service => (
          <TouchableOpacity
            key={service.id}
            style={[styles.card, { borderTopColor: service.color }]}
            onPress={() => {}}
          >
            <Text style={styles.cardIcon}>{service.icon}</Text>
            <Text style={styles.cardTitle}>{service.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#1a3a6e',
    padding: 28,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#cce0ff',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    margin: 16,
    textAlign: 'right',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 12,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: '45%',
    borderTopWidth: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardIcon: {
    fontSize: 36,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  logoutBtn: {
  marginTop: 10,
  backgroundColor: 'rgba(255,255,255,0.2)',
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: 20,
},
logoutText: {
  color: 'white',
  fontSize: 13,
},
});