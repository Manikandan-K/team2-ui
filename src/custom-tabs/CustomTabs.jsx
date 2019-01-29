import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class CustomTabs extends React.Component {
    render() {

        let { tabHeaders, tabContents } = this.props;

        return (
            <Tabs>
            <TabList>
                {
                    tabHeaders.map((tabHeader, index) => (
                        <Tab key={`tab-${index}`}>{tabHeader}</Tab>
                    ))
                }
              
            </TabList>
            
           {
               tabContents.map((tabcontent,index)=> 
                <TabPanel key={`tab-content-${index}`}>
                    {tabcontent}
                </TabPanel>
             
               )
           }
          </Tabs>
        )
    }

}

export default CustomTabs;