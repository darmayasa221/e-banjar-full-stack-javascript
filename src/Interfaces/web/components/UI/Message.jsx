import React from 'react';
import Card from './Card';

export default function Message(props) {
  return (
    <Card className={`${props.classNameCard}`}>
      <h1 className={`${props.className}`}>{props.message}</h1>
    </Card>
  );
}
