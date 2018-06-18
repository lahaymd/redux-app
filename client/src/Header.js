import { Link } from 'react-router-dom'
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link>/li>
                <li><Link to='/filter' component={FilterRoute}>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)

//     < Link to = '/' > home</Link>
//         <Link to='/mikelahay'>mike lahay</Link>
// {/* <Route path='/' component={FeBlend}/> */ }
// <Route exact path='/mikelahay' component={RouterTest} />