import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function RecipeDetailsScreen({ route, navigation }) {
  // Receive the recipe object passed from RecipeListScreen
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.cardSub}>
          {recipe.category} • ⏱ {recipe.time}
        </Text>

        <Text style={styles.sectionHeader}>Description</Text>
        <Text style={styles.body}>{recipe.description}</Text>

        <Text style={styles.sectionHeader}>Ingredients</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.body}>
            • {ingredient}
          </Text>
        ))}
      </View>

      {/* Custom manual back button */}
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Back to List</Text>
      </TouchableOpacity>

      {/* Jump forward/home using navigate */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}