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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

const imageNotFoundUri =   Image.resolveAssetSource(imageNotFound).uri


const ImageCard = (props) => {

    //const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    const {id, url} = props

    const _onClickItem = (val) => {
        console.log("down url ", val)
        navigation.navigate('Details', {url: val})
    }
  

    return(
        <TouchableOpacity style={{padding: 2,}} onPress={ () => _onClickItem(url)}> 
                {/* <Image style={{height: 180, width: 180, backgroundColor:'#e8f3f7'}} 
                    source={{uri: url ? url : imageNotFoundUri}}
                    transition={false}
                    
                    /> */}

             <FastImage
                    style={{height: 180, width: 180, backgroundColor:'#e8f3f7'}}
                    source={{
                        uri: url ? url : imageNotFoundUri,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />   
        </TouchableOpacity>
    )
}

export default ImageCard;