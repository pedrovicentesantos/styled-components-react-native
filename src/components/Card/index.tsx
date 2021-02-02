import React from 'react';

import { Container, Label, Description } from './styles';

import { ICardProps, CardStatus, TCardStatusVariant } from './interface';

const Card = ({ amount, status } : ICardProps) => {
  const statusVariant: TCardStatusVariant = {
    PAGO: { color: 'success-400', isStatusReversed: status === 'REVERTIDO' },
    EM_ABERTO: { color: 'warning-400', isStatusReversed: status === 'REVERTIDO' },
    EM_ATRASO: { color: 'error-400', isStatusReversed: status === 'REVERTIDO' },
    REVERTIDO: { color: 'neutral-400', isStatusReversed: status === 'REVERTIDO' },
  };

  // const isStatusReversed = status === 'REVERTIDO';

  return (
    <Container>
      <Label>{amount}</Label>
      <Description
        strikeThrough={statusVariant[status].isStatusReversed}
        color={statusVariant[status].color}
      >
        {CardStatus[status]}
      </Description>
    </Container>
  );
};

export default Card;
