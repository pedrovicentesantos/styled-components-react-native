import colors from '../../theme/colors';

enum CardStatus {
  PAGO = 'pago',
  EM_ABERTO = 'em aberto',
  EM_ATRASO = 'em atraso',
  REVERTIDO = 'revertido'
}

interface ICardProps {
  amount: string;
  status: keyof typeof CardStatus,
}

interface ICardStyledProps {
  color: keyof typeof colors,
  strikeThrough: boolean,
}

type TCardStatusVariant = {
  [key in keyof typeof CardStatus]: {
    color: keyof typeof colors,
    isStatusReversed: boolean
  }
}

export {
  ICardProps,
  CardStatus,
  ICardStyledProps,
  TCardStatusVariant,
};
