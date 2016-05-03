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
  ItemInSongStores
} from '../layouts/list'

import {
  NavBarSongStore
} from '../layouts/nav-bar'

import Button from '../lib/button'

import SongStoreListContainer
  from '../../song-store/components/song-store-list-container'

export default class App extends Component {
  render() {
  console.log('render', this.props)
    return (
      <div>
        <FullScreen flex="row">
          {
           this.props.children
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
            <NavBarSongStore />
            <List>
              <ItemInSongStores isFirst={true}>Item 1 dfjhsdkjhf dfjhsakdjfhaksdjfhkjsdhfkasjhdfkads fkj fasjdhf kjashdfkjsahdf kjashd jsd fkjashd fk</ItemInSongStores>
              <ItemInSongStores>Item 2</ItemInSongStores>
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
