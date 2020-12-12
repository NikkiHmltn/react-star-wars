import {Link} from 'react-router-dom';

export default function StarWarsShips(props) {
    
    const starship = props.ships
    const shipDetails = starship.map(shipItem => {
       return (
            <li>
            <Link to={{
            pathname: '/starship',
            state: shipItem,
        }}>{shipItem.name}</Link></li>
       )
       
    })
   
    return(
        <div>
            <ul>
                {shipDetails}
            </ul>
        </div>
    )
}