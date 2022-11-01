import Redux_Home from "../Component/Redux_Home";
import {connect} from 'react-redux'
import ADD_TO_CART from "../service/Action";

const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(ADD_TO_CART(data))
})

const mapStateToProps=state=>({

})

const Home_container =connect(mapStateToProps,mapDispatchToProps)(Redux_Home);
export default Home_container;

