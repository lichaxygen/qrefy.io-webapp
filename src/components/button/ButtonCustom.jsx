import {Button} from './ButtonCustomStyle.js'

function ButtonCustom({title, action, type="button"}){
    return (
        <Button type={type} onClick={action}>
            {title}
        </Button>
    )
}

export default ButtonCustom
