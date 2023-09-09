import React from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { REMOVE_ITEM } from "../src/reducer/countReducer";
import { useDispatch, useSelector } from "react-redux";

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />;
}

function Cart() {
  
  const cartItems = useSelector((state) => state );
  const dispatch = useDispatch()

  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_ITEM,
      payload: item
    })

  return (
    <View style={{ flex: 1 }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.imgUrl }} style={styles.images} />
              <View style={styles.bookItemMetaContainer}>
                <Text style={styles.textView} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.textAuthor}>by {item.author}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => dispatch(removeItemFromCart(item))}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          )}

        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
        </View>
      )}
    </View>

  );
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
  buttonContainer: {
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
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28
  }
});


export default Cart;