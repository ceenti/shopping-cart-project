import { ButtonToggle } from "reactstrap";
import { Icon, InlineIcon } from '@iconify/react';
import homeIcon from '@iconify-icons/flat-color-icons/home';

function ToggleShowSection(props){
    let funcion
    if(props.showCartSection){
        funcion = props.showCartSection 
    }
    if(props.showNewProductSection){
        funcion = props.showNewProductSection
    }
    if(props.showHomeSection){
        funcion = props.showHomeSection
    }
        return(
         
            <>
                <ButtonToggle color="link" outline className="btn-sm my-4" style={{boxShadow:'2px 2px 5px', display:'inline'}} onClick= {funcion}> <Icon  style={{fontSize:'40'}} icon={props.icon} /> </ButtonToggle>{' '}
            </>
        )
    }

export default ToggleShowSection;