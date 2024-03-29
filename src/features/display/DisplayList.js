import { useSelector } from 'react-redux';
import { Col, Row} from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartners } from '../partners/partnersSlice';

const DisplayList = () => {
    const item = useSelector((state) => [
        selectFeaturedCampsite(state), 
        selectFeaturedPromotion(state),
        selectFeaturedPartners(state)
    ]);

    console.log('display items: ', item);

    return (
        <Row>
            {item.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;