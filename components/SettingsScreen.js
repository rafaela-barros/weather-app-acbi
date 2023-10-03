import React, {useState } from 'react';
import { 
          StyleSheet,
          Text, 
          View,
        } from 'react-native';
import { CheckBox } from 'react-native-elements'

import Slider from '@react-native-community/slider';


function SettingsScreen() {

  //temperature
  const [celsiusChecked, setCelsiusChecked] = useState(true);
  const [kelvinChecked, setKelvinChecked] = useState(false);
  const [fahrenheitChecked, setFahrenheitChecked] = useState(false);

  // Font size state
  const [smallChecked, setSmallChecked] = useState(false);
  const [mediumChecked, setMediumChecked] = useState(true);
  const [largeChecked, setLargeChecked] = useState(false);

  
  // Sound state
  const [soundOnChecked, setSoundOnChecked] = useState(false);
  const [soundOffChecked, setSoundOffChecked] = useState(true);


  const handleCheckBoxPress = (type) => {
    switch (type) {
      case 'Celsius':
        setCelsiusChecked(!celsiusChecked);
        setKelvinChecked(false);
        setFahrenheitChecked(false);
        break;
      case 'Kelvin':
        setKelvinChecked(!kelvinChecked);
        setCelsiusChecked(false);
        setFahrenheitChecked(false);
        break;
      case 'Fahrenheit':
        setFahrenheitChecked(!fahrenheitChecked);
        setCelsiusChecked(false);
        setKelvinChecked(false);
        break;
      default:
        break;
    }
  };

  // Function to handle font size checkbox press
  const handleFontSizePress = (size) => {
    switch (size) {
      case 'Small':
        setSmallChecked(!smallChecked);
        setMediumChecked(false);
        setLargeChecked(false);
        break;
      case 'Medium':
        setMediumChecked(!mediumChecked);
        setSmallChecked(false);
        setLargeChecked(false);
        break;
      case 'Large':
        setLargeChecked(!largeChecked);
        setSmallChecked(false);
        setMediumChecked(false);
        break;
      default:
        break;
    }
  };

   // Function to handle sound checkbox press
   const handleSoundPress = (sound) => {
    switch (sound) {
      case 'On':
        setSoundOnChecked(!soundOnChecked);
        setSoundOffChecked(false);
        break;
      case 'Off':
        setSoundOffChecked(!soundOffChecked);
        setSoundOnChecked(false);
        break;
      default:
        break;
    }
  };

  

    return (
      <View style={styles.containerView}>
        <Text style={{ fontWeight: 'bold', marginTop: '15px', }}>Temperature units</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '5px', }}>
          <CheckBox
            title='Celsius'
            checked={celsiusChecked}
            onPress={() => handleCheckBoxPress('Celsius')}
          />
          <CheckBox
            title='Kelvin'
            checked={kelvinChecked}
            onPress={() => handleCheckBoxPress('Kelvin')}
          />
          <CheckBox
            title='Fahrenheit'
            checked={fahrenheitChecked}
            onPress={() => handleCheckBoxPress('Fahrenheit')}
          />
            
        </View>
        <View style={styles.childView}>
          <Text style={{fontWeight: 'bold', }}>Font Size</Text>
          <View style={{ flexDirection: 'row', alignItems: 'left', justifyContent: 'left', marginTop: '5px', paddingLeft: '25px' }}>
            <CheckBox
              title='Small'
              checked={smallChecked}
              onPress={() => handleFontSizePress('Small')}
            />
            <CheckBox
              title='Medium'
              checked={mediumChecked}
              onPress={() => handleFontSizePress('Medium')}
            />
            <CheckBox
              title='Large'
              checked={largeChecked}
              onPress={() => handleFontSizePress('Large')}
            />
          </View>
        </View>
        <View style={styles.childView}>
           <Text style={{ fontWeight: 'bold', }}>Sounds Effects</Text>
           <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '5px', }}>
            <CheckBox
              title='On'
              checked={soundOnChecked}
              onPress={() => handleSoundPress('On')}
            />
            <CheckBox
              title='Off'
              checked={soundOffChecked}
              onPress={() => handleSoundPress('Off')}
            />
          </View>
        </View>
        <View style={styles.childView}>
          <Text>Brightness</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="red"
            step={0.1}
          />
          </View>  
        <View style={{ margin: 5, width: '90%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{  fontWeight: 'bold' }}>Weather Time</Text>
          <Text style={{ }}>Version: 1.0</Text>
          <Text style={{  }}>Bult date:  01 Setember 2023</Text>
          <Text style={{  }}>Developer: Mariana Cuder</Text>
          <Text style={{ }}>Student Number: ACBI202000521</Text>
        </View>  
        <View style={styles.viewProvider}>
            <Text style={styles.textProvider}>Thank you for purchasing Weather Time. If you have any issues or feedback, please conact: 1800 123 456.</Text>
            <Text style={styles.textProvider}>Data provide by WeatherTime API. Best efforts are taken to ensure accuracy of the data, but no garantees are made. To view he official data, please vit the ebesite of WeatherTime API</Text>
        </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    containerView: {
        flex: 3, 
        alignItems: 'center', 
        justifyContent: 'center' 
      },
      childView: {
        margin: 5, 
        paddingTop: '15px',
        width: '50%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    viewProvider: {
      marginTop: 40,
      
    },
    textProvider: {
      padding: 4,
      fontSize: 10,
      textAlign: 'center',
    }
  });
  
  export default SettingsScreen;