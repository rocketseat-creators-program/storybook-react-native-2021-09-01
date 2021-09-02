import styled from 'styled-components/native';

export const Label = styled.Text`
  font-family: ${({theme}) => theme.font.family};
  letter-spacing: ${({theme}) => theme.font.letterSpacing};
  font-size: ${({theme, size}) => theme.font.sizes[size || 'small']};
  color: ${({theme, color}) => theme.colors[color || 'primary']};
  margin: ${({spacing}) => spacing || '0px'};
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
`;

export const Image = styled.ImageBackground.attrs(({image}) => ({
  source: {
    uri: image,
  },
}))`
  background: ${({theme}) => theme.colors.muted50};
  border-radius: ${({theme, rounded}) => (rounded ? theme.radius : '0px')};
  height: ${({size}) => size || '150px'};
  margin: ${({spacing}) => spacing || '0px'};
  width: 100%;
  justify-content: center;
  overflow: hidden;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
})``;

export const Touchable = styled.TouchableOpacity`
  background: ${({theme, background}) =>
    theme.colors[background] || 'transparent'};
  padding: ${({hasPadding}) => (hasPadding ? '20px' : 0)};
  margin: ${({spacing}) => spacing || '0px'};
  border-radius: ${({theme, rounded}) => (rounded ? theme.radius : '0px')};
  justify-content: ${({justify}) => justify || 'flex-start'};
  align-items: ${({align}) => align || 'flex-start'};
  flex-direction: ${({row}) => (!row ? 'column' : 'row')};
  overflow: hidden;
`;

export const Box = styled.View`
  width: ${({fluid}) => (fluid ? '100%' : 'auto')};
  background: ${({theme, background}) =>
    theme.colors[background] || 'transparent'};
  padding: ${({hasPadding}) => (hasPadding ? '20px' : 0)};
  margin: ${({spacing}) => spacing || '0px'};
  border-radius: ${({theme, rounded}) => (rounded ? theme.radius : '0px')};
  flex-direction: ${({row}) => (!row ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${({items}) => items || 'flex-start'};
  overflow: hidden;
`;

export const FlatList = styled.FlatList`
  height: 100%;
  padding: ${({hasPadding}) => (hasPadding ? '20px' : 0)};
  background: ${({theme, background}) => theme.colors[background || 'muted50']};
`;
