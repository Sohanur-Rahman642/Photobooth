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

import { connect } from 'react-redux';
import { getImagesTask } from '../redux/actions/actions';
//import ImageCard from './components/ImageCard';



const Home = ({ imageModel, dispatch }) => {
    const [page, setPage] = useState(1);

    const [showEmptyUi, setShowEmptyUi] = useState(false)

    const requestApi = () => {
        dispatch(getImagesTask({
          page: page
      }))
    }

   useEffect( () => {
     let mounted = true
     if(mounted){
        if(imageModel.error){
          setShowEmptyUi(true)
        }else{
          setShowEmptyUi(false)
        }
        requestApi()
     }

     return (() => {
       mounted = false
     })
     
   },[page, imageModel.error]) 


   console.log('imageModel.error ', imageModel.error)

  

  console.log('imageModel ', imageModel)

  const fetchMoreImages = () => {
        console.log("page in fetchMoreImages ", page)
        if(!imageModel.isListEnd && !imageModel.moreToLoad){
          setPage(page => page + 1)
        }
  }

  const fetchAgain = () => {
      console.log("kjasjsksn")
      setPage(1)
}

  const renderFooter = () => (
    <View style={styles.footerText}>
        {imageModel.moreToLoad && <ActivityIndicator />}
        {imageModel.isListEnd && <Text>No more images at the moment</Text>}
    </View>
)


  const renderEmpty = () => (
    <View style={styles.emptyText}>
        <Text>No Data at the moment</Text>
        <Button onPress={() => fetchAgain()} title='Refresh'/>
    </View>
  )
  
  const renderLoading = () => (
    <View style={styles.loading}>
        <ActivityIndicator />
    </View>
  )


  const props = {
    id: '',
    url: ''
  }



  
   
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle={'light-content'} /> 
        {
          imageModel.loading ? 
          renderLoading()
          :
          showEmptyUi ? 
           renderEmpty()
          :
           <FlatList
                    contentContainerStyle={{backgroundColor:'white', alignItems:'center', flexGrow: 1}}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={imageModel.data}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    onEndReached={fetchMoreImages}
                    onEndReachedThreshold={0.2}
                    // renderItem={({item}) => (
                    //   (props.id = item.id),
                    //   (props.url = item.downloadUrl),
                    //      <ImageCard {...props}/>
                    // )}
                    ListFooterComponent={renderFooter}
                    //ListEmptyComponent={renderEmpty}
                  /> 
                  
                  } 
      </SafeAreaView>
    );
  };

  const mapStateToProps = (state) => {
    const { imageReducer } = state;
    return {
        imageModel: imageReducer.images
    }
 }
  
  const styles = StyleSheet.create({
  
  container: {
      flex: 1
  },
  title: {
      fontSize: 25,
      fontWeight: '700',
      marginVertical: 15,
      marginHorizontal: 10
  },
  loading: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
  },
  footerText: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10
  },
  emptyText: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
  });

 
  
export default connect(mapStateToProps) (Home);
  