import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';
import Modal from '../Modal';
import history from '../../history';

import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const {id} = this.props.match.params;
        return(
            //react fragment
            <> 
                <button onClick={() => this.props.deleteStream(id)}>Delete</button>
                <Link to='/'>Cancel</Link>
            </>
        );
    }
    renderContent(){
        if(!this.props.stream) {
            return '';
        }
            return `Are you sure want to delete stream with title: "${this.props.stream.title}"`;
    };
    render() {
        return (
                <Modal
                    title="Delete Stream" 
                    content={this.renderContent}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
      );
    };
}
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
