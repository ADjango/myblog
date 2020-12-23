import React from 'react'

import { Grid, Segment, Menu, Input, Dropdown, Icon, Image, Advertisement, 
        Header, List, Button, Label, Popup, Divider, Container, Statistic, Comment, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import jenny from './jenny.jpg'
import elliot from './elliot.jpg'
import matt from './matt.jpg'
import joe from './joe.jpg'
import './App.css'

const trigger = (
  // <span>
  <>
    <Image src={jenny} avatar style={{ marginBottom: '5px', marginTop: '-5px' }} /> Hello, Bob
  </>
)

export default class ArticleDetail extends React.Component {
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
            {/* <Advertisement unit='banner' test='Banner' style={{width:'100%'}}/> */}
            <Advertisement unit='leaderboard' test='leaderboard' style={{ width: '100%' }} />
            <Divider />
            <Grid columns='equal'>
              <Grid.Column width={11}>
                <Segment>
                  <Header as='h1' content='This is article title!!' />
                  <div style={{ color: '#969696' }}>
                    <span>2018.05.08 17:50:50</span> <span>字数 16,497</span> <span>阅读 24,806</span> <span>2 人赞同了该文章</span>
                  </div>
                  <article style={{
                    marginTop: '20px',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    marginBottom: '20px',
                    wordBreak: 'break-word',
                    fontFamily: '-apple-system,BlinkMacSystemFont,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif',
                    color: '#404040',
                    fontSize: '16px'
                  }}>
                    <h2>基础篇</h2>
                    <h3>基本功</h3>
                    <h4>面向对象特征</h4>
                    <p>封装，继承，多态和抽象</p>
                    <ol>
                      <li>
                        <p>封装<br />
                        封装给对象提供了隐藏内部特性和行为的能力。对象提供一些能被其他对象访问的方法来改<br />
                        变它内部的数据。在 Java 当中，有 3 种修饰符： public， private 和 protected。每一种修饰符<br />
                        给其他的位于同一个包或者不同包下面对象赋予了不同的访问权限。<br />
                        下面列出了使用封装的一些好处：</p>
                        <ul>
                          <li>通过隐藏对象的属性来保护对象内部的状态。</li>
                          <li>提高了代码的可用性和可维护性，因为对象的行为可以被单独的改变或者是扩展。</li>
                          <li>禁止对象之间的不良交互提高模块化</li>
                        </ul>
                      </li>
                      <li>
                        <p>继承<br />
                        继承给对象提供了从基类获取字段和方法的能力。继承提供了代码的重用行，也可以在不修改类的情况下给现存的类添加新特性。</p>
                      </li>
                      <li><p>多态<br />
                        多态是编程语言给不同的底层数据类型做相同的接口展示的一种能力。一个多态类型上的操作可以应用到其他类型的值上面。</p>
                      </li>
                      <li><p>抽象<br />
                        抽象是把想法从具体的实例中分离出来的步骤，因此，要根据他们的功能而不是实现细节来创建类。 Java 支持创建只暴漏接口而不包含方法实现的抽象的类。这种抽象技术的主要目的是把类的行为和实现细节分离开。</p>
                      </li>
                    </ol>
                    <h4>final, finally, finalize 的区别</h4>
                    <ol>
                      <li><p>final<br />
                        修饰符（关键字）如果一个类被声明为final，意味着它不能再派生出新的子类，不能作为父类被继承。因此一个类不能既被声明为 abstract的，又被声明为final的。将变量或方法声明为final，可以保证它们在使用中不被改变。被声明为final的变量必须在声明时给定初值，而在以后的引用中只能读取，不可修改。被声明为final的方法也同样只能使用，不能重载。</p>
                      </li>
                      <li><p>finally<br />
                        在异常处理时提供 finally 块来执行任何清除操作。如果抛出一个异常，那么相匹配的 catch 子句就会执行，然后控制就会进入 finally 块（如果有的话）。</p>
                      </li>
                      <li><p>finalize<br />
                        方法名。Java 技术允许使用 finalize() 方法在垃圾收集器将对象从内存中清除出去之前做必要的清理工作。这个方法是由垃圾收集器在确定这个对象没有被引用时对这个对象调用的。它是在 Object 类中定义的，因此所有的类都继承了它。子类覆盖 finalize() 方法以整理系统资源或者执行其他清理工作。finalize() 方法是在垃圾收集器删除对象之前对这个对象调用的。</p>
                      </li>
                    </ol>
                    <h4>int 和 Integer 有什么区别</h4>
                  </article>
                </Segment>
                <Segment>
                  <Comment.Group>
                    <Header as='h3' dividing>
                      Comments
                    </Header>

                    <Comment>
                      <Comment.Avatar src={matt} />
                      <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                          <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                        <Comment.Actions className='commentItem-action'>
                          <Comment.Action className='commentItem-likeBtn'><Icon name='thumbs up'/>赞</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn replyBtn'><Icon name='reply'/>回复</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='thumbs down'/>踩</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='flag'/>举报</Comment.Action>
                        </Comment.Actions>
                          <div className="replayInput">dd</div>
                      </Comment.Content>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src={elliot} />
                      <Comment.Content>
                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                        <Comment.Metadata>
                          <div>Yesterday at 12:30AM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          <p>This has been very useful for my research. Thanks as well!</p>
                        </Comment.Text>
                        <Comment.Actions className='commentItem-action'>
                          <Comment.Action className='commentItem-likeBtn'><Icon name='thumbs up'/>赞</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='reply'/>回复</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='thumbs down'/>踩</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='flag'/>举报</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                      <Comment.Group>
                        <Comment>
                          <Comment.Avatar src={jenny} />
                          <Comment.Content>
                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                            <Comment.Metadata>
                              <div>Just now</div>
                            </Comment.Metadata>
                            <Comment.Text>Elliot you are always so right :)</Comment.Text>
                            <Comment.Actions className='commentItem-action'>
                              <Comment.Action className='commentItem-likeBtn'><Icon name='thumbs up'/>赞</Comment.Action>
                              <Comment.Action className='commentItem-hoverBtn replyBtn'><Icon name='reply'/>回复</Comment.Action>
                              <Comment.Action className='commentItem-hoverBtn'><Icon name='thumbs down'/>踩</Comment.Action>
                              <Comment.Action className='commentItem-hoverBtn'><Icon name='flag'/>举报</Comment.Action>
                            </Comment.Actions>
                            dd
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src={joe} />
                      <Comment.Content>
                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                        <Comment.Metadata>
                          <div>5 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                        <Comment.Actions className='commentItem-action'>
                          <Comment.Action className='commentItem-likeBtn'><Icon name='thumbs up'/>赞</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='reply'/>回复</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='thumbs down'/>踩</Comment.Action>
                          <Comment.Action className='commentItem-hoverBtn'><Icon name='flag'/>举报</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                    <Form reply>
                      <Form.TextArea />
                      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                  </Comment.Group>
                </Segment>
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
                  <div style={{ marginTop: '16px' }}>
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