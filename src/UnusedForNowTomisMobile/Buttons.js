import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


const style = {
  margin: 12,
};

const Buttons = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
    <br />
    <br />
    <h4>Icon Buttons</h4>
    <div>
        <IconButton>
          <ActionHome />
        </IconButton>
    </div>

  </div>
);

export default Buttons;
