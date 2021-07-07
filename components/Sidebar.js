import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";
import Dropdown from "./menus/Dropdown";

function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt("Please enter an email address");
    if (!input) return null;
    // 1. Email-validator
    // Add chat into DB 'chats' collection if user !exist and is valid
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      // add or update user
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
    // 2. React-firebase-hooks
  };

  // If chat exist?
  const chatAlreadyExists = (recipientEmail) => {
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <UserAvatar src={user.photoURL} />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <Dropdown />
        </IconsContainer>
      </Header>
      {/* Search Bar */}
      <SearchBar>
        <SearchIcon />
        <SearchInput placeholder="Search chats" />
      </SearchBar>
      {/* Add Chat Button */}
      <AddButton onClick={createChat}>Start A New Chat</AddButton>

      {/* Chat Component (List of Chats) */}
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
}

export default Sidebar;

// Styled CSS
const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
// Header
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled.div``;

// Search Bar
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
// Add Chat Button
const AddButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
