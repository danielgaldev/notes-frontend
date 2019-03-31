import React, { Component } from 'react';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';


class NewSemester extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: '',
      open: false
    };
  }

  close = () => { this.setState({ open: false }) }
  open = () => { this.setState({ open: true }) }

  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.open}>
            <Icon name='plus' />
            Add Semester
            </Button>
        }
        open={this.state.open}
        onClose={this.close}>
        <Modal.Header>Create a new Semester</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Number</label>
              <input
                placeholder='Semester number...'
                onChange={e => this.setState({ number: e.target.value })} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.close}>
            Cancel
          </Button>
          <Button primary onClick={() => console.log('asd')}>
            <Icon name='save' />
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default NewSemester;
