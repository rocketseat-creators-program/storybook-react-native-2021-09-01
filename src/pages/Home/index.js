import React from 'react';
import {SafeAreaView} from 'react-native';

import {FlatList, Box, Label} from '../../components';
import PlaceCard from '../../components/PlaceCard';

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <Box spacing="20px 0">
            <Label size="large" bold>
              Espaços Salvos
            </Label>
          </Box>
        )}
        hasPadding
        data={[1, 2, 3, 4]}
        renderItem={({item}) => <PlaceCard />}
      />
    </SafeAreaView>
  );
};

export default Home;
