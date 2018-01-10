/**
 * Estilo do componente TabBarMenu
 * 
 * @author Vlamir Santo
 * @since 09/01/2018
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#115E54',
    elevation: 4,
    marginBottom: 20
  },
  containerHeader: {
    backgroundColor: "#114D44"
  },
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },
  tabBar: {
    backgroundColor: '#115E54',
    elevation: 0
  }
});