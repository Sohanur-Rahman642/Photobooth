import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator, 
  Button
} from 'react-native';


const Details = (props) => {

    //console.log("props url ", props.route.params)
    const [loading, setLoading] = useState(false);
    

    const { url } = props.route.params;

    const renderLoading = () => (
        <View style={styles.loading}>
            <ActivityIndicator />
        </View>
      )

    //   useEffect(() => {

    //   },[loading])

      console.log("loading ", loading)

      const _onLoadEnd = () =>{
         // setLoading(false)
      }

  
return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle={'light-content'} />

        {loading ? 
            renderLoading()
            :
            <View style={{flex:1, alignItems:'center', justifyContent:'center', padding: 10, backgroundColor:'#000'}}>
                <Image style={{height: 400, width: 400}} 
                    source={{uri: url}}
                    onLoadEnd={_onLoadEnd}
                    />
            </View>

        }
        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    loading: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
  });

 
  
  export default Details;
  