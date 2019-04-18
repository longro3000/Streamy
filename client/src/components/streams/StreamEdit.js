import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        };
        const {title} = this.props.stream;
        return (
          <div>
              <h3>Stream {title} Edit</h3>
              <StreamForm
                initialValues={_.pick(this.props.stream, 'title', 'description')} 
                onSubmit={this.onSubmit}/>
          </div>
          
      );
    }
}

const mapStateToProps = (state, ownProps) => {
        return { stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
