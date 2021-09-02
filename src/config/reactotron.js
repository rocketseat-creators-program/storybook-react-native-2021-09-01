import Reactotron from 'reactotron-react-native';

Reactotron.configure()
  .useReactNative({
    storybook: true,
  })
  .connect();

// console.tron === Reactotron
// console.tron.log()

console.tron = Reactotron;
export default Reactotron;
