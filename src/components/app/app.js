import React, { Component } from 'react'

import {
  FullScreen,
  Row,
  Col
} from '../layouts/flex'

import {
  Card,
  Body,
  ButtonBar,
  NavBar
} from '../layouts/card'

import {
  List,
  Item,
  ItemSongStores
} from '../layouts/list'

import Button from '../lib/button'

console.log(
  // Card,
  // Body,
  // ButtonBar,
  // NavBar
)

import SongStoreListContainer
  from '../../song-store/components/song-store-list-container'

export const hello = 'hello'
export default class App extends Component {
  render() {
  console.log('render', this.props)
    return (
      <div>
        <FullScreen flex="row">
          {
            ' '
           // this.props.children
          }
        </FullScreen>
        <SongStoreListContainer />
        <pre>
          {
          //  JSON.stringify(this.props.state, null, 2)
          }
        </pre>
        <FullScreen flex={'row'}>
          <Card>
            <NavBar>
              nav bar
            </NavBar>
            <List>
              <ItemSongStores isFirst={true}>Item 1 dfjhsdkjhf dfjhsakdjfhaksdjfhkjsdhfkasjhdfkads fkj fasjdhf kjashdfkjsahdf kjashd jsd fkjashd fk</ItemSongStores>
              <ItemSongStores>Item 2</ItemSongStores>
            </List>
            <ButtonBar>
              <Button group={true}>Button 1</Button>
              <Button group={true}>Button 2</Button>
            </ButtonBar>
          </Card>
        </FullScreen>
      </div>

    )
  }
}
