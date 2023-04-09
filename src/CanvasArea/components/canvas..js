import { SaveOutlined,EyeOutlined, AlibabaOutlined,
    ApartmentOutlined,BarChartOutlined,AppstoreOutlined,SettingOutlined, 
    PieChartOutlined,UndoOutlined,RedoOutlined } from '@ant-design/icons';
  
  import { Layout, Menu, theme , Input, Select, Space, Watermark, Button} from 'antd';
  import { useState } from 'react';
  import { Col, Row } from 'antd';
  
   
  const { Header, Content, Sider } = Layout;
   
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Design', '1',  <AppstoreOutlined />,[
      getItem('Input Elements', 'g1', null, [getItem('Option 1', '6'), getItem('Option 2', '7')], 'group'),
      getItem('Layout Elements', 'g2', null, [getItem('Option 3', '8'), getItem('Option 4', '9')], 'group'),
      getItem('Selection Elements', 'g3', null, [
        getItem('Button', '#1'),
        getItem('Check Box', '#2'),
        getItem('Data/Time Picker', '#3'),
        getItem('DropDown', '#4'),
        getItem('List Box', '#5'),
        getItem('Radio Button', '#6'),
        getItem('Slider', '#7'),
      ], 'group'),
    ]),
    getItem('Workflow', '2',<BarChartOutlined />),
    getItem('Data', '3', <PieChartOutlined />),
    getItem('Styles', '4', <AlibabaOutlined />),
    getItem('Plugin', '5',  <ApartmentOutlined />), 
    getItem('Setting', '6', <SettingOutlined />),
    
  ];
  
  const options = [
    {
      value: 'index',
      label: 'index',
    },
    {
      value: 'New page',
      label: 'New page',
    },
  ];
  const { Search } = Input;
  
  const onSearch = (value) => console.log(value);
  
  const New = () => {
      const [collapsed, setCollapsed] = useState(false);
  
      const {
        token: { colorBgContainer },
            } = theme.useToken();
        
    
    return (
   
      <Layout style={{
          minHeight: '100vh',
                    }}  >
     
  
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div
            style={{
             margin:5,
              padding:10,
              textAlign:'center',
              fontFamily:'serif',
              fontSize:32,
              
              color:'rgb(253, 247, 255)',
              
            }}
          >
            noco
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
  
          <Header >
          <Row
        gutter={16}  justify="space-around"
      >
      <Col>   
        <div>
      
          <Select defaultValue=""  placeholder="page..." style={{ width: 120 , marginBottom: 16, }} allowClear 
                options={options} />
         </div>
      </Col>
            
      <Col>
        <div> 
          <Space.Compact>
            <Button type="primary" title = "Undo" icon={<UndoOutlined />} />
            <Button type="primary" title='Redo' icon={<RedoOutlined />}/>
          </Space.Compact>
        </div>
      </Col>
      
     
  
      <Col >
        <div >
        <Search placeholder="input search text" onSearch={onSearch} enterButton  style={{width: 200, margin: 17 }} />
        </div>
      </Col>
  
      <Col>
        <div>
        <Button type="primary" title='preview' icon={<EyeOutlined />}> </Button>
          
        </div>
      </Col>
  
      <Col>
        <div>
         
        <Button type="primary" title='save' icon={<SaveOutlined />}>Save  </Button>
        </div>
      </Col>
   
  </Row>
  
 </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
               <Watermark content="noco">
                  <div
                    style={{
                      margin:(15, 15 ,15 ,15),
                      padding: 20,
                      minHeight: 585,
                      background: colorBgContainer,
                    }}
                  />
              </Watermark> 
          </Content>
  
   
        </Layout>
      </Layout>
    );
  };
  export default New;
