import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';


class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`/streams/edit/${stream.id}`}>Edit</Link>
                    <div>
                    <Link to={`/streams/delete/${stream.id}`}>Delete</Link>
                    </div>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
                return (
                    <div key={stream.id}>
                        <h3><Link to={`/streams/${stream.id}`}>{stream.title}</Link></h3>
                        <div>{stream.description}</div>
                        {this.renderAdmin(stream)}
                        <div>--------------------------</div>
                    </div>
                );
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to='/streams/new'>
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
            <div>Stream lists</div>
                {this.renderList()}
            <div>{this.renderCreate()}</div>
            </div>
      );
    }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
     };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
