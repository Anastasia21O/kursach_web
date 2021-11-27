import React from 'react';
import {Card, Container} from 'react-bootstrap';
import {inject} from "mobx-react";


@inject('store')
class News extends React.Component {
    render() {
        const {getAllNews} = this.props.store;

        return (
            <div className={"virsta-div-news"}>
                <Container>
                    <h1>Структурні відділи</h1>
                    <div className="news-container">
                        {getAllNews.map(item => (
                            <Card key={item.id} style={{maxWidth: '40rem'}}>
                                <Card.Header as="h5">{item.title}</Card.Header>
                                <Card.Body>
                                    <Card.Img className={"virsta-images2"} src={item.imageUrl}/>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }

}

export default News;