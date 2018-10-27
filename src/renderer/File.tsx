/*
* Copyright (c) Jonathan Jara Morales
* @since 1.0
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactGhLikeDiff } from 'react-gh-like-diff';

import 'react-gh-like-diff/lib/diff2html.min.css';

interface Props {
  file: string;
  comment: boolean;
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
    console.log(this.props.comment);
    if (this.props.comment) {
      const component = event.path[0];
      const clazz = component.getAttribute('class');

      if (clazz === 'line-num1' || clazz === 'line-num2') {
        const trNode = event.path[2];

        const tdNodes = trNode.getElementsByTagName('td');
        const tdNode = tdNodes[1];


        const divNode = document.createElement("div");
        divNode.classList.add('code-review-div');


        const textnode = document.createElement("textarea");
        textnode.classList.add('code-review-comment');
        divNode.appendChild(textnode);

        const buttonNode = document.createElement("button");
        buttonNode.setAttribute('content', 'comment');
        buttonNode.innerHTML = 'comment';
        buttonNode.classList.add('form-control');
        buttonNode.classList.add('code-review-button');
        divNode.appendChild(buttonNode);


        tdNode.appendChild(divNode);



      }

      const domNode = ReactDOM.findDOMNode(this);

      if (!domNode || !domNode.contains(event.target)) {
        this.setState({
          visible : false
        });
      }
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
