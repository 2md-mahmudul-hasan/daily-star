
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const RightNav = () => (
  <div>
    <h2> Log in with google</h2>
    <Button className='mb-2 w-100' variant="outline-primary"><FcGoogle />Log in with google</Button>{' '}
    <Button className='w-100' variant="outline-secondary"><FaGithub />log in with github</Button>{' '}
    <div className="list-itme">
      <h2> Find us on</h2>
      <ListGroup>
        <ListGroup.Item><FaFacebookF />Facebook</ListGroup.Item>
        <ListGroup.Item className='my-2'> <FaTwitter />Twitter</ListGroup.Item>
        <ListGroup.Item><FaInstagramSquare />Instagram</ListGroup.Item>
      </ListGroup>
    </div>
  </div>
);

export default RightNav;