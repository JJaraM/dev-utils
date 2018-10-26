import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactGhLikeDiff } from 'react-gh-like-diff';

import 'react-gh-like-diff/lib/diff2html.min.css';

interface Props {
  file: string;
}

const shelljs = require('shelljs-exec-proxy');
const nodePath = (shelljs.which('node').toString());
shelljs.config.execPath = nodePath;
const gitDiff = "git diff";
const dir = "/Users/jonathan/Desktop/Development/electron";

export class File extends React.Component<Props, any>  {

  constructor(props:Props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
  }


  handleClickOutside = (event) => {

    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
        this.setState({
            visible : false
        });
    }
  }

  render() {

    const repositoryDiff = shelljs.exec('cd ' + dir + " && " + gitDiff + " " + this.props.file);
    const v = repositoryDiff.valueOf();
    const i = 1;

    const defaultOptions = {
      originalFileName: 'Unknown-File-Name',
      updatedFileName: 'Unknown-File-Name',
      inputFormat: 'diff',
      outputFormat: 'line-by-line',
      showFiles: true,
      matching: 'none',
      matchWordsThreshold: 0.25,
      matchingMaxComparisons: 2500
    };

    return (
      <ReactGhLikeDiff key={'diff' + i} diffString={v}  options={defaultOptions} />
    );
  }
}
