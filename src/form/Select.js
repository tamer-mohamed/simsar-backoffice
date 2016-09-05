import {FormControl} from  '@sketchpixy/rubix';
import React from  'react';

class Input extends React.Component {
  render(){
    return (
        <FormControl componentClass="select" {...this.props}>
          {this.props.options.map(option=><option value={option.id}>{option.title}</option>)}
        </FormControl>
    );
  }
}

export default Input;

