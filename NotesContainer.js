import type { Node } from 'react';

import { Container, Card, Button } from 'react-bootstrap';
import React from 'react';
import AddCard from './AddCard';
import NoteCard from './NoteCard';
import localStorageReducer from './localStorageReducer';
import Accordion from 'react-bootstrap/Accordion';
function NotesContainer(): Node {
  const [state, dispatch] = localStorageReducer();
  var count = 0;
  return (
    //main listing
    <>
      <Container>
        <AddCard
          onClick={() =>
            dispatch({
              type: 'addNote',
              content: {
                title: 'New',
                body: ''
              }
            })
          }
        />

        {state.notes.map(item => (
          <ul
            style={{
              listStyleType: 'none',
              width: '45%',
              marginLeft: '25%',
              marginRight: '35%'
            }}
          >
            <li style={{ color: 'black' }} key={item.id}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <NoteCard
                      content={item}
                      update={note =>
                        dispatch({
                          type: 'modifyNote',
                          id: item.id,
                          content: note
                        })
                      }
                      remove={() =>
                        dispatch({
                          type: 'removeNote',
                          id: item.id
                        })
                      }
                    />
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </li>
          </ul>
        ))}
      </Container>
    </>
  );
}

export default NotesContainer;
