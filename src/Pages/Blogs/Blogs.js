import React from "react";

const Blogs = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are primarily called as Relational Databases (RDBMS);
            whereas NoSQL database are primarily called as non-relational or
            distributed database. <br />
            SQL databases defines and manipulates data based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice especially for great complex
            queries. But from other side it can be restrictive. A NoSQL database
            has dynamic schema for unstructured data. Data is stored in many
            ways which means it can be document-oriented, column-oriented,
            graph-based or organized as a KeyValue store. This flexibility means
            that documents can be created without having defined structure
            first. Also each document can have its own unique structure.{" "}
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a client-side scripting language that is lightweight,
            cross-platform, and interpreted. Both Java and HTML include it.
            Node.js, on the other hand, is a V8-based server-side programming
            language. <br />
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
