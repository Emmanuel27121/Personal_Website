import { Html, Body, Head, Heading, Hr, Container,
Preview, Section, Text } from "@react-email/components"



export const ContactEmail = ({name, email, message}) => {
    return (
        <Html>
            <Head />
            <Preview>New message from {name} on your portfolio</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Portfolio Inquiry</Heading>
                    <Text style={text}>
                        <strong>Name:</strong> {name}
                    </Text>
                    <Text style={text}>
                        <strong>Email:</strong> {email}
                    </Text>
                    <Hr style={hr} />
                    <Section style={messageSection}>
                        <Text style={messageText}>{message}</Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Sent from your portfolio at emmanueloje.online
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}
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