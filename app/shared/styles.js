import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 1,
  },
  fullSizeCentred: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddedCentred: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  scrollViewContent: {
    marginTop: 10,
    paddingBottom: 30,
  },
  text: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'lightseagreen',
    padding: 5,
    marginBottom: 3,
  },
  modalHeaderText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  removeButton: {
    width: 25,
    backgroundColor: 'firebrick',
    marginLeft: 1,
  },
  addButton: {
    width: 25,
    backgroundColor: 'dodgerblue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
