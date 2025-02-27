import React from 'react';
import { Fieldset } from './Fieldset';
import { TextInput } from '../TextInput';

export default { title: 'Fieldset' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Fieldset legend="Unstyled fieldset" variant="unstyled" disabled>
        <TextInput label="Name" placeholder="Name" />
        <TextInput label="Email" placeholder="Email" mt="md" />
      </Fieldset>

      <Fieldset legend="Default fieldset" variant="default" mt="xl">
        <TextInput label="Name" placeholder="Name" />
        <TextInput label="Email" placeholder="Email" mt="md" />
      </Fieldset>

      <Fieldset legend="Filled fieldset" variant="filled" mt="xl">
        <TextInput label="Name" placeholder="Name" />
        <TextInput label="Email" placeholder="Email" mt="md" />
      </Fieldset>
    </div>
  );
}
