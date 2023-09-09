import React from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { books } from "../src/list/Book_list";
import { ADD_ITEM } from "../src/reducer/countReducer";

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}
function Books() {
  const dispatch = useDispatch()
  const addItemToCart = item => dispatch({ type: ADD_ITEM, payload: item })
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Separator()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.imgUrl }}
                style={styles.images} />
              <View style={styles.bookItemMetaContainer}>
                <Text style={styles.textView} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.textAuthor}>by {item.author}</Text>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => dispatch(addItemToCart(item))}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Add +</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )

        }}>
      </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10
  },
  images: {
    width: 100,
    height: 150
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textView: {
    fontSize: 22,
    fontWeight: '600'
  },
  textAuthor: {
    fontSize: 20,
    fontWeight: '300'
  },
  buttonView: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    padding: 5,
    backgroundColor: 'red'
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  }
})

export default Books;
