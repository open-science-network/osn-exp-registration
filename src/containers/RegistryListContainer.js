import { connect } from 'react-redux'
import RegistryList from '../components/RegistryList'

const mapStateToProps = (state, ownProps) => {
  return {
    experiments: state.experiments.experimentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const RegistryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistryList)

export default RegistryListContainer
