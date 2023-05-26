import React, { useContext } from 'react';
import { useNavigation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const Blogs = () => {

    const { setPreloader } = useContext(AuthContext);
    const navigation = useNavigation();
    useSetTitle('Blogs');

    if (navigation.state === 'idle') {
        setPreloader(false);
    }

    return (
        <div className='my-container my-10'>
            <div className="card w-full bg-base-100 shadow-md mb-5">
                <div className="card-body">
                    <h2 className="card-title text-lg">A. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='leading-relaxed'><span className='bg-green-700 px-2 py-1 text-white font-bold me-2 rounded-md'>Answer: </span>An access token is a credential that validates a user's identity and permissions to access specific resources within a system. It is usually a string of characters and is issued by an authentication server upon successful user authentication. Access tokens have a limited lifespan and are used to authorize requests for protected resources. They typically include information such as the user's identity, scope of access, and an expiration time.A refresh token, on the other hand, is a long-lived credential that is used to obtain a new access token when the current one expires. It is securely stored on the client-side and sent to the authorization server to request a fresh access token. Refresh tokens are more persistent and have a longer expiration period compared to access tokens.When it comes to storing tokens on the client-side, best practices suggest that access tokens should be stored in memory or a secure storage mechanism, such as a session variable or local storage. They should be kept protected from unauthorized access. On the other hand, refresh tokens should be stored in a more secure location, such as an encrypted HTTP-only cookie or a secure storage mechanism, to prevent them from being exposed to client-side code or potential cross-site scripting attacks.</p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-md mb-5">
                <div className="card-body">
                    <h2 className="card-title text-lg">B. Compare SQL and NoSQL databases?</h2>
                    <p className='leading-relaxed'><span className='bg-green-700 px-2 py-1 text-white font-bold me-2 rounded-md'>Answer: </span>SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two distinct types of database management systems with contrasting characteristics.SQL databases are based on a relational data model, organizing data into tables with fixed schemas. They employ SQL as the query language for data retrieval and manipulation. SQL databases enforce strong data consistency, integrity, and support ACID properties, making them suitable for complex queries and scenarios where data integrity is paramount.NoSQL databases, on the other hand, embrace a more flexible data model. They can handle unstructured and semi-structured data, such as key-value pairs, documents, columns, or graphs. NoSQL databases prioritize scalability, high performance, and horizontal scaling over strong consistency guarantees. They are commonly used for scenarios involving large volumes of rapidly changing or diverse data, such as real-time applications, big data analytics, and web applications.The choice between SQL and NoSQL depends on factors such as data structure, scalability requirements, and consistency needs. SQL databases excel in structured data environments that demand strong consistency, while NoSQL databases shine in handling diverse, high-volume, and rapidly evolving data with a focus on scalability and performance.</p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-md mb-5">
                <div className="card-body">
                    <h2 className="card-title text-lg">C. What is express js? What is Nest JS?</h2>
                    <p className='leading-relaxed'><span className='bg-green-700 px-2 py-1 text-white font-bold me-2 rounded-md'>Answer: </span>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple yet powerful set of features for building web applications and APIs. With Express.js, developers can easily handle routing, manage HTTP requests and responses, and implement middleware functions to add functionality to their applications. It has a vast ecosystem of plugins and middleware modules that extend its capabilities. NestJS, on the other hand, is a framework for building scalable and maintainable server-side applications using TypeScript. It is built on top of Express.js and adds a layer of structure and organization to the application codebase. NestJS follows the modular architecture pattern and promotes the use of decorators and TypeScript features for creating controllers, services, and modules. It provides features like dependency injection, middleware support, and powerful routing mechanisms.In summary, Express.js is a lightweight and flexible framework for building web applications, while NestJS is a more opinionated framework that adds structure and organization to Express.js applications, making them easier to develop and maintain.</p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-md mb-5">
                <div className="card-body">
                    <h2 className="card-title text-lg">D. What is MongoDB aggregate and how does it work?</h2>
                    <p className='leading-relaxed'><span className='bg-green-700 px-2 py-1 text-white font-bold me-2 rounded-md'>Answer: </span>MongoDB's aggregate is a powerful feature that allows for complex data processing and analysis within the database. It provides a flexible way to perform operations such as filtering, grouping, sorting, joining, and transforming data stored in MongoDB collections.The aggregate framework works by using a pipeline approach. A pipeline is an ordered sequence of stages, where each stage performs a specific operation on the data. These stages can include operations like `$match` for filtering documents, `$group` for grouping documents based on specific fields, `$sort` for sorting documents, `$project` for selecting specific fields, and many more.Each stage in the pipeline takes the output of the previous stage as input and passes its output to the next stage. This allows for a series of operations to be performed on the data, transforming it along the way.The aggregate framework can handle large amounts of data efficiently and takes advantage of MongoDB's indexing capabilities to optimize performance. It also supports a wide range of operators and expressions to perform complex calculations and transformations on the data.In summary, MongoDB's aggregate is a flexible and powerful feature that enables data processing and analysis within the database using a pipeline approach with multiple stages. It provides a rich set of operations and operators to manipulate and transform data stored in MongoDB collections.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;