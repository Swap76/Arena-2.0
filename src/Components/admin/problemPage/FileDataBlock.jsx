import React from 'react';
import { Headline6, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';

const FileDataBlock = ({ title, fileLink }) => (
  <div className="ma0 mb4" style={{ border: '1px solid purple', borderRadius: '6px' }}>
    <div
      className="pa2"
      style={{
        borderBottom: '1px solid purple',
        background: '#F0E8FF',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
      }}
    >
      <Headline6 style={{ color: 'purple' }} className="ma2">
        {title}
      </Headline6>
    </div>
    <Body1 className="pa2 ma2">
      <a href={`${fileLink}`} className="no-underline gray">
        Click to download the file
      </a>
    </Body1>
  </div>
);

FileDataBlock.propTypes = {
  title: PropTypes.string.isRequired,
  fileLink: PropTypes.string.isRequired,
};

export default FileDataBlock;
