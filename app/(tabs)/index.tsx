import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Логотип или изображение */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.image}
      />
      
      {/* Новый стилизованный текст */}
      <Text style={styles.title}>🌟 Создавай. Исследуй. Вдохновляй.</Text>

      {/* Цитата */}
      <Text style={styles.quote}>
        «Каждое великое приложение начинается с одной строки кода.»
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Мягкий фон
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff7f50', // Коралловый цвет
    textAlign: 'center',
    fontFamily: 'monospace',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 10,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});