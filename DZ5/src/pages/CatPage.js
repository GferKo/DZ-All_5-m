import React from 'react';
import { Button, Image, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCat } from '../redux/actions';
import { Link } from 'react-router-dom';

const CatPage = () => {
    const catImage = useSelector((state) => state.catReducer.catImage);
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <h2>Cats & R&M</h2>
            <Row>
                <Col>
                    <Button onClick={() => dispatch(fetchCat())}>Get a Cat</Button>
                </Col>
            </Row>
            {catImage && (
                <Image src={catImage} alt="Random Cat" fluid className="mt-3" />
            )}
        </div>
    );
};

export default CatPage;
