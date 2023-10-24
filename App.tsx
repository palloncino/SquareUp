import React, {useState, useEffect} from 'react';
import {View, FlatList, SectionList, Text, StyleSheet} from 'react-native';

const App = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setData(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const smartphoneData = data.filter(item => item.category === 'smartphones');
  const otherData = data.filter(item => item.category !== 'smartphones');

  const sections = [
    {title: 'Smartphones', data: smartphoneData},
    {title: 'Others', data: otherData},
  ];

  const ItemComponent = ({title, description}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#f0f0f0'}}>
      <FlatList
        data={smartphoneData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ItemComponent title={item.title} description={item.description} />
        )}
      />

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <ItemComponent title={item.title} description={item.description} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    marginTop: 5,
    color: '#555',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
  },
});
