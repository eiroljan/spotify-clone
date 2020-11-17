import React from 'react';
import {Text,View,FlatList} from 'react-native';
import { Album } from  '../../types';
import AlbumComponent from '../Album';
import style from './style'


export type AlbumCategoryProps ={
    title:string,
    albums:[Album],
}


const AlbumCategory = (props: AlbumCategoryProps) =>(
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
        <FlatList
        data={props.albums}
        renderItem={({item}) => <AlbumComponent albums={item}/>}
        keyExtractor={(item) => item.id}
        horizontal={true}
        />
        
    </View>
)
export default AlbumCategory;