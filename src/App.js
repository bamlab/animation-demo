import React from 'react';
import Scenes from './Scenes';
import { UIManager } from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => (<Scenes />);

export default App;
