import React from "react";
import {Container, Figure} from 'react-bootstrap';
import {inject} from 'mobx-react';

@inject('store')
class GalleryPage extends React.Component {
    render() {
        const {getAllImages} = this.props.store;

        return (
            <div className={"virsta-div-gallery"}>
                <Container>
                    <h1>Галерея</h1>
                    <div className="images-container">
                        {getAllImages.map(item => (
                            <Figure key={item.id}>
                                <Figure.Image className={"virsta-images2"}
                                              src={item.imageUrl}
                                />
                                <Figure.Caption>
                                    {item.description}
                                </Figure.Caption>
                            </Figure>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }

}

export default GalleryPage;