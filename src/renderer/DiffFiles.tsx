/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */
import * as React from 'react';

import { File } from './File';

interface Props {
  file: string;
  comment: boolean;
}

export class DiffFiles extends React.Component<Props, any>  {

  constructor(props:Props) {
    super(props);
  }

  render() {
    return (
      <div className="diff-files">
        <div className="diff-files-container">
          <File file={this.props.file} comment={true}/>
        </div>
      </div>
    );
  }
}
