import Board from '../Board';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;


const Container = connect(mapStateToProps)(Board);


export default Container;