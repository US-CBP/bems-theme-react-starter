import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CircularDeterminateExample from './muiExamples/progresses/circularProgress/DeterminateExample';
import CircularIndeterminateExample from './muiExamples/progresses/circularProgress/IndeterminateExample';
import LinearDeterminateExample from './muiExamples/progresses/linearProgress/DeterminateExample';
import LinearIndeterminateExample from './muiExamples/progresses/linearProgress/IndeterminateExample';
import RefreshReadyExample from './muiExamples/progresses/refreshIndicator/ReadyExample';
import RefreshLoadingExample from './muiExamples/progresses/refreshIndicator/LoadingExample';

const Progresses = () => {
  return (
    <div>
      <h4>Circular Progress</h4>
      <Card>
        <CardHeader title="Indeterminate progress" />
        <CardText>
          <CircularDeterminateExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Determinate progress" />
        <CardText>
          <CircularIndeterminateExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Linear Progress</h4>
      <Card>
        <CardHeader title="Indeterminate progress" />
        <CardText>
          <LinearIndeterminateExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Determinate progress" />
        <CardText>
          <LinearDeterminateExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Refresh Indicator</h4>
      <Card>
        <CardHeader title="Ready" />
        <CardText>
          <RefreshReadyExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Loading" />
        <CardText>
          <RefreshLoadingExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Progresses;
