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
  Button,
  
} from 'react-native';

import imageNotFound from '../../asset/image_error.jpeg'
const imageNotFoundUri =   Image.resolveAssetSource(imageNotFound).uri


const ImageCard = (props) => {

    const {id, url} = props
    
    const _onClickItem = (val) => {
        console.log("down url ", val)
       
    }
  

    return(
        <View style={{padding: 2,}} onPress={ () => _onClickItem(url)}> 
                <Image style={{height: 180, width: 180, backgroundColor:'#e8f3f7'}} 
                    source={{uri: url ? url : imageNotFoundUri}}
                    transition={false}
                    />
        </View>
    )
}

export default ImageCard;