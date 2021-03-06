/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Select, { Option } from '@material/react-select';
import TextField, { Input } from '@material/react-text-field';
import DatePicker from '../../common/DatePicker/index';
import TimePicker from '../../common/TimePicker/index';
import UsersSelect from './UsersSelect';
import Editor from '../../common/MarkdownEditor/Editor';
import EditorContainer from '../../common/MarkdownEditor/EditorContainer';

const ContestDetails = ({ formDetails, setFormDetails }) => {
  const onTextFieldChange = (event, keyToBeUpdated) => {
    const { value } = event.target;
    return setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = value;
      // we are making use of ... operator to return a completely new object
      // and thus making the component re-render since the state has changed.
      return { ...previousFormDetails };
    });
  };

  const onAdminsChange = (updatedOptions) =>
    setFormDetails((previousFormDetails) => {
      previousFormDetails.admins = updatedOptions;
      return { ...previousFormDetails };
    });

  const onSelectChange = (index, item, keyToBeUpdated) =>
    setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = item.getAttribute('data-value');
      return { ...previousFormDetails };
    });

  const updateEditorStates = (keyToBeUpdated, value) =>
    setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = value;
      return { ...previousFormDetails };
    });

  const handleDateTimeChange = (date, keyToBeUpdated) => {
    setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = date;
      return { ...previousFormDetails };
    });
  };

  return (
    <Grid style={{ padding: '0px' }}>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField label="Contest Code *" className="mb3 w-100" outlined>
            <Input
              value={formDetails.code}
              id="contestCode"
              onChange={(e) => onTextFieldChange(e, 'code')}
            />
          </TextField>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <Select
            className="mb3 w-100"
            notchedOutlineClassName="pt1"
            enhanced
            outlined
            label="Type *"
            value={formDetails.type}
            onEnhancedChange={(item, index) => onSelectChange(item, index, 'type')}
          >
            <Option value="RATED">RATED</Option>
            <Option value="UNRATED">UNRATED</Option>
          </Select>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField label="Contest Name *" className="mb3 w-100" outlined>
            <Input
              value={formDetails.name}
              id="contestName"
              onChange={(e) => onTextFieldChange(e, 'name')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <EditorContainer title="Description">
            <Editor
              value={formDetails.description}
              setValue={(value) => updateEditorStates('description', value)}
            />
          </EditorContainer>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <UsersSelect
            selectedOptions={formDetails.admins}
            updateSelectedOptions={onAdminsChange}
          />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <DatePicker
            value={formDetails.start}
            id="start-date"
            label="Contest Start Date"
            onChangeFunction={(date) => handleDateTimeChange(date, 'start')}
          />
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TimePicker
            value={formDetails.start}
            id="start-time"
            label="Contest Start Time"
            onChangeFunction={(date) => handleDateTimeChange(date, 'start')}
          />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <DatePicker
            value={formDetails.end}
            id="end-date"
            label="Contest End Date"
            onChangeFunction={(date) => handleDateTimeChange(date, 'end')}
          />
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TimePicker
            value={formDetails.end}
            id="end-time"
            label="Contest End Time"
            onChangeFunction={(date) => handleDateTimeChange(date, 'end')}
          />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <Select
            className="mt3 mb3 w-100"
            notchedOutlineClassName="pt1"
            enhanced
            outlined
            label="Solution Visibility *"
            value={formDetails.solutionVisibility}
            onEnhancedChange={(index, item) => onSelectChange(index, item, 'solutionVisibility')}
          >
            <Option value="AFTER">AFTER</Option>
            <Option value="DURING">DURING</Option>
            <Option value="NEVER">NEVER</Option>
          </Select>
        </Cell>
      </Row>
    </Grid>
  );
};

ContestDetails.propTypes = {
  formDetails: PropTypes.object.isRequired,
  setFormDetails: PropTypes.func.isRequired,
};

export default ContestDetails;
