import React from 'react'

import {
  Grid, Segment, Menu, Input, Dropdown, Icon, Image, Advertisement,
  Header, List, Button, Label, Popup, Divider, Container, Statistic, Tab, Item
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import jenny from './jenny.jpg'
import cover from './image.png'
import elliot from './elliot.jpg'
import matt from './matt.jpg'
import joe from './joe.jpg'
import ade from './ade.jpg'
import './App.css'

const trigger = (
  // <span>
  <>
    <Image src={jenny} avatar style={{ marginBottom: '5px', marginTop: '-5px' }} /> Hello, Bob
  </>
)

const tab1 = 
            <Tab.Pane>
              <Header as='h4' content='我的动态'/>
              <Divider/>
              <Item.Group divided>
                <Item>
                  <Item.Content>
                    <div style={{display:'flex', color: '#8590a6', marginBottom:'10px'}}>
                      <span style={{flex:'1 1'}}>赞同了回答</span>
                      <span>11-30</span>
                    </div>
                    <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                    <Item.Meta>
                      <Image src={jenny} style={{ width: '38px', height: '38px', display: 'inline-block', marginRight:'10px' }} verticalAlign='top'/>
                      <div style={{display:'inline-flex', flexDirection:'column'}}>
                        <span style={{color:'black'}}><h5>IFC Cinema</h5></span>
                        <span style={{marginTop:'5px'}}>我于杀戮之中绽放，亦如黎明前的花朵</span>
                      </div>
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
                      <Image src={jenny} style={{ width: '24px', height: '24px', display: 'inline-block' }} />
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
                      <Image src={jenny} style={{ width: '24px', height: '24px', display: 'inline-block' }} />
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
            </Tab.Pane>

const tab3 = 
            <Tab.Pane>
              <Header as='h4' content='我的收藏夹'/>
              <Divider/>
              <Item.Group divided>
                <Item>
                  <Item.Content>
                    <Item.Header>Arrowhead Valley Camp</Item.Header>
                    <Item.Meta>
                      <List verticalAlign='horizontal' bulleted>
                        <List.Item>2019-01-13 更新</List.Item>
                        <List.Item>1 条内容</List.Item>
                        <List.Item>0 人关注</List.Item>
                      </List>
                    </Item.Meta>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Header>Buck's Homebrew Stayaway</Item.Header>
                    <Item.Meta>
                      <List verticalAlign='horizontal' bulleted>
                          <List.Item>2019-01-13 更新</List.Item>
                          <List.Item>1 条内容</List.Item>
                          <List.Item>0 人关注</List.Item>
                      </List>
                    </Item.Meta>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Header>Arrowhead Valley Camp</Item.Header>
                    <Item.Meta>
                      <List verticalAlign='horizontal' bulleted>
                          <List.Item>2019-01-13 更新</List.Item>
                          <List.Item>1 条内容</List.Item>
                          <List.Item>0 人关注</List.Item>
                      </List>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Tab.Pane>
        
const peopleIFollow = 
                      <Tab.Pane>
                        <Item.Group divided>
                          <Item>
                            <Item.Image src={jenny} style={{width:'60px',height:'60px'}}/>
                            <Item.Content>
                              <Item.Header as='a'>12 Years a Slave</Item.Header>
                              <Item.Meta>
                                <span className='cinema'>Union Square 14</span>
                              </Item.Meta>
                              <Item.Extra>
                                <List verticalAlign='horizontal' bulleted>
                                  <List.Item>215 回答</List.Item>
                                  <List.Item>133 文章</List.Item>
                                  <List.Item>42,395 关注者</List.Item>
                                </List>
                                <Button animated='fade' floated='right' style={{marginTop:'-20px'}}>
                                  <Button.Content visible>已关注</Button.Content>
                                  <Button.Content hidden>取消关注</Button.Content>
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>

                          <Item>
                            <Item.Image src={matt} style={{width:'60px',height:'60px'}}/>
                            <Item.Content>
                              <Item.Header as='a'>12 Years a Slave</Item.Header>
                              <Item.Meta>
                                <span className='cinema'>Union Square 14</span>
                              </Item.Meta>
                              <Item.Extra>
                                <List verticalAlign='horizontal' bulleted>
                                  <List.Item>2019-01-13 更新</List.Item>
                                  <List.Item>1 条内容</List.Item>
                                  <List.Item>0 人关注</List.Item>
                                </List>
                                <Button animated='fade' floated='right' style={{marginTop:'-20px'}}>
                                  <Button.Content visible>已关注</Button.Content>
                                  <Button.Content hidden>取消关注</Button.Content>
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>

                          <Item>
                            <Item.Image src={joe} style={{width:'60px',height:'60px'}}/>
                            <Item.Content>
                              <Item.Header as='a'>12 Years a Slave</Item.Header>
                              <Item.Meta>
                                <span className='cinema'>Union Square 14</span>
                              </Item.Meta>
                              <Item.Extra>
                                <List verticalAlign='horizontal' bulleted>
                                  <List.Item>2019-01-13 更新</List.Item>
                                  <List.Item>1 条内容</List.Item>
                                  <List.Item>0 人关注</List.Item>
                                </List>
                                <Button animated='fade' floated='right' style={{marginTop:'-20px'}}>
                                  <Button.Content visible>已关注</Button.Content>
                                  <Button.Content hidden>取消关注</Button.Content>
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>
                        </Item.Group>
                      </Tab.Pane>

const peopleWhoFollowMe = 
                      <Tab.Pane>
                        <Item.Group divided>
                          <Item>
                            <Item.Image src={elliot} style={{width:'60px',height:'60px'}}/>
                            <Item.Content>
                              <Item.Header as='a'>12 Years a Slave</Item.Header>
                              <Item.Meta>
                                <span className='cinema'>Union Square 14</span>
                              </Item.Meta>
                              <Item.Extra>
                                <List verticalAlign='horizontal' bulleted>
                                  <List.Item>215 回答</List.Item>
                                  <List.Item>133 文章</List.Item>
                                  <List.Item>42,395 关注者</List.Item>
                                </List>
                                <Button primary floated='right' style={{marginTop:'-20px'}}>
                                  <Icon name='plus'/>关注
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>

                          <Item>
                            <Item.Image src={jenny} style={{width:'60px',height:'60px'}}/>
                            <Item.Content>
                              <Item.Header as='a'>12 Years a Slave</Item.Header>
                              <Item.Meta>
                                <span className='cinema'>Union Square 14</span>
                              </Item.Meta>
                              <Item.Extra>
                                <List verticalAlign='horizontal' bulleted>
                                  <List.Item>2019-01-13 更新</List.Item>
                                  <List.Item>1 条内容</List.Item>
                                  <List.Item>0 人关注</List.Item>
                                </List>
                                <Button primary floated='right' style={{marginTop:'-20px'}}>
                                  <Icon name='plus'/>关注
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>

                          <Item>
                            <Item.Image src={jenny} style={{width:'60px',height:'60px'}}/>
                            <Item.Content>
                              <Item.Header as='a'>12 Years a Slave</Item.Header>
                              <Item.Meta>
                                <span className='cinema'>Union Square 14</span>
                              </Item.Meta>
                              <Item.Extra>
                                <List verticalAlign='horizontal' bulleted>
                                  <List.Item>2019-01-13 更新</List.Item>
                                  <List.Item>1 条内容</List.Item>
                                  <List.Item>0 人关注</List.Item>
                                </List>
                                <Button primary floated='right' style={{marginTop:'-20px'}}>
                                  <Icon name='plus'/>关注
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>
                        </Item.Group>
                      </Tab.Pane>

const tab4 = 
            <Tab.Pane>
              <Header as='h4' content='我的关注'/>
              <Divider/>
              <Tab panes={[
                { menuItem: '我关注的人', render: () => peopleIFollow },
                { menuItem: '关注我的人', render: () => peopleWhoFollowMe },
              ]} />
            </Tab.Pane>

const panes = [
  { menuItem: '动态', render: () => tab1 },
  { menuItem: '文章', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: '收藏 11', render: () => tab3 },
  { menuItem: '关注', render: () => tab4 },
]

export default class UserCenter extends React.Component {
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
                    <Icon name='bell' size='large' style={{ position: 'relative', cursor: 'pointer' }}>
                      <Label color='red' circular size='mini' style={{ position: 'absolute', bottom: '50%', left: '40%' }}>
                        22
                  </Label>
                    </Icon>
                  </div>}
                >
                  <Popup.Content>
                    <List horizontal link divided relaxed style={{ width: '360px' }}>
                      <List.Item as='tab'>Terms and Conditions</List.Item>
                      <List.Item as='a'>Privacy Policy</List.Item>
                      <List.Item as='a'>Contact Us</List.Item>
                    </List>
                    <Divider />
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
            <div style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(18,18,18,.1)', width: '100%', marginBottom: '10px' }}>
              <div style={{ width: '100%', height: '240px', backgroundColor: 'red', overflow: "hidden" }}></div>
              <div style={{ position: 'relative', width: '100%', padding: '0 20px 24px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '160px', height: '160px', position: 'absolute', backgroundColor: 'green', left: 0, top: '-25px', zIndex: 1, borderRadius: '8px', border: '4px solid #fff' }}>
                    <Image src={ade} style={{ borderRadius: '4px' }} />
                  </div>
                  <div style={{ paddingTop: '16px', paddingLeft: '32px', borderLeft: '164px solid transparent' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <Header as='h1'>James Bound</Header>
                      <span style={{ marginLeft: '12px', fontSize: '18px', whiteSpace: 'nowrap' }}>extra descrption</span>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '10px' }}>
                        <Icon name='briefcase' size='large' style={{ marginRight: '12px' }} />
                        <List divided horizontal style={{ lineHeight: 0 }}>
                          <List.Item>Terms and Conditions</List.Item>
                          <List.Item>Privacy Policy</List.Item>
                          <List.Item>Contact Us</List.Item>
                        </List>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '10px' }}>
                        <Icon name='man' size='large' style={{ marginRight: '12px' }} />
                      </div>
                      <div style={{ position: 'relative' }}>
                        <div>extra buttons</div>
                        <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
                          <Button primary compact><Icon name='plus' />关注他</Button>
                          <Button basic compact style={{ marginLeft: '16px' }}><Icon name='comments' />发私信</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Grid columns='equal'>
              <Grid.Column width={11}>

                <div>
                  <Tab menu={{ secondary: true, pointing: true }} defaultActiveIndex={3} panes={panes} />
                </div>
                
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header as='h4' dividing content='about user' />
                  {/* <Divider /> */}
                  <Header as='h2' style={{ marginTop: 0 }}>
                    <Image src={jenny} />
                    <Header.Content>
                      Account Settings
                      <Header.Subheader>Manage your preferences</Header.Subheader>
                    </Header.Content>
                  </Header>
                  <Divider />
                  <Grid columns={3} relaxed>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <div style={{ color: '#8590a6' }}>阅读</div>
                        <div style={{ margin: '5px' }}>
                          <Statistic value='5550' size='mini' />
                        </div>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <div style={{ color: '#8590a6' }}>昨日</div>
                        <div style={{ margin: '5px' }}>
                          <Statistic value='5550' size='mini' />
                        </div>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <div style={{ color: '#8590a6' }}>昨日</div>
                        <div style={{ margin: '5px' }}>
                          <Statistic value='5550' size='mini' />
                        </div>
                      </Container>
                    </Grid.Column>
                  </Grid>
                  <div style={{ marginTop: '16px',display:'flex',justifyContent:'space-between' }}>
                    <Button primary><Icon name='plus' />follow him</Button>
                    <Button basic><Icon name='plus' />follow him</Button>
                  </div>
                </Segment>
                <Segment>
                  <Header as='h4' dividing content='his articles' />
                  {/* <Divider /> */}
                  <List relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                        <List.Description as='a'>Updated 10 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                        <List.Description as='a'>Updated 22 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                        <List.Description as='a'>Updated 34 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Segment>
                <Advertisement unit='medium rectangle' test='medium rectangle' style={{ width: '100%' }} />
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