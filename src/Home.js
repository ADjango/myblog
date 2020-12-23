import React from 'react'

import { Grid, Segment, Menu, Input, Dropdown, Icon, Image, Advertisement, Header, List, Item, Button, Label, Popup, Divider, Tab, Container, Statistic } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import avatar from './jenny.jpg'
import cover from './image.png'
import './Home.css'

const trigger = (
  // <span>
  <>
    <Image src={avatar} avatar style={{marginBottom:'5px',marginTop:'-5px'}} /> Hello, Bob
  </>
)

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

export default class Home extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Menu pointing secondary>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
              <Menu.Item>
                <Input
                  transparent
                  icon={{ name: 'search', link: true }}
                  placeholder='Search users...'
                />
              </Menu.Item>

              <Menu.Item position='right' style={{ paddingTop: "0", paddingBottom: "0" }}>
                <Popup
                  position='bottom center'
                  on='click'
                  pinned
                  trigger={<div style={{ marginRight: '40px' }}>
                  <Icon name='bell' size='large' style={{ position: 'relative', cursor:'pointer' }}>
                    <Label color='red' circular size='mini' style={{ position: 'absolute', bottom: '50%', left: '40%' }}>
                      22
                  </Label>
                  </Icon>
                </div>}
                >
                  <Popup.Content>
                  <List horizontal link divided relaxed style={{width:'360px'}}>
                    <List.Item as='tab'>Terms and Conditions</List.Item>
                    <List.Item as='a'>Privacy Policy</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                  </List>
                  <Divider/>
                  {/* <Tab panes={panes} menu={{ text: true }}/> */}
                  </Popup.Content>
                </Popup>
                
                <div style={{ marginRight: '40px' }}>
                  <Icon name='envelope' size='large' style={{ position: 'relative' }}>
                    <Label color='red' circular size='mini' style={{ position: 'absolute', bottom: '50%', left: '40%' }}>
                      22
                  </Label>
                  </Icon>
                </div>
                {/* <span style={{ lineHeight: "40px", cursor: "pointer" }} onClick={() => console.log("logout")}>log in/sign in</span> */}
                <Dropdown
                  trigger={trigger}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item text='New' />
                    <Dropdown.Item text='Open...' />
                    <Dropdown.Item text='Save as...' />
                    <Dropdown.Item text='Rename' />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu>
            {/* <Advertisement unit='banner' test='Banner' style={{width:'100%'}}/> */}
            <Advertisement unit='leaderboard' test='leaderboard' style={{ width: '100%' }} />
            <Divider />
            <Grid columns='equal'>
              <Grid.Column width={11}>
                <Item.Group divided>
                  <Item>
                    {/* <Item.Image src={cover} /> */}
                    <Item.Content>
                      <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                      <Item.Meta>
                        <Image src={avatar} style={{ width: '24px', height: '24px', display: 'inline-block' }} />
                        <span className='cinema'><b>IFC Cinema</b></span>
                        <span>我于杀戮之中绽放，亦如黎明前的花朵</span>
                      </Item.Meta>
                      <Item.Description style={{ display: 'flex' }}>
                        <Image src={cover} style={{ width: '190px', height: '120px', display: 'inline-block' }} />
                        <div style={{ marginLeft: "10px" }}>病毒的溯源属于自然科学范畴，我们无需急于表态或者过于操切，等传染病学专家的专业结果出来后，我们盲从科学结论就完事了。这里要明确指出一点，不论病毒起源于哪里，它都是一个自然科学范畴的事情，起源地不应该为此承担道德责任，更不应该受到来自外界的道德责难，就像人不应该为太阳东升西落负责一样，联合国对此有明确规定，疾病命名应遵循无歧视无地域原则。退一步说，就算最后病毒起源被证实发生于某地，该地也不应该受到责难，退一步说，就算最后病毒起源被证实发生于某地，该地也不应该受到责难</div>

                      </Item.Description>
                      <Item.Extra>
                        <Button color='instagram' toggle active size='small'><Icon name='thumbs up' />赞同 2020</Button>
                        <Label icon='chat' content='1212 评论' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='paper plane' content='分享' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='star' content='收藏' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='like' content='喜欢' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <span style={{ float: 'right' }}><b>2020-12-1 20:20</b></span>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                  <Item>
                    <Item.Content>
                      <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                      <Item.Meta>
                        <Image src={avatar} style={{ width: '24px', height: '24px', display: 'inline-block' }} />
                        <span className='cinema'><b>IFC Cinema</b></span>
                        <span>我于杀戮之中绽放，亦如黎明前的花朵</span>
                      </Item.Meta>
                      <Item.Description>
                        病毒的溯源属于自然科学范畴，我们无需急于表态或者过于操切，等传染病学专家的专业结果出来后，我们盲从科学结论就完事了。这里要明确指出一点，不论病毒起源于哪里，它都是一个自然科学范畴的事情，起源地不应该为此承担道德责任，更不应该受到来自外界的道德责难，就像人不应该为太阳东升西落负责一样，联合国对此有明确规定，疾病命名应遵循无歧视无地域原则。退一步说，就算最后病毒起源被证实发生于某地，该地也不应该受到责难，因为人类历史上任何一次大规模传染病的流行，起源地从来不是罪魁祸首，那些在它的流行传染过程中不作为乃至乱作为的人和事才是最大的帮凶。
                  </Item.Description>
                      <Item.Extra>
                        <Button color='instagram' toggle active size='small'><Icon name='thumbs up' />赞同 2020</Button>
                        <Label icon='chat' content='1212 评论' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='share' content='分享' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='star' content='收藏' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='like' content='喜欢' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Popup content='Add reactions' trigger={<Icon name='add' style={{ cursor: 'pointer' }} />} />
                        <span style={{ float: 'right' }}><b>2020-12-1 20:20</b> last post</span>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                  <Item>
                    <Item.Content>
                      <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                      <Item.Meta>
                        <Image src={avatar} style={{ width: '24px', height: '24px', display: 'inline-block' }} />
                        <span className='cinema'><b>IFC Cinema</b></span>
                        <span>我于杀戮之中绽放，亦如黎明前的花朵</span>
                      </Item.Meta>
                      <Item.Description>
                        病毒的溯源属于自然科学范畴，我们无需急于表态或者过于操切，等传染病学专家的专业结果出来后，我们盲从科学结论就完事了。这里要明确指出一点，不论病毒起源于哪里，它都是一个自然科学范畴的事情，起源地不应该为此承担道德责任，更不应该受到来自外界的道德责难，就像人不应该为太阳东升西落负责一样，联合国对此有明确规定，疾病命名应遵循无歧视无地域原则。退一步说，就算最后病毒起源被证实发生于某地，该地也不应该受到责难，因为人类历史上任何一次大规模传染病的流行，起源地从来不是罪魁祸首，那些在它的流行传染过程中不作为乃至乱作为的人和事才是最大的帮凶。
                  </Item.Description>
                      <Item.Extra>
                        <Button color='instagram' toggle active size='small'><Icon name='thumbs up' />赞同 2020</Button>
                        <Label icon='chat' content='1212 评论' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='share' content='分享' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='star' content='收藏' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Label icon='like' content='喜欢' style={{ backgroundColor: 'white', cursor: 'pointer' }} />
                        <Popup content='Add reactions' trigger={<Icon name='add' style={{ cursor: 'pointer' }} />} />
                        <span style={{ float: 'right' }}><b>2020-12-1 20:20</b> last post</span>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Column>
              <Grid.Column>
                <Segment>

                </Segment>
                <Segment>
                  <div style={{display: 'flex', justifyContent:"space-between"}}>
                    <Header as='h5' icon='chart line' content='Uptime Guarantee' />
                    <Icon name='angle right' fitted style={{float: 'right'}}/>
                  </div>
                  <Grid columns={2} relaxed>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <div style={{color: '#8590a6'}}>昨日被阅读数</div>
                        <div style={{margin: '5px'}}>
                          <Statistic value='5550' size='mini'/>
                        </div>
                        <div>
                          <div style={{color: '#8590a6', display:'inline'}}>较前日</div>
                          <Icon name='long arrow alternate up' color='green'/><b>100%</b>
                        </div>
                      </Container>
                    </Grid.Column>
                    
                    <Grid.Column>
                      <Container textAlign='center'>
                        <div style={{color: '#8590a6'}}>昨日被阅读数</div>
                          <div style={{margin: '5px'}}>
                            <Statistic value='5550' size='mini'/>
                          </div>
                          <div>
                            <div style={{color: '#8590a6', display:'inline'}}>较前日</div>
                            {/* <Icon name='long arrow alternate up' color='green'/><b>100%</b> */}
                            --
                        </div>
                      </Container>
                    </Grid.Column>
                  </Grid>
                </Segment>
                <Segment>
                  <List>
                    <List.Item>
                      <List.Content floated='right'>
                        10
                      </List.Content>
                      <List.Icon name='star'/>
                      <List.Content>my collection</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated='right'>
                          10
                        </List.Content>
                        <List.Icon name='users'/>
                      <List.Content>my collection</List.Content>
                    </List.Item>
                    <List.Item>3</List.Item>
                  </List>
                </Segment>
                <Advertisement unit='medium rectangle' test='medium rectangle' style={{ width: '100%' }}/>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}