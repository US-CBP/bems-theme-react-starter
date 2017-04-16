import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/lists/SimpleExample';
import ChatExample from './muiExamples/lists/ChatExample';
import ContactExample from './muiExamples/lists/ContactExample';
import FolderExample from './muiExamples/lists/FolderExample';
import NestedExample from './muiExamples/lists/NestedExample';
import SettingsExample from './muiExamples/lists/SettingsExample';
import PhoneExample from './muiExamples/lists/PhoneExample';
import MessagesExample from './muiExamples/lists/MessagesExample';
import SelectableExample from './muiExamples/lists/SelectableExample';

const Lists = () => {
  return (
    <div>
      <h4>List</h4>
      <Card>
        <CardHeader title="Simple list" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Chat list" />
        <CardText>
          <ChatExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Contact list" />
        <CardText>
          <ContactExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Folder list" />
        <CardText>
          <FolderExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Nested list" />
        <CardText>
          <NestedExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Settings list" />
        <CardText>
          <SettingsExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Phone list" />
        <CardText>
          <PhoneExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Messages list" />
        <CardText>
          <MessagesExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Selectable list" />
        <CardText>
          <SelectableExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Lists;
