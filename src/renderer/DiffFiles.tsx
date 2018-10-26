import * as React from 'react';

import { File } from './File';

interface Props {
  file: string;
}

export class DiffFiles extends React.Component<Props, any>  {

  constructor(props:Props) {
    super(props);
  }

  render() {
    return (
      <div className="diff-files">
        <div className="diff-files-container">
          <div className="diff-files-reposition">
            <div className="diff-files-reposition-full-size">
                <File file={this.props.file}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
