import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";

export const ContactEmail = ({ name, email, message }) => {
    return React.createElement(Html, null,
        React.createElement(Head),
        React.createElement(Preview, null, `New message from ${name}`),
        React.createElement(Body, { style: main },
            React.createElement(Container, { style: container },
                React.createElement(Heading, { style: h1 }, "New Portfolio Inquiry"),
                React.createElement(Text, { style: text },
                    React.createElement("strong", null, "Name: "), name
                ),
                React.createElement(Text, { style: text },
                    React.createElement("strong", null, "Email: "), email
                ),
                React.createElement(Hr, { style: hr }),
                React.createElement(Section, { style: messageSection },
                    React.createElement(Text, { style: messageText }, message)
                ),
                React.createElement(Hr, { style: hr }),
                React.createElement(Text, { style: footer }, "Sent from emmanueloje.online")
            )
        )
    );
};
const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
};

const h1 = {
    color: "#4f46e5",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "17px 0",
};

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "26px",
};

const messageSection = {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    padding: "20px",
    border: "1px solid #e5e5e5",
};

const messageText = {
    ...text,
    fontStyle: "italic",
};

const hr = {
    borderColor: "#e5e5e5",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};

export default ContactEmail;