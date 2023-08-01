

// App.js (React Native)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [submittedForms, setSubmittedForms] = useState([]);

  useEffect(() => {
    // Fetch the submitted form data from the server
    const fetchData = async () => {
      try {
        const response = await fetch('https://y-rubelmasud.vercel.app/submitted-forms');
        const data = await response.json();
        setSubmittedForms(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);

  const renderFormItem = ({ item }) => (
    <View style={styles.formItem}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{item.name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{item.email}</Text>
      <Text style={styles.label}>Message:</Text>
      <Text style={styles.value}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={submittedForms}
        renderItem={renderFormItem}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  formItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;
