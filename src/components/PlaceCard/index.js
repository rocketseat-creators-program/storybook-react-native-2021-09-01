import React from 'react';

import {Label, Box, Touchable} from '../index';
import Cover from '../Cover';

const PlaceCard = ({
  loading = false,
  image = 'http://d33x644h9xoqir.cloudfront.net/wp-content/uploads/sites/2/2018/08/shridhar-gupta-678685-unsplash-1-745x400.jpg',
  title = 'Co-working Teste',
  description = 'Av. Test, 90',
  amount = 10,
}) => {
  return (
    <Touchable
      onPress={() => alert('teste')}
      hasPadding
      rounded
      background="light"
      spacing="0px 0px 20px">
      <Cover loading={loading} rounded image={image} spacing="0 0 15px" />
      <Box row justify="flex-end" items="center" fluid spacing="10px 0">
        <Box>
          <Label size="medium" bold spacing="0 0 5px">
            {title}
          </Label>
          <Label size="small" color="muted">
            {description}
          </Label>
        </Box>
        <Box row items="center">
          <Label size="large" color="success" bold>
            $ {amount}
          </Label>
          <Label size="medium">/dia</Label>
        </Box>
      </Box>
    </Touchable>
  );
};

export default PlaceCard;
