import  {connect} from 'react-redux'
import Home from "../components/home";
import {addToCart,removeToCart} from '../services/action/action';
const mapStateToProps=state=>({
// cardData:state
data:state.cardItems

})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;