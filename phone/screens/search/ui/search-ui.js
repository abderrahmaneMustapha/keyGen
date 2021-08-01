import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { List, SearchBar, Button, Popover, Icon, Modal, Toast, Picker } from 'antd-mobile';

// this component show keys , and play the role of a main component for
// this page

const URL = 'http://localhost:8080/'
//'https://keygen123.herokuapp.com/'
export default function Search({ styles }) {
  const [items, setItems] = useState()
  const [query, setQuery] = useState()



  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${URL}api/keys?query=${query}`)
        .then(response => response.json())
        .then(data => {
          setItems(data)
        })
    }
    fetchData()
  }, [query])

  return (
    <View style={styles.center}>
      <SearchBar  style={{marginBottom: "1em"}}placeholder="Search" cancelText="Cancel" onSubmit={(val) => {
        setQuery(val)
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
  const keyInput = useRef()
  const handleVisibleChange = () => {
    setVisible(!visible)
  }

  const addKey = () => {

    fetch(`${URL}api/keys`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: keyInput.current.value })
    })
      .then(response => response.json())
      .then(data => {
        Toast.show(data.error)
        console.log(data)
      })
  }
  return (
    <>
      <Button style={{
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: "1em"
      }} onClick={() => {
        handleVisibleChange()
      }} type="primary">Add a key</Button>
      <Modal
        visible={visible}
        popup
        closable={true}
        footer={[{ text: 'Save', onPress: () => { addKey(); handleVisibleChange() } }]}
        title="Add a key you only need to enter a name"
      >
        <div style={{ height: '50%', padding:"0.5em" }}>
          <input ref={keyInput} type='text'></input>
        </div>
      </Modal>
    </>
  )
}

