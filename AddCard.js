/**
 * @flow
 */
import type { Node } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

type Props = {|
  onClick: () => void
|};
// ads new note calls add card
function AddCard({ onClick }: Props): Node {
  return (
    <Button
      style={{
        backgroundColor: 'black',
        borderColor: 'black',
        width: '30%',
        height: '30%',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '15%'
      }}
      onClick={onClick}
    >
      New
    </Button>
  );
}

export default AddCard;
