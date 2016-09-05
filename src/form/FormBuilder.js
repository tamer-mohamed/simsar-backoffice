import { Form } from 'formsy-react';
import React from 'react';

import InputField from './Input';
import Select from './Select';


class FormBuilder extends React.Component {

  render(){
    const {schema} = this.props;
    let fields = [];

    schema.map((field, k) =>{
      switch(true){
        case field.type === 'text':
          fields.push(<InputField type="text" />);
          break;
        case field.type === 'select':
          fields.push(<Select {...field.props}/>);
          break;
      }
    });

    return <Form> {fields} </Form>;
  }
}

FormBuilder.propTypes = {
  schema: React.PropTypes.array.isRequired
};

export default FormBuilder;