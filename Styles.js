import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff4e6', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#862e00', marginBottom: 6 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#222' },
  cardSub: { fontSize: 14, color: '#777', marginTop: 4 },
  button: {
    backgroundColor: '#d9480f',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonSecondary: { backgroundColor: '#495057' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 6, color: '#862e00' },
  body: { fontSize: 16, color: '#333', lineHeight: 22 },
});