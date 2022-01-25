import React, { useState, useEffect} from 'react';
import Menubar from '../Menubar.js';
import { Button, InputGroup, FormControl, Table, Badge } from 'react-bootstrap';
import './Home.css';

function Home() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);

    return (
        <div>
            <Menubar/>
            <br />
            <div className="searchBar">
                <InputGroup className="mb-3">
                <FormControl aria-describedby="basic-addon1" />
                <Button variant="outline-secondary" id="button-addon1">
                    Search
                </Button>
                </InputGroup>
            </div>
            <br />
            <p>The time retrived from the api: {currentTime}.</p>
            <div className="recents">
                <h3>Recently Viewed Listings</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>ID</th>
                            <th>Year</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Part Type</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Posting Date</th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1D4HB48N54F129829</td>
                            <td>120</td>
                            <td>2010</td>
                            <td>Mercedes</td>
                            <td>CLS63</td>
                            <td>Air Susp. Comp. Pump</td>
                            <td>$147.60</td>
                            <td>NS</td>
                            <td>4-1-2020</td>
                        </tr>
                        <tr>
                            <td>SAJDA42C932A64113</td>
                            <td>301</td>
                            <td>2012</td>
                            <td>Mercedes</td>
                            <td>E350</td>
                            <td>Front Bumper Cover</td>
                            <td>$1189.00</td>
                            <td>NS</td>
                            <td>4-3-2020</td>
                        </tr>
                        <tr>
                            <td>2B3CJ5DT2AH308961</td>
                            <td>199</td>
                            <td>2006</td>
                            <td>Mercedes</td>
                            <td>S65</td>
                            <td>Front L/R Upper Seat Cushion</td>
                            <td>$168.10</td>
                            <td>Scrap</td>
                            <td>4-5-2020</td>
                        </tr>
                        <tr>
                            <td>3FAHP0HA7CR108184</td>
                            <td>69</td>
                            <td>2011</td>
                            <td>Mercedes</td>
                            <td>E350</td>
                            <td>Front Grille</td>
                            <td>$180.40</td>
                            <td>Scrap</td>
                            <td>4-6-2020</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="stats">
                <h3>Quick Stats</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Items For Sale</th>
                            <th>Items Sold</th>
                            <th>Avg Time to Sell</th>
                            <th>Avg Shipping Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>550</td>
                            <td>265</td>
                            <td>7d 5h</td>
                            <td>$10.53</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Home;