/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { File } from './File';

import '../renderer/files.scss';

interface Props {
  files: any;
  event: any;
}
export class Files extends React.Component<Props, any>  {

  constructor(props:Props) {
    super(props);
  }

  render() {
    const functionClick = this.props.event;
    return (
      this.props.files.map(function(object, i) {
        const fileInfo = object.trim().split(" ");
        if (fileInfo !== undefined && fileInfo[1] !== undefined) {
          const fileName = fileInfo[1];
          const fileStatus = fileInfo[0];
          return (
            <tr key={'tr' + i} file-name={fileName} id={'file-tr-'+fileName} onClick={functionClick}>
              <td>
                <input type="checkbox" />
              </td>
              <td file-name={fileName} id={'files-status-'+fileName} onClick={functionClick}>
                {fileStatus}
              </td>
              <td onClick={functionClick}>
                <small file-name={fileName} id={'file-name-' + fileName} onClick={functionClick}>{fileName}</small>
              </td>
            </tr>
          );
        }
      })
    );
  }
}
