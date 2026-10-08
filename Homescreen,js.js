import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { categories } from '../data/recipes';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Chef! 🍳</Text>
      <Text style={styles.subtitle}>Pick a category to browse recipes.</Text>

      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.card}
          // Forward navigation + passing a param to the next screen
          onPress={() => navigation.navigate('RecipeList', { category })}
        >
          <Text style={styles.cardTitle}>{category}</Text>
          <Text style={styles.cardSub}>Tap to see {category.toLowerCase()} recipes</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}