import React from 'react';

export default ({ files }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Size</th>
        </tr>
      </thead>
      {files.map(renderFileRow)}
    </table>
  );
}

const renderFileRow = (file_info) => {
  return (
    <tbody key={file_info.Key}>
      <tr>
        <td>{file_info.Key}</td>
        <td>{file_info.Size}</td>
      </tr>
    </tbody>
  );
};
