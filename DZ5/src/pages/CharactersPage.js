import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../redux/actions'
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'

const CharactersPage = () => {
    const dispatch = useDispatch()
    const { characters, loading } = useSelector(state => state.charactersReducer)

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])

    return (
        <Container>
            <h2 className="text-center">Rick and Morty Characters</h2>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" />
                </div>
            ) : (
                <Row>
                    {characters.map((character) => (
                        <Col key={character.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={character.image} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Button variant="primary">More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    )
}

export default CharactersPage