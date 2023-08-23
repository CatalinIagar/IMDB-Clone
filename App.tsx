import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const API_KEY = '';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const POPULAR_MOVIES_ENDPOINT = '/movie/popular';

  useEffect(() => {
    loadData().then(() => {});
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}${POPULAR_MOVIES_ENDPOINT}?api_key=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const popularMovies = data.results;
      console.log(popularMovies);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  return (
    <SafeAreaView>
      <Text>MATA</Text>
      <Text>MATA</Text>
      <Text>MATA</Text>
    </SafeAreaView>
  );
};

export default App;
