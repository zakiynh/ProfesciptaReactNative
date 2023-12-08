import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366', 
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '80%',
    height: '50%',
    backgroundColor: '#303030', 
    opacity: 0.5,
    borderRadius: 10,
    top: '15%',
  },
  title: {
    fontWeight: '700',
    color: 'white',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    marginTop: 12,
    borderWidth: 0.5,
    borderRadius: 8,
    width: '90%',
    paddingLeft: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#3c8ce7',
    padding: 10,
    borderRadius: 10,
    height: 35,
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});