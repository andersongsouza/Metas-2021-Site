import React from 'react';

import { Jumbotron, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import Menu from '../components/Menu';

function Home({ data }) {
    return (
        <>
            <Menu />

            <Jumbotron fluid className="list">
                <style>
                    {`.list{
                        background-color: #4682B4;
                        padding-top: 30px;
                        padding-bottom: 150px;
                        margin-bottom: 0rem !important;
                    }.title-top{
                        color: #F5F5F5;
                    }.list-meta{
                        background-color: #F5F5F5 !important;
                        border-color: #4a0242 !important;
                        color: #4F4F4F;
                    }`}
                </style>
                <Container>
                    <h1 className="display-4 text-center title-top">Minhas Metas para 2021!</h1><hr />
                    <ListGroup>
                        {data.metas.map(meta => (
                            <div key={meta._id}>
                                <ListGroupItem className="list-meta">
                                    <ListGroupItemHeading>{meta.name}</ListGroupItemHeading>
                                    <ListGroupItemText>{meta.description}</ListGroupItemText>
                                    <ListGroupItemText>{meta.status}</ListGroupItemText>
                                </ListGroupItem>
                            </div>
                        ))}
                    </ListGroup>
                </Container>
            </Jumbotron>
        </>
    );
}

export async function getServerSideProps() {
    const response = await fetch(`http://api-anderson-souza-nom-br.umbler.net/metas`);
    const data = await response.json();
    //console.log(data);
    return { props: { data } };
}

export default Home;