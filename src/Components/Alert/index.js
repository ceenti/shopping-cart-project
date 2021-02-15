import { render } from "@testing-library/react";

function Alert(){
    return(
        <div className="Alert"  style={{position:'top', marginTop:'20em'}}>
            <Alert color="warning"> Se añadio al carrito</Alert>
        </div>

    )
}
export default Alert;