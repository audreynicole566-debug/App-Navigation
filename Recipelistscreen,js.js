import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { recipes } from '../data/recipes';
import styles from '../styles';

export default function RecipeListScreen({ route, navigation }) {
  // Receive the category passed from HomeScreen
  const { category } = route.params;
  const filtered = recipes.filter((r) => r.category === category);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Recipes</Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            // Pass the entire recipe object to the details screen
            onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSub}>⏱ {item.time}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Custom manual back button */}
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Back to Categories</Text>
      </TouchableOpacity>
    </View>
  );
}