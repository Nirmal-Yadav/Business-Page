import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import './tabs.css'

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color:black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: white;
  width: 70%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    // background-color: ${blue[400]};
    color: #155bd5
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    // background-color: ${blue[200]};
    background-color:  #155bd5
  }

  &.${tabUnstyledClasses.selected} {
    // background-color: ${blue[50]};
    color: white;
    background-color:  #155bd5
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  height: 200px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 18px;
  letter-spacing: 0.5px;
  text-align: left;
  word-spacing: 3px;
  
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized() {
    return (
        <TabsUnstyled defaultValue={0} style={{ width: "70%" }}>
            <TabsList style={{ backgroundColor: "lightgrey" }}>
                <Tab >Who We Are</Tab>
                <Tab>Our Vision</Tab>
                <Tab>our History</Tab>
            </TabsList>
            <TabPanel value={0}>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look
                like readable English.
                There are many variations of passages of Lorem Ipsum available, but the majority have in some form,
                by injected humour.</TabPanel>
            <TabPanel value={1}>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look
                like readable English.

                There are many variations of passages of Lorem Ipsum available, but the majority have in some form,
                by injected humour.</TabPanel>
            <TabPanel value={2}>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                look like readable English.

                There are many variations of passages of Lorem Ipsum available, but the majority have in some form,
                by injected humour.</TabPanel>
        </TabsUnstyled>
    );
}

