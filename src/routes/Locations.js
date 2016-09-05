import React from 'react';
import forEach from 'lodash/foreach';
import pull from 'lodash/pull';
import remove from 'lodash/remove';
import {withRouter} from 'react-router';

import FormBuilder from '../form/FormBuilder';

import {
    Row,
    Col,
    Nav,
    Grid,
    Icon,
    Panel,
    Radio,
    Button,
    MenuItem,
    Checkbox,
    HelpBlock,
    PanelBody,
    FormGroup,
    InputGroup,
    SplitButton,
    PanelHeader,
    ButtonGroup,
    FormControl,
    PanelFooter,
    ControlLabel,
    DropdownButton,
    PanelContainer,
} from '@sketchpixy/rubix';

class LocationForm extends React.Component {

  getSchema(){
    return [
      {
        title: "Country",
        id: "country",
        type: "select",
        props: {
          componentClass: "select",
          options: [
            {
              id: "kuwait",
              title: "Kuwait"
            },
            {
              id: "egypt",
              title: "Egypt"
            },
            {
              id: "ksa",
              title: "KSA"
            },
            {
              id: "qatar",
              title: "Qatar"
            }
          ]
        }
      },
      {
        title: "Title",
        id: "title",
        type: "text",
        props: {
          type: "text",
          placeholder: "Location title"
        }
      },
      {
        title: "Areas",
        id: "areas",
        childs: [
          {type: "text", title: "Area title"}
        ],
        type: "dynamic",
        props: {
          placeholder: "Area title ..."
        }
      }

    ];
  }

  render(){
    const schema = this.getSchema();

    return (
        <PanelContainer noOverflow>
          <Panel>
            <PanelHeader className='bg-green fg-white'>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h3>Add new location </h3>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <FormBuilder schema={schema}/>
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
            <PanelFooter className='bg-darkgreen45 text-right'>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <br/>
                    <div>
                      <Button outlined bsStyle='lightgreen'>cancel</Button>{' '}
                      <Button outlined bsStyle='lightgreen'>submit</Button>
                    </div>
                    <br/>
                  </Col>
                </Row>
              </Grid>
            </PanelFooter>
          </Panel>
        </PanelContainer>
    );
  }
}

LocationForm.contextTypes = {
  langs: React.PropTypes.array
};

@withRouter
export default class Locations extends React.Component {
  render(){
    return (
        <Row>
          <Col sm={6} collapseRight>
            <LocationForm />
          </Col>
        </Row>
    );
  }
}
