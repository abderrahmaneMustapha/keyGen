import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { List, SearchBar, Button, Popover, Icon, Modal, Toast, InputItem } from '@ant-design/react-native';

// this component show keys , and play the role of a main component for
// this page

const URL = 'https://keygen123.herokuapp.com/'
//'https://keygen123.herokuapp.com/'
export default function Search({ styles }) {
  const [items, setItems] = useState()
  const [query, setQuery] = useState()


  const fetchData = async () => {
  
    let fetchUrl =  query ? `${URL}api/keys?query=${query}` : `${URL}api/keys`
    await fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        setItems(data)
      })
  }
  useEffect(() => {
   
    fetchData()
  }, [query])

  return (
    <View style={styles.center}>
      <SearchBar showCancelButton={false} placeholder="Search"  onSubmit={(val) => {
        setQuery(val)
        fetchData()     
      }} />
      <CModal styles={styles} />

      <List renderHeader={() => 'Keys'}>
        <FlatList
          data={items}
          scrollEnabled={true}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <List.Item extra={<div>{item.key} <CPopover id={item.id} /></div>} multipleLine>
              {item.name}
            </List.Item>
          )}
        />
      </List>

    </View>

  );
}



// this componennt contains code to remove keys
const CPopover = ({ id }) => {
  const Item = Popover.Item
  function showToast() {
    Toast.info('Key Deleted succesfully', 1);
  }
  const deleteKey = (deleteid) => {

    fetch(`${URL}api/keys/${deleteid}`, {
      method: "DELETE",
    })

    showToast()
  }
  return (
    <div onClick={() => {
      deleteKey(id)
    }}><Icon type={'cross-circle'} /></div>
  )
}

// this a modal appear when a user want to add a key
const CModal = ({ styles }) => {
  const [visible, setVisible] = useState(false)
  const [keyInput, setKeyInput] = useState()
  const handleVisibleChange = () => {
    setVisible(!visible)
    console.log("aaa")
  }

  const addKey = () => {

    fetch(`${URL}api/keys`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: keyInput })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error)
          Toast.show(data.error)
        else
          Toast.show("data saved succesfully")
      })
  }
  return (
    <>
      <Button style={{
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: "1em"
      }} onPress={() => {
        handleVisibleChange()
      }} type="primary">Add a key</Button>
      <Modal
        visible={visible}
        closable={true}
        onClose={handleVisibleChange}

        title="Add a key you only need to enter a name"
      >
        <div style={{ height: '50%', padding: "2em" }}>
          <InputItem
            clear
            value={keyInput}
            placeholder="Enter a key name"
            onChange={(val) => {
              setKeyInput(val)
            }}
          >
          </InputItem>
          <Button style={{ marginTop: "0.5em", marginBottom: "0.5em" }} onPress={() => {

            addKey()
            handleVisibleChange()
          }} type="primary">Add a key</Button>
        </div>
      </Modal>
    </>
  )
}

