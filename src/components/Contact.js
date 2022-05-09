import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

export default function Contact() {
    return (

        <Form inline>
        <FormGroup controlId="formInlineName">
          <FormLabel>Name</FormLabel>{' '}
          <FormControl type="text" placeholder="Christine Seddon" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
          <FormLabel>Email</FormLabel>{' '}
          <FormControl type="email" placeholder="noddes@gmail.com" />
        </FormGroup>{' '}
        <Button type="submit">Send</Button>
      </Form>
    )
}
