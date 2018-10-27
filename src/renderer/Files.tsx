/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */

import * as React from 'react';

import { File } from './File';

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
        const t = object.split("	");


        if (t[1] !== undefined) {
          const fileName = t[1].valueOf();
          const fileStatus = t[0];



          return (
            <tr key={'tr' + i} file-name={fileName} id={'file-tr-'+fileName} onClick={functionClick}>
              <td file-name={fileName} id={'file-status-'+fileName} className="td-selector td-status" onClick={functionClick}>
                {fileStatus}
              </td>
              <td className="td-selector" onClick={functionClick}>
                <small file-name={fileName} id={'file-name-' + fileName} onClick={functionClick}>{fileName}</small>
              </td>
            </tr>
          );
        }

        return (
          <tr key={'a' + i}></tr>
        );
      })
    );
  }
}
