import React from 'react';

import {Image, ActivityIndicator} from '../../components';

const Cover = ({rounded, loading, image, spacing}) => {
  return (
    <Image spacing={spacing} image={loading ? '' : image} rounded={rounded}>
      {loading && <ActivityIndicator />}
    </Image>
  );
};

export default Cover;
