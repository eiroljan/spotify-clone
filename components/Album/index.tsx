import React from 'react';
import {View,Image,Text} from 'react-native';
import styles from './styles';


export type Albumprops ={
    albums:{
        id: string;
        imageUri:string;
        artistsHeadline:string;
    }
}


const AlbumComponent = (props:Albumprops) => (
    <View style={styles.container}>
    <Image source={{uri: props.albums.imageUri}} style={styles.img}/>
    <Text style={styles.text}>{props.albums.artistsHeadline}</Text>
    </View>
)

export default AlbumComponent;