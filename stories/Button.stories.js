import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/Button';

storiesOf('Button', module).add('with text', () =>
  <Button cetav="test">
    <h1>Hola :3</h1>
  </Button>
);