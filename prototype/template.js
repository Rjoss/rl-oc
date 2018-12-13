import React, {Component} from 'react';
import css, {cmp_drawer} from './styles.css';
import {withDataProvider, withSettingProvider} from 'oc-template-react-compiler/utils';

class Drawer extends Component {
  constructor (props) {
    super();
    this.state = {
      name: props.name,
      visible: props.visible
    };
  }

  componentDidMount () {
    // get the props, change them, and set the state
    // this.props.getData({ name: 'Pippo' }, (err, data) => {
    //   if (err) throw err;
    //   this.setState({ name: data.name });
    // });

    // Don't do this if you don't want to be fired
    // oc.events.on('oc:componentDidMount', (ev, props) => {
    //   console.group('OC Component Mounted');
    //   console.log('initial props');
    //   console.log(props);
    //   console.groupEnd();
    // });
  }

  toggleVisibility (e) {
    e.preventDefault();
    let isVisible = (this.state.visible)? false : true;

    this.props.getData({visible: isVisible}, (err, data) => {
      if (err) throw err;
      this.setState({visible: data.visible});
    });
    return false;
  }

  render () {
    const { getSetting } = this.props;
    const { name } = this.state;
    const visible = (this.state.visible) ? 'is-visible' : 'is-hidden';

    return (
      <div className={`${css['cmp_drawer']}`} data-visible={visible}>
        <h4>
          <a className={css['cmp_drawer__link']} href='#' onClick={this.toggleVisibility.bind(this)}>{this.state.name}</a>
        </h4>

        <div className={css['cmp_drawer__content']}>
          <p>Eu tempor dolore adipisicing minim excepteur enim adipisicing eiusmod sunt voluptate irure enim non.</p>
        </div>

        <code className={`${css['metadata']}`}>
          <p>component name: {getSetting('name')}</p>
          <p>component version: {getSetting('version')}</p>
          <p>registry baseUrl: {getSetting('baseUrl')}</p>
          <p>component staticPath: {getSetting('staticPath')}</p>
        </code>
      </div>
    );
  }
}

// export default App;
export default withSettingProvider(withDataProvider(Drawer));
