import React from 'react'
import { Table, Container, Image } from 'react-bootstrap';
import ImgPG from './images/PG.jpg';
import Img12A from './images/12A.webp';
import Img15 from './images/15.webp';
import Img18 from './images/18.webp';



const Classifications = () => 
    <div>
        <Container>
            <br/>
            <h1 style={{color: "white"}}><b>Film Classifications</b></h1>
            <br/>
            <Table bordered hover variant="dark" style={{ "max-width": "500px" }}>
                <tbody>
                    <tr>
                        <th><Image fluid="false" src={ImgPG} width="100%"/></th>
                        <th> General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older.</th>
                    </tr>
                    <tr>
                        <th><Image src={Img12A} width="100%"/></th>
                        <th>Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12.</th>

                    </tr>
                    <tr>
                        <th><Image src={Img15} width="100%"/></th>
                        <th>No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</th>
                    </tr>
                    <tr>
                        <th><Image src={Img18} width="100%"/></th>
                        <th>No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.</th>
                    </tr>
                </tbody>
            </Table>
        </Container>  
    </div>;

export default Classifications;
