import { Link } from 'react-router-dom'
import {ButtonLink} from './ButtonLinkStyle.js'

function ButtonLink({string, route, action}){
    return (
        <ButtonLink as={Link} to={route} onClick={action}>
            {string}
        </ButtonLink>
    )
}

export default ButtonLink
