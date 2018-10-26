import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  list: any;
}

export class File extends React.Component<Props, any>  {

  constructor(props:Props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
  }


  handleClickOutside = (event) => {
    console.log(event.srcElement.innerText);
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
        this.setState({
            visible : false
        });
    }
  }

  render() {
    return (
      <div>aa</div>
    );
  }
}
