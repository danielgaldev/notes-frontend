import React, { Component } from 'react';
import { Menu, Segment, Header, Table, Button, Icon } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { semesters } from '../actions';

const CreateSemester = () => (
  <div>
    asd
  </div>
)

class SemestR extends Component {
  state = {
    text: "",
    updateNoteId: null
  }

  componentDidMount() {
    this.props.fetchSemesters();
  }

  render() {
    return (
      <div>
        <Menu fixed='top'>
          <Menu.Item>
            <Header>
              <Icon name='sticky note' size='large' />
              SemestR
            </Header>
          </Menu.Item>
        </Menu>
        <Segment>
          <Header>
            Semesters
          </Header>
          <Table>
            <Table.Body>
              {this.props.semesters.map((semester, index) => (
                <Table.Row key={`semester_${index}`}>
                  <Table.Cell>
                    {semester.number.toString().concat('. semester')}
                  </Table.Cell>
                  <Table.Cell collapsing>
                    <Button
                      onClick={() => this.props.deleteSemester(index)}
                      icon='trash alternate' />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    semesters: state.semesters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSemesters: () => {
      return dispatch(semesters.fetchSemesters());
    },
    deleteSemester: (index) => {
      return dispatch(semesters.deleteSemester(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SemestR);