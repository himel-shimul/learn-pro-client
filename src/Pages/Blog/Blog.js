import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Card className='m-5 text-center' style={{ width: '' }}>
                <Card.Body>
                    <Card.Title>What is CORS?</Card.Title>
                    <Card.Text>
                    CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

            In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                    </Card.Text>
                </Card.Body>
             </Card>
            <Card className='m-5 text-center' style={{ width: '' }}>
                <Card.Body>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.
                    </Card.Text>
                </Card.Body>
             </Card>
            <Card className='m-5 text-center' style={{ width: '' }}>
                <Card.Body>
                    <Card.Title>How does the private route work?</Card.Title>
                    <Card.Text>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.


                    </Card.Text>
                </Card.Body>
             </Card>
            <Card className='m-5 text-center' style={{ width: '' }}>
                <Card.Body>
                    <Card.Title>What is Node? How does Node work?</Card.Title>
                    <Card.Text>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
                    Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.


                    </Card.Text>
                </Card.Body>
             </Card>
        </div>
    );
};

export default Blog;