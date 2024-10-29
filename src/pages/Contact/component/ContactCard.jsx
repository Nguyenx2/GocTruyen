import {
  Container,
  List,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";

const ContactCard = ({ headerText, content, isOrdered = false }) => {
  return (
    <Container bg="bg.1variant" padding="4" borderRadius="lg">
      <VStack align="start">
        <Text textStyle="h4" color="primary.darken" textTransform="uppercase">
          {headerText}
        </Text>
        {isOrdered ? (
          <OrderedList>
            {content.map((item, index) => (
              <ListItem key={index} textStyle="p">
                {item}
              </ListItem>
            ))}
          </OrderedList>
        ) : (
          <List>
            {content.map((item, index) => (
              <ListItem key={index} textStyle="p">
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </VStack>
    </Container>
  );
};

export default ContactCard;
