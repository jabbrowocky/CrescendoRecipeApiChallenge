import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div      
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFBE6',
    paddingTop: '24px',
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  tabsIndicator: {
    backgroundColor: '#356859',    
  }
}));

export default function SimpleTabs({labelValues,paneValues}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs classes={{indicator: classes.tabsIndicator}} 
            className="test-tabs" value={value} 
            onChange={handleChange} variant="fullWidth" 
            aria-label="simple tabs example">
          <Tab label={labelValues[0]} {...a11yProps(0)} />
          <Tab label={labelValues[1]} {...a11yProps(1)} />          
        </Tabs>
      </AppBar>
      <TabPanel style={{}} value={value} index={0}>
        {paneValues[0]}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {paneValues[1]}
      </TabPanel>
      
    </div>
  );
}